import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid, Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";

const style = {
  root: {
    width: "100%",
    backgroundColor: "gray"
  }
};

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
        <Jumbotron />
        <Container>
          <Paper className="text-center">
            {this.state.groceriesResults.map(ingred => (
              <li>
                {/* {ingred.id} */}
                {ingred.name}
                <Button onClick={() => this.handleSubmitDelete(ingred.id)}>
                  <DeleteIcon />
                </Button>
              </li>
            ))}
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Groceries;
