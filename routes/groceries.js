const express = require("express");
const router = express.Router();
const controller = require("../controller/index");
const User = require("../database/models/user");

//reads as pantry/pantry
router.get("/pantry", controller.getGroceries);

router.post("/pantry", controller.deleteIngred);

router.put("/addMeal", function(req, res) {
  console.log("routes/groceries.js, adding ");

  const { groceries, meal, day, imgUrl, recipeTitle, recipeId} = req.body;

  const newMeal = {
    weekDay: day,
    mealType: meal,
    imgUrl: imgUrl,
    recipeTitle: recipeTitle,
    recipeId: recipeId
    };

  User.findByIdAndUpdate(
    { _id: req.user._id },
    { $push: { groceries: groceries, planner: newMeal } },
    function(err, mealAdded) {
      if (err) return res.json(err);
      res.json(mealAdded);
    }
  );
});

module.exports = router;
