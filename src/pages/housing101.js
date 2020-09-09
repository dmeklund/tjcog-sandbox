import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Tabs from "../components/Tabs";
import ControlledAccordions from "./accordion-demo";
import LocalInfo from "./localinfo";

export default () => (
    <Container>
        <div className="card" style={{width: "100%"}}>
            <div className="card-body">
                <h3 className="card-title">Affordable Housing 101</h3>
                    <Row>
                        <Col>
                            To address the housing crisis through regional
                            collaboration and mutual support, the Metropolitan
                            Mayors Coalition (MMC) launched a Regional
                            Housing Taskforce to establish a regional housing
                            production goal and identify strategies to achieve
                            that goal throughout the 15 participating
                            communities.
                        </Col>
                        <Col>Image here</Col>
                    </Row>

                    <Row>
                        <Tabs className="style2">
                            <Tabs.Pane title="Demographics">
                                <Row>
                                    <Col>
                                        <ControlledAccordions />
                                    </Col>
                                    <Col style={{maxHeight: "300px", overflow: "auto"}}>
                                        <LocalInfo />
                                    </Col>
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
                    </Row>
            </div>
        </div>
    </Container>
);