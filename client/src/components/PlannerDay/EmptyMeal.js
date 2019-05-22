import React from "react";
import { Row, Col } from "../Grid";
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardActions"
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


export const EmptyMeal = props => {
  return (
    <div className="mealCard">
      <Card style={{ margin: '2% 2%' }}>
        <Row>
          <Col size="md-1">
            <Typography style={{ writingMode: "vertical-lr", textOrientation: 'upright', height: 175, textOverflow: 'ellipsis', outline: '3px black solid', outlineOffset: '15px' }} variant="h7">
              {props.mealType}
            </Typography>
          </Col>
          <Col size="md-10">
            <CardContent style={{ justifyContent: 'center', height: '100%' }}>
              <Button>
                  <Fab size="Large" color="disabled" href="/recipesearch" aria-label="Add">
                    <AddIcon />
                  </Fab>
                </Button>
            </CardContent>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
