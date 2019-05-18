// import axios from "axios";
import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for

export default {
  fetchRecipes: function(query) {
    return axios.post("/api/recipes/search", null, {
      params: { recipe: query }
    });
  },

  getRecipeID: function(query) {
    return axios.post("/api/recipes/id", null, {
      params: { id: query }
    });
  }
  // ,

  // fetchFavorites: function(){
  //   return axios.put("/api/favorites");
  // },

  // fetchPlanner: function(){
  //   return axios.put("/api/planner");
  // }

};

// export default {
//   getRecipes: function(query) {
//     return axios.get("/api/recipes", { params: { q: query } });
//   }
// };
