var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index");
});
router.get("/design", function(req, res, next) {
    res.render("design");
});

module.exports = router;