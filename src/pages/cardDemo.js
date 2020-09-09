import React from "react";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from "../components/card";
import placeholder from "../assets/placeholder.jpeg";

export default () => (
    <div>
        <Card>
            <Card.Col>
                <div>
                    <h2>Affordable Housing 101</h2>
                    <p>To address the housing crisis through regional
                    collaboration and mutual support, the Metropolitan
                    Mayors Coalition (MMC) launched a Regional
                    Housing Taskforce to establish a regional housing
                    production goal and identify strategies to achieve
                    that goal throughout the 15 participating
                    communities.</p>
                </div>
            </Card.Col>
            <Card.Col>
                <Image src={placeholder} fluid/>
            </Card.Col>
        </Card>
    </div>
);