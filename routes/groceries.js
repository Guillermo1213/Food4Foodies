const express = require("express");
const router = express.Router();
const User = require("../database/models/user");

router.put("/addMeal", function (req, res) {
  console.log("routes/groceries.js, adding ");

  const { groceries, meal, day } = req.body;
  console.log(req.user._id);
  User.findByIdAndUpdate({ _id: req.user._id }, { groceries: groceries }, (addedGroceries) => {
    res.json(addedGroceries);
  });
});


module.exports = router;
