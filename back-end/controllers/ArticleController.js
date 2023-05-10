const articleService = require("../services/ArticleService");

const getAllArticles = async (req, res, next) => {
  try {
    const articles = await articleService.getAllArticles();
    res.status(200).json(articles);
  } catch (err) {
    next(err);
  }
};

const getArticleById = async (req, res, next) => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    res.status(200).json(article);
  } catch (err) {
    next(err);
  }
};

const createArticle = async (req, res, next) => {
  try {
    const article = await articleService.createArticle(req.body);
    res.status(201).json(article);
  } catch (err) {
    next(err);
  }
};

const updateArticle = async (req, res, next) => {
  try {
    const updatedArticle = await articleService.updateArticle(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedArticle);
  } catch (err) {
    next(err);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const deletedArticle = await articleService.deleteArticle(req.params.id);
    res.status(200).json(deletedArticle);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
