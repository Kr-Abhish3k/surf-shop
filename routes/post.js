const express = require("express");
const router = express.Router();

/* GET Posts  /posts */
router.get("/", (req, res, next) => {
	res.send("/posts");
});

/* GET Posts  /posts/new */
router.get("/new", (req, res, next) => {
	res.send("/posts/new");
});

/* GET Posts show  /posts/:id */
router.get("/:id", (req, res, next) => {
	res.send("/posts/:id");
});

/* GET Posts Edit  /posts/:id/edit */
router.get("/:id/edit", (req, res, next) => {
	res.send("/posts/:id/edit");
});

/* POST Create  posts */
router.post("/", (req, res, next) => {
	res.send("/posts/create");
});

/* PUT Update  */
router.put("/:id", (req, res, next) => {
	res.send("/posts/update");
});

/* Delete   */
router.delete("/:id", (req, res, next) => {
	res.send("/posts/delete");
});

module.exports = router;
