import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class ControlledOpenSelect extends React.Component {
  state = {
    day: "Monday",
    mealSlot: "Breakfast",
    open: false
  };

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  // handleOpen = () => {
  //   this.setState({ open: true });
  // };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="meal-day">Day</InputLabel>
          <Select
            // open={this.state.open}
            // onClose={this.handleClose}
            // onOpen={this.handleOpen}
            value={this.props.day}
            onChange={this.props.onSelectChange}
            inputProps={{
              name: "day",
              id: "meal-day"
            }}
          >
            <MenuItem value={"Monday"}>Monday</MenuItem>
            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
            <MenuItem value={"Thursday"}>Thursday</MenuItem>
            <MenuItem value={"Friday"}>Friday</MenuItem>
            <MenuItem value={"Saturday"}>Saturday</MenuItem>
            <MenuItem value={"Sunday"}>Sunday</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="meal-slot">Meal</InputLabel>
          <Select
            // open={this.state.open}
            // onClose={this.handleClose}
            // onOpen={this.handleOpen}
            value={this.props.mealSlot}
            onChange={this.props.onSelectChange}
            inputProps={{
              name: "mealSlot",
              id: "meal-slot"
            }}
          >
            <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
            <MenuItem value={"Lunch"}>Lunch</MenuItem>
            <MenuItem value={"Dinner"}>Dinner</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledOpenSelect);
