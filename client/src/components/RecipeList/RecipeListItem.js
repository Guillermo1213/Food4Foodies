import React from "react";
import Thumbnail from "../Thumbnail";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call

export const RecipeListItem = props => (
    <div className="card">
      <div className="img-container">
      <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
        {/* <img
          alt={props.title}
          src={props.thumbnail || "https://placehold.it/300x300"}
        /> */}
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.title}</strong>
          </li>
          <li>
            <Link to={"/recipe/" + props.id}>Get Details!</Link>
          </li>
        </ul>
      </div>
      <span onClick={() => props.favorite(props.id)} className="favorite">
        𝘅
      </span>
    </div>
);


// export const RecipeListItem = props => (
//   <li className="list-group-item">
//     <Container>
//       <Row>
//         <Col size="xs-12 sm-6">
//           <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
//           <span onClick={() => props.favorite(props.id)} className="favorite">
//           X
//           </span>
//           <h3>{props.title}</h3>
//           {/* <a rel="noreferrer noopener" target="_blank" href={props.href}>
//             Go to recipe!
//           </a> */}
//           <Link to={"/recipe/" + props.id}>Get Details!</Link>
//         </Col>
//       </Row>
//     </Container>
//   </li>
// );
