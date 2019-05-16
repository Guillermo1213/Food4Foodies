import React, { Component } from "react";
import { Row, Col, Container } from "../components/Grid";
import Tabs from "../components/Tabs";
import API from "../utils/API";
import Thumbnail from "../components/Thumbnail";
import Select from "../components/Select";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBotton: 10 }
};

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
        groceries: this.state.recipeDetails.extendedIngredients.map(
          recipe => recipe.name
        ),
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

  // handleSubmit(event) {
  // 	console.log('Add meal')
  // 	event.preventDefault()

  //   const JSX_MODAL = (
  //     <div className="ui dimmer modals visible active">
  //       <div className="ui standard modal visible active">
  //         THIS IS SOME TEXT IN THE MODAL // add some UI features here
  //       </div>
  //     </div>
  //   );
  // }

  handleSubmitFavorite = event => {
    console.log("Add meal");
    event.preventDefault();

    //request to server to add groceries
    axios
      .put("/favorites/add", {
        imgURl: this.state.recipeDetails.image,
        recipeTitle: this.state.recipeDetails.title
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
      <div>
        <Row className="text-center">
          <Col size="md-12">{this.state.recipeDetails.title}</Col>
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
        <div>
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
            Like{" "}
          </button>
        </div>
        <div>
          <Grid container>
            <Grid item sm>
              <Paper style={style.Paper}>
                <Thumbnail src={this.state.recipeDetails.image} />
              </Paper>
            </Grid>
            <Grid item sm>
              <Paper style={style.Paper}>
                <div>
                  <h1>{this.state.recipeDetails.title}</h1>
                  <Tabs>
                    <div label="Instructions">
                      {this.state.recipeDetails.instructions}
                    </div>
                    <div label="Ingredients">
                      {this.state.recipeDetails.extendedIngredients.map(
                        recipe => (
                          <li>{recipe.name}</li>
                        )
                      )}
                    </div>
                    <div label="Sarcosuchus">
                      Nothing to see here, this tab is <em>extinct</em>!
                    </div>
                  </Tabs>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
