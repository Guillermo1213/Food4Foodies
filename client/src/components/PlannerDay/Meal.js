import React from "react";
import { Row, Col } from "../Grid";
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"


export const Meal = props => {
  return (
    <Card>
      <Row>
        <Col size="md-8" style={{paddingBottom: 0}}>
            <CardMedia style={{ height: 'auto', paddingTop: '56.25%' }}
              image={props.thumbnail}
              title={props.title}
            />
        </Col>
        <Col size="md-4">
          <CardContent>
            <Typography variant="title" style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical'}}>
              {props.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={"/recipes/" + props.id}>
              Cook
            </Button>
          </CardActions>
        </Col>
      </Row>
    </Card>
  )
}
