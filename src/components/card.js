import React, { Component } from "react";
import {Container} from "react-bootstrap";
import "./card.css"
import "./cardCol.css"

export const CardCol = props => <div className="card-content">{props.children}</div>;

export default class Card extends Component {
    static Col = CardCol;

    render() {
        return (
            <Container className="card-container">
                <div className="card">
                    <div className="card-body">
                        {React.Children.map(this.props.children, child => child.type === Card.Col ? child : "")}
                    </div>
                </div>
            </Container>
        )
    }
};