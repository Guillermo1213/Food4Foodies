import React, { Component } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeByID from "./pages/RecipeByID";
import Signup from "./components/Sign-up/sign-up";
import LoginForm from "./components/Login/login-form";
import Navbar from "./components/Navbar/navbar";
import ButtonAppBar from "./components/Navbar/ButtonAppBar";
import Home from "./components/Home/home";
import Recipes from "./pages/Recipes";
import Groceries from "./pages/Groceries";
import Favorites from "./pages/favorites";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route exact path="/planner" component={Home} />
        <Route
          exact path="/"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route path="/signup" render={() => <Signup />} />
        <Route exact path="/recipesearch" component={Recipes} />
        <Route exact path="/recipes/:id" component={RecipeByID} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/groceries/pantry" component={Groceries} />
      </div>
    );
  }
}

export default App;
