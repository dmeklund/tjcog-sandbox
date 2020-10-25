import React from "react";
import Container from "react-bootstrap/Container";
import {WebMapView} from "../components/mapview"

const LocalInfo = (props) => (
    <Container>
        <WebMapView dataname={props.dataname} />
    </Container>
)

export default LocalInfo;