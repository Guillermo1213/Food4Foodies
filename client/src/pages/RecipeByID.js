import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import API from "../utils/API";
import Thumbnail from "../components/Thumbnail";
import Select from "../components/Select";
import { Link } from "react-router-dom";
import axios from "axios";

export default class RecipeByID extends Component {
  state = {
    recipeDetails: {
      extendedIngredients: []
    },
    day: "Monday",
    mealSlot: "Breakfast"
  };

  componentDidMount() {
    API.getRecipeID(this.props.match.params.id)
      .then(res => {
        console.log(res.data.body);
        return this.setState({ recipeDetails: res.data.body });
      })
      .catch(err => console.log(err));
  }

  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitMeal = event => {
    console.log("Add meal");
    event.preventDefault();

    //request to server to add groceries
    axios
      .put("/groceries/addMeal", {
        groceries: this.state.recipeDetails.extendedIngredients,
        day: this.state.day,
        meal: this.state.mealSlot
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful added");
        }
      })
      .catch(error => {
        console.log("adding error: ");
        console.log(error);
      });
  };

  handleSubmitFavorite = event => {
    console.log("Add meal");
    event.preventDefault();

    //request to server to add groceries
    axios
      .put("/favorites/add", {
        imgURl: this.state.recipeDetails.image,
        recipeTitle: this.state.recipeDetails.title,
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful added");
        }
      })
      .catch(error => {
        console.log("adding error: ");
        console.log(error);
      });
  };



  render() {
    console.log(this.state.recipeDetails);
    return (
      <li className="list-group-item">
        <div className="divStyle">
          <Row className="text-center">
            <Col size="md-12">{this.state.recipeDetails.title}</Col>
            <Link to={"/"}>Recipes</Link>
          </Row>
          <Row>
            <Col size="xs-12 sm-4">
              <Thumbnail src={this.state.recipeDetails.image} />
            </Col>
            <Col size="xs-12 sm-4">{this.state.recipeDetails.instructions}</Col>
            {!this.state.recipeDetails.extendedIngredients ? (
              <div />
            ) : (
              <Col size="xs-12 sm-4">
                {this.state.recipeDetails.extendedIngredients.map(recipe => (
                  <li>{recipe.name}</li>
                ))}
              </Col>
            )}
          </Row>
        </div>
        <Select
          onSelectChange={this.handleSelectChange}
          mealSlot={this.state.mealSlot}
          day={this.state.day}
        />
        <button
          className="btn btn-primary col-1 col-mr-auto"
          onClick={this.handleSubmitMeal}
          type="submit"
        >
          Add Meal{" "}
        </button>
        <button
          className="btn btn-primary col-1 col-mr-auto"
          onClick={this.handleSubmitFavorite}
          type="submit"
        >
          Add Meal{" "}
        </button>
      </li>
    );
  }
}
