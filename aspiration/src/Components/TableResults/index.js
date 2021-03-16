import React from "react";
import { Container, Row, Col } from "../Grid";


function TableResults(props) {

  return (
    <Container>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h2 className="font-italic"> Topic:  {props.name}</h2>
        </Col>
        <Col size="md-4">
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Starred by {props.stargazerCount}</p>
        </Col>
      </Row>

      <Row>
        <Col size="md-6">
          <h5>Related Topics (max 10)</h5>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-8 md-10">
          <ul>
            {props.relatedTopics.map( item => {
              return <li ><button id={item.name} onClick={props.itemClicked}>{item.name} starred by {item.stargazerCount} users</button></li>;
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default TableResults;