const express = require("express");
const router = express.Router();
const articleController = require("../controllers/ArticleController");

router.get('/search', articleController.searchArticles);

router.get("/", articleController.getAllArticles);

router.get("/report", articleController.getReport);

router.get("/:id", articleController.getArticleById);

router.post("/", articleController.createArticle);

router.patch("/:id", articleController.updateArticle);

router.delete("/:id", articleController.deleteArticle);


module.exports = router;
