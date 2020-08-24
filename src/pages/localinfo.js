import React from "react";
import Container from "react-bootstrap/Container";
import {WebMapView} from "../components/mapview"

const LocalInfo = () => (
    <Container>
        <WebMapView centerlat="-78.8479" centerlng="35.97393"/>
    </Container>
)

export default LocalInfo;