const ArticleModel = require("../models/ArticleModel");

exports.getAllArticles = async () => {
  return await ArticleModel.find();
};

exports.createArticle = async (articleData) => {
  return await ArticleModel.create(articleData);
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
  return await ArticleModel.find({ title: { $regex: query, $options: 'i' } });
};

