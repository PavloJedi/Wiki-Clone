const articleService = require("../services/ArticleService");

const getAllArticles = async (req, res) => {
  try {
    const articles = await articleService.getAllArticles();
    res.json(articles);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    res.json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createArticle = async (req, res) => {
  try {
    const article = await articleService.createArticle(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    const updatedArticle = await articleService.updateArticle(
      req.params.id,
      req.body
    );
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await articleService.deleteArticle(req.params.id);
    res.json(deletedArticle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const searchArticles = async (req, res) => {
  try {
    const query = req.query.q; 
    const articles = await articleService.searchArticles(query);
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  searchArticles
};
