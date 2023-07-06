const articleService = require("../services/ArticleService");

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await articleService.getAllArticles();
    res.json(articles);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    res.json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const article = await articleService.createArticle(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateArticle = async (req, res) => {
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

exports.deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await articleService.deleteArticle(req.params.id);
    res.json(deletedArticle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.searchArticles = async (req, res) => {
  try {
    const query = req.query.q;
    const articles = await articleService.searchArticles(query);
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReport = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const report = await articleService.getReport(startDate, endDate);
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
