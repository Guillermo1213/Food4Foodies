import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import API from "../utils/API";
import Thumbnail from "../components/Thumbnail";

export default class RecipeByID extends Component {
  state = {
    recipeDetails: {
      extendedIngredients: []
    }
  };

  componentDidMount() {
    API.getRecipeID(this.props.match.params.id)
      .then(res => {
        console.log(res.data.body);
        return this.setState({ recipeDetails: res.data.body });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.recipeDetails);
    return (
      <li className="list-group-item">
        <div className="divStyle">
          <Row>
            <Col size="md-12">{this.state.recipeDetails.title}</Col>
          </Row>
          <Row>
            <Col size="xs-12 sm-4">
              <Thumbnail src={this.state.recipeDetails.image} />
            </Col>
            <Col size="xs-12 sm-4">{this.state.recipeDetails.instructions}</Col>
            <Col size="xs-12 sm-4">
              {this.state.recipeDetails.extendedIngredients.map(recipe => (
                <li>{recipe.name}</li>
              ))}
            </Col>
          </Row>
        </div>
      </li>
    );
  }
}
