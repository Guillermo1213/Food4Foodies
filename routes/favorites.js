const express = require("express");
const router = express.Router();
const User = require("../database/models/user");

router.put("/add", function (req, res) {

  const { imgUrl, recipeTitle, recipeId } = req.body;

  const favoriteObject = {
    recipeId: recipeId,
    imgUrl: imgUrl,
    recipeTitle: recipeTitle
  }

  User.findByIdAndUpdate(
    { _id: req.user._id },
    { $push: { favorites: favoriteObject } },
    addedFavorite => {
      res.json(addedFavorite);
    }
  );
});


router.get("/", (req, res) => {

  User.find({
    _id: req.user._id
  }, function (err, favorites) {
    if (err) return res.json(err)
    res.json(favorites)
  });
});

module.exports = router;
