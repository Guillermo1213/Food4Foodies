
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import DetailRecipe from "./pages/Recipes";
import RecipeByID from "./pages/RecipeByID";



function App() {
  return (
    <Route {...rest}
      render={props =>
        !!user ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}


class App extends Component {
  state = {
    user: null
  };

  // componentDidMount() {
  //   axios.get('/api/user')
  //     .then(res => {
  //       this.setState({ user: res.data.id }, () => {
  //         this.props.history.push('/');
  //       });
  //     }).catch(err => {
  //       console.log('no user');
  //     });
  // }

  setUser = (res) => {
    this.setState({ user: res.data.id }, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/recipe" component={DetailRecipe} />
        <Route exact path="/recipe/:id" component={RecipeByID} />
        <Route path="/login" render={(props) => <Login {...props} setUser={this.setUser} />} />
        <Route path="/register" component={Register} setUser={this.setUser} />
        <PrivateRoute path="/" exact component={Home} user={this.state.user} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    );
  }
}

export default App;
