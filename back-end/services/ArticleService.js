const Article = require("../models/ArticleModel");

// Отримати всі статті
async function getAllArticles() {
  try {
    const articles = await Article.find();
    return articles;
  } catch (err) {
    throw new Error(err);
  }
}

// Отримати статтю за ID
async function getArticleById(id) {
  try {
    const article = await Article.findById(id);
    return article;
  } catch (err) {
    throw new Error(err);
  }
}

// Створити нову статтю
async function createArticle(articleData) {
  try {
    const article = new Article(articleData);
    const createdArticle = await article.save();
    return createdArticle;
  } catch (err) {
    throw new Error(err);
  }
}

// Оновити існуючу статтю
async function updateArticle(id, updatedData) {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    return updatedArticle;
  } catch (err) {
    throw new Error(err);
  }
}

// Видалити статтю за ID
async function deleteArticle(id) {
  try {
    const deletedArticle = await Article.findByIdAndDelete(id);
    return deletedArticle;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
