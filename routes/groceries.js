const express = require("express");
const router = express.Router();
const User = require("../database/models/user");

router.put("/addMeal", function (req, res) {
  console.log("routes/groceries.js, adding ");

  const { groceries, meal, day, imgUrl, recipeTitle } = req.body;

  const newMeal = {
    weekDay: day,
    mealType: meal,
    imgUrl: imgUrl,
    recipeTitle: recipeTitle
  }

  // User.findOneAndUpdate(
  //   { $elemMatch: { _id: req.user._id }, planner: day },
  //   { $push: { $in: [newMeal]} }
  // );

    User.findByIdAndUpdate(
      { _id: req.user._id },
      { $push: { groceries: groceries, planner: newMeal } }
    );
  });

  // User.findByIdAndUpdate(
  //   { _id: req.user._id },
  //   { $push: { groceries: groceries } },
  //   addedMeal => {
  //     res.json(addedMeal);
  //   }
  // );
// });

module.exports = router;
