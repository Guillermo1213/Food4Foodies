import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import API from "../utils/API";

export default class RecipeByID extends Component {
  state = {
    recipeDetails: {}
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
    return (
      <div>
        <Row>
          <Col size="xs-12">{this.state.recipeDetails.title}</Col>
        </Row>
        <Row>
          <Col size="xs-6">{this.state.recipeDetails.image}</Col>
          <Col size="xs-6">{this.state.recipeDetails.instructions}</Col>
        </Row>
      </div>
    );
  }
}
