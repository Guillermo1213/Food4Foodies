import React, { Component } from 'react'
import axios from "axios";
import { EmptyMeal, Meal } from "../PlannerDay"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { Row, Col } from "../Grid";

class Home extends Component {

    state = {
        plannerResults: []
    };

    componentDidMount() {
        axios
            .get("/planner")
            .then(res => {
                return this.setState({ plannerResults: res.data[0].planner });
            })

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
                <Grid container spacing={24} style={{ padding: 24, textAlign: 'center', justifyContent: 'center', height: '90vh', overflow: 'scroll' }}>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Typography style={{textAlign: 'center'}} variant="headline">Monday</Typography>
                        <Divider></Divider>
                        {this.populatweek(this.state.plannerResults).map(recipe => {

                            var recipeLength = Object.keys(recipe).length;

                            if (recipeLength === 5 && recipe.weekDay === "Monday") {
                                return (
                                    <Grid item>
                                        <Meal key={recipe.recipeTitle}
                                            title={recipe.recipeTitle}
                                            id={recipe.recipeId}
                                            thumbnail={recipe.imgUrl}
                                            mealType={recipe.mealType}
                                        />
                                    </Grid>
                                );
                            } else if (recipeLength === 2 && recipe.weekDay === "Monday"){
                                return (
                                    <Grid item>
                                    <EmptyMeal mealType={recipe.mealType}/>
                                </Grid>
                                );
                            }
                        })}
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Typography style={{textAlign: 'center'}} variant="headline">Tuesday</Typography>
                        <Divider></Divider>
                        {this.populatweek(this.state.plannerResults).map(recipe => {

                            var recipeLength = Object.keys(recipe).length;

                            if (recipeLength === 5 && recipe.weekDay === "Tuesday") {
                                return (
                                    <Grid item>
                                        <Meal key={recipe.recipeTitle}
                                            title={recipe.recipeTitle}
                                            id={recipe.recipeId}
                                            thumbnail={recipe.imgUrl}
                                            mealType={recipe.mealType}
                                        />
                                    </Grid>
                                );
                            } else if (recipeLength === 2 && recipe.weekDay === "Tuesday"){
                                return (
                                    <Grid item>
                                    <EmptyMeal mealType={recipe.mealType}/>
                                </Grid>
                                );
                            }
                        })}
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Typography style={{textAlign: 'center'}} variant="headline">Wednesday</Typography>
                        <Divider></Divider>
                        {this.populatweek(this.state.plannerResults).map(recipe => {

                            var recipeLength = Object.keys(recipe).length;

                            if (recipeLength === 5 && recipe.weekDay === "Wednesday") {
                                return (
                                    <Grid item>
                                        <Meal key={recipe.recipeTitle}
                                            title={recipe.recipeTitle}
                                            id={recipe.recipeId}
                                            thumbnail={recipe.imgUrl}
                                            mealType={recipe.mealType}
                                        />
                                    </Grid>
                                );
                            } else if (recipeLength === 2 && recipe.weekDay === "Wednesday"){
                                return (
                                    <Grid item>
                                    <EmptyMeal mealType={recipe.mealType}/>
                                </Grid>
                                );
                            }
                        })}
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Typography style={{textAlign: 'center'}} variant="headline">Thursday</Typography>
                        <Divider></Divider>
                        {this.populatweek(this.state.plannerResults).map(recipe => {

                            var recipeLength = Object.keys(recipe).length;

                            if (recipeLength === 5 && recipe.weekDay === "Thursday") {
                                return (
                                    <Grid item>
                                        <Meal key={recipe.recipeTitle}
                                            title={recipe.recipeTitle}
                                            id={recipe.recipeId}
                                            thumbnail={recipe.imgUrl}
                                            mealType={recipe.mealType}
                                        />
                                    </Grid>
                                );
                            } else if (recipeLength === 2 && recipe.weekDay === "Thursday"){
                                return (
                                    <Grid item>
                                    <EmptyMeal mealType={recipe.mealType}/>
                                </Grid>
                                );
                            }
                        })}
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Typography style={{textAlign: 'center'}} variant="headline">Friday</Typography>
                        <Divider></Divider>
                        {this.populatweek(this.state.plannerResults).map(recipe => {

                            var recipeLength = Object.keys(recipe).length;

                            if (recipeLength === 5 && recipe.weekDay === "Friday") {
                                return (
                                    <Grid item>
                                        <Meal key={recipe.recipeTitle}
                                            title={recipe.recipeTitle}
                                            id={recipe.recipeId}
                                            thumbnail={recipe.imgUrl}
                                            mealType={recipe.mealType}
                                        />
                                    </Grid>
                                );
                            } else if (recipeLength === 2 && recipe.weekDay === "Friday"){
                                return (
                                    <Grid item>
                                    <EmptyMeal mealType={recipe.mealType}/>
                                </Grid>
                                );
                            }
                        })}
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Typography style={{textAlign: 'center'}} variant="headline">Saturday</Typography>
                        <Divider></Divider>
                        {this.populatweek(this.state.plannerResults).map(recipe => {

                            var recipeLength = Object.keys(recipe).length;

                            if (recipeLength === 5 && recipe.weekDay === "Saturday") {
                                return (
                                    <Grid item>
                                        <Meal key={recipe.recipeTitle}
                                            title={recipe.recipeTitle}
                                            id={recipe.recipeId}
                                            thumbnail={recipe.imgUrl}
                                            mealType={recipe.mealType}
                                        />
                                    </Grid>
                                );
                            } else if (recipeLength === 2 && recipe.weekDay === "Saturday"){
                                return (
                                    <Grid item>
                                    <EmptyMeal mealType={recipe.mealType}/>
                                </Grid>
                                );
                            }
                        })}
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Typography style={{textAlign: 'center'}} variant="headline">Sunday</Typography>
                        <Divider></Divider>
                        {this.populatweek(this.state.plannerResults).map(recipe => {

                            var recipeLength = Object.keys(recipe).length;

                            if (recipeLength === 5 && recipe.weekDay === "Sunday") {
                                return (
                                    <Grid item>
                                        <Meal key={recipe.recipeTitle}
                                            title={recipe.recipeTitle}
                                            id={recipe.recipeId}
                                            thumbnail={recipe.imgUrl}
                                            mealType={recipe.mealType}
                                        />
                                    </Grid>
                                );
                            } else if (recipeLength === 2 && recipe.weekDay === "Sunday"){
                                return (
                                    <Grid item>
                                    <EmptyMeal mealType={recipe.mealType}/>
                                </Grid>
                                );
                            }
                        })}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Home
