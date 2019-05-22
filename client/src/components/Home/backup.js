render() {
    console.log(this.populatweek(this.state.plannerResults));
    return (
    <div>
        <Row>
            <Col size="md-3">
                <Day>
                    {this.populatweek(this.state.plannerResults).map(recipe => {

                        var recipeLength = Object.keys(recipe).length;

                        if(recipeLength === 4 && recipe.weekDay === "Monday"){
                        return (
                            <Meal
                                key={recipe.recipeTitle}
                                title={recipe.recipeTitle}
                                id={recipe.recipeId}
                                thumbnail={recipe.imgUrl}
                            />
                        );}
                    })}
                </Day>
            </Col>
            <Col size="md-3">
                <Day>
                    {this.populatweek(this.state.plannerResults).map(recipe => {

                        var recipeLength = Object.keys(recipe).length;

                        if(recipeLength === 4 && recipe.weekDay === "Tuesday"){
                        return (
                            <Meal
                                key={recipe.recipeTitle}
                                title={recipe.recipeTitle}
                                id={recipe.recipeId}
                                thumbnail={recipe.imgUrl}
                            />
                        );}
                    })}
                </Day>
            </Col>
            <Col size="md-3">
                <Day>
                    {this.populatweek(this.state.plannerResults).map(recipe => {

                        var recipeLength = Object.keys(recipe).length;

                        if(recipeLength === 4 && recipe.weekDay === "Wednesday"){
                        return (
                            <Meal
                                key={recipe.recipeTitle}
                                title={recipe.recipeTitle}
                                id={recipe.recipeId}
                                thumbnail={recipe.imgUrl}
                            />
                        );}
                    })}
                </Day>
            </Col>
            <Col size="md-3">
                <Day>
                    {this.populatweek(this.state.plannerResults).map(recipe => {

                        var recipeLength = Object.keys(recipe).length;

                        if(recipeLength === 4 && recipe.weekDay === "Thursday"){
                        return (
                            <Meal
                                key={recipe.recipeTitle}
                                title={recipe.recipeTitle}
                                id={recipe.recipeId}
                                thumbnail={recipe.imgUrl}
                            />
                        );}
                    })}
                </Day>
            </Col>
        </Row>
        <Row>
            <Col size="md-3">
                <Day>
                    {this.populatweek(this.state.plannerResults).map(recipe => {

                        var recipeLength = Object.keys(recipe).length;

                        if(recipeLength === 4 && recipe.weekDay === "Friday"){
                        return (
                            <Meal
                                key={recipe.recipeTitle}
                                title={recipe.recipeTitle}
                                id={recipe.recipeId}
                                thumbnail={recipe.imgUrl}
                            />
                        );}
                    })}
                </Day>
            </Col>
            <Col size="md-3">
                <Day>
                    {this.populatweek(this.state.plannerResults).map(recipe => {

                        var recipeLength = Object.keys(recipe).length;

                        if(recipeLength === 4 && recipe.weekDay === "Saturday"){
                        return (
                            <Meal
                                key={recipe.recipeTitle}
                                title={recipe.recipeTitle}
                                id={recipe.recipeId}
                                thumbnail={recipe.imgUrl}
                            />
                        );}
                    })}
                </Day>
            </Col>
            <Col size="md-3">
                <Day>
                    {this.populatweek(this.state.plannerResults).map(recipe => {

                        var recipeLength = Object.keys(recipe).length;

                        if(recipeLength === 4 && recipe.weekDay === "Sunday"){
                        return (
                            <Meal
                                key={recipe.recipeTitle}
                                title={recipe.recipeTitle}
                                id={recipe.recipeId}
                                thumbnail={recipe.imgUrl}
                            />
                        );}
                    })}
                </Day>
            </Col>
        </Row>
    </div>
    );
}
}