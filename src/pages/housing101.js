import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Tabs from "../components/Tabs";
import ControlledAccordions from "./accordion-demo";
import LocalInfo from "./localinfo";
import Card from "../components/card";

export default () => (
    <Container>
        <Card>
            <Card.Col>
                To address the housing crisis through regional
                collaboration and mutual support, the Metropolitan
                Mayors Coalition (MMC) launched a Regional
                Housing Taskforce to establish a regional housing
                production goal and identify strategies to achieve
                that goal throughout the 15 participating
                communities.
            </Card.Col>
            <Card.Col>
                <code>-Image Here-</code>
            </Card.Col>
        </Card>
    </Container>
);