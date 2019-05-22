const express = require("express");
const router = express.Router();
const User = require("../database/models/user");


router.get("/", (req, res) => {

  User.find({
    _id: req.user._id
  }, function (err, planner) {
    if (err) return res.json(err)
    res.json(planner)
  });
});

module.exports = router;
