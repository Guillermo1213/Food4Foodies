import React, { Component } from "react";
import axios from "axios";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
require("../components/styles.css");


export default class Favorites extends Component {
  state = {
    favoriteResults: []
  };

  componentDidMount() {
    axios
      .get("/favorites")
      .then (res => {
        return this.setState({ favoriteResults: res.data[0].favorites});
      });
  };

  likeRecipe = id => {
    const favoriteResults = this.state.favoriteResults.filter(
      recipe => recipe.recipeId !== id
    );
    this.setState({ favoriteResults });
  };

  render() {
    console.log(this.state.favoriteResults);

    return(
      <div>
      <Jumbotron />
      <Container>
        <Row>
          <Col size="xs-12">
            {!this.state.favoriteResults ? (
              <h1 className="text-center">You have no favorites ._.</h1>
            ) : (          
              <RecipeList>
                {this.state.favoriteResults.map(recipe => {
                  return (            
                    <RecipeListItem
                      key={recipe.recipeTitle}
                      title={recipe.recipeTitle}
                      id={recipe.recipeId}
                      thumbnail={recipe.imgUrl}
                    />
                  );
                })}
              </RecipeList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}
