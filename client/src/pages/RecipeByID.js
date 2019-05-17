import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Tabs from "../components/Tabs";
import API from "../utils/API";
import Thumbnail from "../components/Thumbnail";
import Select from "../components/Select";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import FavoriteIcon from "@material-ui/icons/Favorite";
require("../components/styles.css");

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBotton: 10,
    height: 500,
    overflowY: "auto"
  },
  images: {
    objectFit: "contain"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
    margin: 40
  },
  iconHeart: {
    color: "rgba(255, 255, 255, 0.54)",
    margin: 20
  },
  root: {
    width: "auto",
    height: "auto",
    maxWidth: 500
  },
  justify: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden"
  }
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
        {/* <Row className="text-center">
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
        </Row> */}
        <div>
          <Grid container>
            <Grid item sm>
              <Paper style={style.Paper}>
                <GridListTile>
                  <Thumbnail
                    style={style.images}
                    src={this.state.recipeDetails.image}
                  />
                  <GridListTileBar
                    // titlePosition="top"
                    actionIcon={
                      <IconButton style={style.icon}>
                        <InfoIcon />
                        {/* <FavoriteIcon /> */}
                      </IconButton>
                    }
                    // actionPosition="left"
                  />
                </GridListTile>
              </Paper>
            </Grid>
            <Grid item sm>
              <Paper style={style.Paper}>
                <div>
                  <h1>{this.state.recipeDetails.title}</h1>
                  <Tabs>
                    <div style={style.lineHeight} label="Instructions">
                      {this.state.recipeDetails.instructions}
                    </div>
                    <ol label="Ingredients">
                      {this.state.recipeDetails.extendedIngredients.map(
                        recipe => (
                          <li style={style.inline}>{recipe.originalString}</li>
                        )
                      )}
                    </ol>
                    <div label="IngredientsDeux">
                      {this.state.recipeDetails.extendedIngredients.map(
                        recipe => (
                          <List style={style.root}>
                            <ListItem alignItems="flex-start">
                              <ListItemText primary={recipe.originalString} />
                            </ListItem>
                          </List>
                        )
                      )}
                    </div>
                  </Tabs>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <div style={style.justify}>
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
        </div>
      </div>
    );
  }
}
