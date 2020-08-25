import React from "react";
import Container from "react-bootstrap/Container";
import {WebMapView} from "../components/mapview"

const LocalInfo = () => (
    <Container>
        <WebMapView dataname="DurhamLBAR_110519"/>
    </Container>
)

export default LocalInfo;