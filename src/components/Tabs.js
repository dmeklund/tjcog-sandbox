import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Tabs as MaterialTabs, Tab as MaterialTab} from "@material-ui/core";
import $ from "jquery";
import * as PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "../css/tabs.css";

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

export class TabContent extends Component
{
    //
}

export default class Tabs extends Component
{
    static Pane = TabContent;

    state = {
        tabValue: 0
    };

    handleChange = (event, newValue) => {
        this.setState({tabValue: newValue});
    };

    render() {
        return (
            <div className="container-fluid">
                <MaterialTabs
                    value={this.state.tabValue}
                    variant="scrollable"
                    scrollButtons="on"
                    onChange={this.handleChange}
                    className={"tabPanes "+this.props.className}
                >
                    {React.Children.map(this.props.children || null, (child, index) => {
                        if (child.type === Tabs.Pane) {
                            return <MaterialTab label={child.props.title} {...a11yProps(index)} />
                        }
                    })}
                </MaterialTabs>
                {React.Children.map(this.props.children || null, (child, index) => {
                    if (child.type === Tabs.Pane) {
                        return <TabPanel value={this.state.tabValue} index={index}>{child.props.children}</TabPanel>
                    }
                })}
            </div>
        );
    }
}

// $("#tabAccordionDemo").each((index, container) => ReactDOM.render(<TabAccordionDemo />, container));