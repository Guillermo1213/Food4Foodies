import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import { Button } from "@material-ui/core";

class Groceries extends React.Component {
  state = {
    groceriesResults: []
  };

  componentDidMount() {
    axios.get("/groceries/pantry").then(res => {
      console.log("foods", res);
      return this.setState({ groceriesResults: res.data[0].groceries });
    });
    // getGroceries();
  }

  handleSubmitDelete(id) {
    // console log the id of the ingredient
    var idArr = this.state.groceriesResults.filter(function(grocery) {
      return grocery.id !== id;
    });

    API.deleteingred(idArr).then(res => {
      this.setState({ groceriesResults: idArr });
    });
  }

  render() {
    console.log(this.state.groceriesResults);
    return (
      <div>
        <h1>hi</h1>
        <div>
          {this.state.groceriesResults.map(ingred => (
            <li>
              {ingred.id}
              {ingred.name}
              <Button onClick={() => this.handleSubmitDelete(ingred.id)}>
                X
              </Button>
            </li>
          ))}
          {/* {this.state.groceriesName.map(ingredient => (
            <li>{ingredient.name}</li>
          ))} */}
        </div>
      </div>
    );
  }

  //   getGroceries() {
  //     console.log("I got foods!");
  //     axios.get("/pantry/groceries").then(groceries => {
  //       console.log("hi", groceries);
  //       this.setState({ groceries: groceries.data });
  //     });
  //   }
}

export default Groceries;
