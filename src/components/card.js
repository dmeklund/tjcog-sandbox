import React, { Children } from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./card.css"

export const Card = props => (
  <Container fluid>
      <div class="card" style={{width: "100%"}}>
        <div class="card-body">
          <Row class="cardRow">
            <Col class="cardCol">
              <h1 class="card-title">{props.title}</h1>
              <p class="card-text">{props.children}</p>
            </Col>
            <Col><img src={props.imgsrc} class="card-img" alt="..."/></Col>
          </Row>
        </div>
      </div>
  </Container>
);