import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeByID from "./pages/RecipeByID";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Recipes} />
          <Route exact path="/recipe/:id" component={RecipeByID} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
