import React, { Component } from "react";
import {Container} from "react-bootstrap";
import "./card.css"
import "./cardCol.css"

export const CardCol =  ({children}) => (
    <div class="card-content">{children}</div>
);

export default class Card extends Component {
    static Col = CardCol;

    render() {
        return (
            <Container className="card-container">
                <div class="card">
                    <div class="card-body">
                        {this.props.children}
                    </div>
                </div>
            </Container>
        )
    }
};