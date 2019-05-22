import React from "react";
import { Row, Col } from "../Grid";
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"


export const Meal = props => {
  return (
    <div className="mealCard">
      <Card style={{margin:'2% 2%'}}>
        <Row>
          <Col size="md-1">
          <Typography style={{writingMode: "vertical-lr", textOrientation: 'upright', height: 175, textOverflow: 'ellipsis', outline: '3px black solid', outlineOffset: '15px'}} variant="h7">
              {props.mealType}
            </Typography>
          </Col>
          <Col size="md-8">
            <CardMedia style={{ height: 'auto', paddingTop: '56.25%' }}
              image={props.thumbnail}
              title={props.title}
            />
          </Col>
          <Col size="md-3">
            <CardContent style={{ paddingLeft: '0' }}>
              <Typography variant="title" style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                {props.title}
              </Typography>
            </CardContent>
            <CardActions>
            <Chip
                label="Cook!"
                component="a"
                href={"/recipes/" + props.id}
                clickable
              />
            </CardActions>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
