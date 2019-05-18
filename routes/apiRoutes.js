require("dotenv").config();
const unirest = require("unirest");
const axios = require("axios");
const router = require("express").Router();
const User = require("../database/models/user");


// router.get("/recipes", (req, res) => {
//   console.log("hell");
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

router.post("/recipes/search", (req, res) => {
  console.log(req.query.recipe);
  unirest
    .get(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=10&offset=0`
    )
    .query({
      query: req.query.recipe
    })
    .header("X-RapidAPI-Host", process.env.REACT_APP_GENERAL_RECIPE_HOST)
    .header("X-RapidAPI-Key", process.env.REACT_APP_GENERAL_RECIPE_KEY)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(422).json(err);
    });
});

router.post("/recipes/:id", (req, res) => {
  unirest
    .get(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${
      req.query.id
      }/information`
    )
    .header("X-RapidAPI-Host", process.env.REACT_APP_DETAIL_RECIPE_HOST)
    .header("X-RapidAPI-Key", process.env.REACT_APP_DETAIL_RECIPE_KEY)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(422).json(err);
    });
});

// router.put("/favorites", (req, res) => {
//   User.findById({ _id: req.user._id },
//   favorites => {
//     res.json(favorites);
//   }).all()
// });

// router.put("/planner", (req, res) => {

// });

module.exports = router;
