const express = require("express");
const router = express.Router();
const User = require("../database/models/user");

router.put("/add", function(req, res) {
  console.log("favorites/favorites.js, adding ");

  const { imgUrl, recipeTitle, recipeId } = req.body;

  const favoriteObject = {
      recipeId: recipeId,
      imgUrl: imgUrl,
      recipeTitle: recipeTitle
  }

  console.log(req.user._id);
  User.findByIdAndUpdate(
    { _id: req.user._id },
    {$push: {favorites: favoriteObject} },
    addedFavorite => {
      res.json(addedFavorite);
    }
  );
});

module.exports = router;
