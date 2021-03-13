import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";

// This component exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ 
  name,
  stargazers,
 }) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-8 sm-9">
            <h3>{name}</h3>
            <p>{stargazers}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
