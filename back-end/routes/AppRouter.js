const router = require("express").Router();
const userRouter = require("./UserRoutes");
const articleRoutre = require("./ArticlesRouter");

router.use("/users", userRouter);
router.use("/articles", articleRoutre);

module.exports = router;