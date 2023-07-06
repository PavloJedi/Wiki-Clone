const ArticleModel = require("../models/ArticleModel");

exports.getAllArticles = async () => {
  return await ArticleModel.find();
};

exports.createArticle = async (articleData) => {
  const article = await ArticleModel.create(articleData);
  const populatedArticle = await ArticleModel.findById(article._id).populate(
    "author",
    "name"
  );
  return populatedArticle;
};

exports.getArticleById = async (id) => {
  return await ArticleModel.findById(id);
};

exports.updateArticle = async (id, articleData) => {
  return await ArticleModel.findByIdAndUpdate(id, articleData, {
    new: true,
    runValidators: true,
  });
};

exports.deleteArticle = async (id) => {
  return await ArticleModel.findByIdAndDelete(id);
};

exports.searchArticles = async (query) => {
  return await ArticleModel.find({ title: { $regex: query, $options: "i" } });
};

exports.getReport = async (startDate, endDate) => {
  startDate = new Date(startDate);
  endDate = new Date(endDate);

  const articleCount = await ArticleModel.find({
    createdAt: { $gte: startDate, $lte: endDate },
  }).countDocuments();

  const topAuthors = await ArticleModel.aggregate([
    {
      $match: {
        createdAt: { $gte: startDate, $lte: endDate },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "authorData",
      },
    },
    {
      $unwind: "$authorData",
    },
    {
      $group: {
        _id: "$authorData._id",
        name: { $first: "$authorData.name" },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 5 },
  ]);

  return { articleCount, topAuthors };
};
