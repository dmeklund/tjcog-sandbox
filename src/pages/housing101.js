import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default () => (
    <Container>
        <div class="card" style={{width: "100%"}}>
            <div class="card-body">
                <h3 class="card-title">Affordable Housing 101</h3>
                <p className="card-text">
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
                </p>
            </div>
        </div>
    </Container>
);