import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "../components/Tabs";
import {Col, Row} from "react-bootstrap";
import LocalInfo from "./localinfo";
import Card from "../components/card";
import Accordion from "../components/Accordion";

const MapControls = <Accordion>
    <Accordion.Pane title="Households">
        <p>Household data</p>
    </Accordion.Pane>
    <Accordion.Pane title="Population Information">
        <p>Population data</p>
    </Accordion.Pane>
    <Accordion.Pane title="Labor Market">
        <p>Labor data</p>
    </Accordion.Pane>
    <Accordion.Pane title="Income & Poverty Information">
        <p>Income data</p>
    </Accordion.Pane>
</Accordion>;

const TriangleRegionalData = () => (
    <Container>
        <Card>
            <Card.Col>
                <h1>Triangle Regional Data</h1>
                <p>This interactive data and mapping tool standardizes
                    over 20 datasets from a variety of city, state, and
                    federal sources to present over 100 indicators on
                    New York City’s housing and neighborhoods. It
                    includes housing subsidy information, as well as
                    neighborhood level information on housing
                    markets, home affordability, demographics, and
                    neighborhood conditions.</p>
            </Card.Col>
            <Card.Col>
                <code>-Image Here-</code>
            </Card.Col>
        </Card>
        <br />
        <br />
        <div className="row">
            <div className="m-auto d-inline-block text-center col-9">
                <h3>What is the state of housing in my community?</h3>
                <h3>(ARGIS Storymap)</h3>
                <p>
                    This allows users to identify currently subsidized properties in the city, the
                    subsidy type and program applicable to specific properties, and the start and end
                    date for the subsidy on a property, allowing the user to identify properties at risk

                    of exiting from affordability restrictions.
                </p>
            </div>
        </div>
        <br />
        <br />
        <Tabs className="style2">
            <Tabs.Pane title="Demographics">
                <Row>
                    <div className="col-md-6">
                        {MapControls}
                    </div>
                    <div className="col-md-6">
                        <LocalInfo />
                    </div>
                </Row>
            </Tabs.Pane>
            <Tabs.Pane title="Housing Stock">
                Housing Stock
            </Tabs.Pane>
            <Tabs.Pane title="Cost-Burdened Households">
                Cost-Burdened Households
            </Tabs.Pane>
            <Tabs.Pane title="Development & Land Use">
                Development & Land Use
            </Tabs.Pane>
            <Tabs.Pane title="Housing Market Conditions">
                Housing Market Conditions
            </Tabs.Pane>
        </Tabs>
    </Container>
)

export default TriangleRegionalData;
