import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailRecipe from "./pages/Recipes";
import RecipeByID from "./pages/RecipeByID";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={DetailRecipe} />
          <Route exact path="/recipe/:id" component={RecipeByID} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
