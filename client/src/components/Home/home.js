import React, { Component } from 'react'
import axios from "axios";
import { Day, Meal} from "../PlannerDay"
// import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Row, Col } from "../Grid";
// import Jumbotron from "../components/Jumbotron";
// require("../components/styles.css");

class Home extends Component {

    state = {
        plannerResults: []
    };

    componentDidMount() {
        axios
            .get("/planner")
            .then(res => {
                return this.setState({ plannerResults: res.data[0].planner });
            });
    };

    populatweek(unsortedDays) {

        const sortedDays = [{ weekDay: "Monday", mealType: "Breakfast" }, { weekDay: "Tuesday", mealType: "Breakfast" }, { weekDay: "Wednesday", mealType: "Breakfast" }, { weekDay: "Thursday", mealType: "Breakfast" }, { weekDay: "Friday", mealType: "Breakfast" }, { weekDay: "Saturday", mealType: "Breakfast" }, { weekDay: "Sunday", mealType: "Breakfast" }, { weekDay: "Monday", mealType: "Snack" }, { weekDay: "Tuesday", mealType: "Snack" }, { weekDay: "Wednesday", mealType: "Snack" }, { weekDay: "Thursday", mealType: "Snack" }, { weekDay: "Friday", mealType: "Snack" }, { weekDay: "Saturday", mealType: "Snack" }, { weekDay: "Sunday", mealType: "Snack" }, { weekDay: "Monday", mealType: "Lunch" }, { weekDay: "Tuesday", mealType: "Lunch" }, { weekDay: "Wednesday", mealType: "Lunch" }, { weekDay: "Thursday", mealType: "Lunch" }, { weekDay: "Friday", mealType: "Lunch" }, { weekDay: "Saturday", mealType: "Lunch" }, { weekDay: "Sunday", mealType: "Lunch" }, { weekDay: "Monday", mealType: "Dinner" }, { weekDay: "Tuesday", mealType: "Dinner" }, { weekDay: "Wednesday", mealType: "Dinner" }, { weekDay: "Thursday", mealType: "Dinner" }, { weekDay: "Friday", mealType: "Dinner" }, { weekDay: "Saturday", mealType: "Dinner" }, { weekDay: "Sunday", mealType: "Dinner" }];

        for (var i = 0; i < unsortedDays.length; i++) {
            var weekDay = unsortedDays[i].weekDay;
            var mealType = unsortedDays[i].mealType;
            var index;

            for (var j = 0; j < sortedDays.length; j++) {
                if (sortedDays[j].weekDay === weekDay && sortedDays[j].mealType === mealType) {
                    index = j;
                }
            }

            sortedDays[index] = unsortedDays[i];
        }

        return sortedDays
    }


    render() {
        console.log(this.populatweek(this.state.plannerResults));
        return (
        <div>
            <Row>
                <Col size="xs-12">
                    <Day>
                        {this.populatweek(this.state.plannerResults).map(recipe => {
                            return (
                                <Meal
                                    key={recipe.recipeTitle}
                                    title={recipe.recipeTitle}
                                    id={recipe.recipeId}
                                    thumbnail={recipe.imgUrl}
                                />
                            );
                        })}
                    </Day>
                </Col>
            </Row>
        </div>
        );
    }
}

export default Home
