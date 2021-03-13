import React from "react";
import { Container, Row, Col } from "../Grid";


function Topic(props) {
  return (
    <Container>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{props.topic.name}</h3>
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            {/* <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            // </a> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Starred by {props.topic.stargazerCount}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-8 md-10">
          <ul>{props.topic.relatedTopics}</ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Topic;