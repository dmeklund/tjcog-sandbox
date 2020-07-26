import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Tabs as BootstrapTabs, Tab as BootstrapTab, TabContainer} from "react-bootstrap";
import {Tabs as MaterialTabs, Tab as MaterialTab} from "@material-ui/core";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "bootstrap/js/src/button";
import $ from "jquery";
import "../css/tabs.css";
import * as PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default class TabAccordionDemo extends Component
{
    state = {
        tabValue: 2
    };

    handleChange = (event, newValue) => {
        this.setState({tabValue: newValue});
    };

    render() {
        return (
            <div className="container-fluid">
                <br />
                <BootstrapTabs defaultActiveKey="housing_stock" id="housing_map">
                    <BootstrapTab eventKey="demographics" title="Demographics">
                        Demographics
                    </BootstrapTab>
                    <BootstrapTab eventKey="housing_stock" title="Housing Stock">
                        Housing Stock
                    </BootstrapTab>
                    <BootstrapTab eventKey="cost-burdened_households" title="Cost-Burdened Households">
                        Cost-Burdened Households
                    </BootstrapTab>
                    <BootstrapTab eventKey="development_land_use" title="Development & Land Use">
                        Development & Land Use
                    </BootstrapTab>
                    <BootstrapTab eventKey="housing_market_conditions" title="Housing Market Conditions">
                        Housing Market Conditions
                    </BootstrapTab>
                </BootstrapTabs>
                <br/>
                <br/>
                <MaterialTabs
                    value={this.state.tabValue}
                    variant="scrollable"
                    scrollButtons="on"
                    onChange={this.handleChange}
                >
                    <MaterialTab label="Demographics" {...a11yProps(0)} />
                    <MaterialTab label="Housing Stock" {...a11yProps(1)} />
                    <MaterialTab label="Cost-Burdened Households" {...a11yProps(2)} />
                    <MaterialTab label="Development & Land Use" {...a11yProps(3)} />
                    <MaterialTab label="Housing Market Conditions" {...a11yProps(4)} />
                </MaterialTabs>
                <TabPanel value={this.state.tabValue} index={0}>
                    Demographics content
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={1}>
                    Housing Stock content
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={2}>
                    Cost-Burdened Households content
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={3}>
                    Development & Land Use content
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={4}>
                    Housing Market Conditions content
                </TabPanel>
            </div>
        );
    }
}

// $("#tabAccordionDemo").each((index, container) => ReactDOM.render(<TabAccordionDemo />, container));