import React, {Component} from "react";
// import ReactDOM from "react-dom";
import {Tabs as MaterialTabs, Tab as MaterialTab} from "@material-ui/core";
// import $ from "jquery";
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

export default class Tabs extends Component
{
    static Pane = () => {};

    state = {tabValue: 0};

    handleChange = (event, newValue) => this.setState({tabValue: newValue});

    render() {
        return (
            <div className={this.props.className+" container-fluid"}>

                <MaterialTabs
                    value={this.state.tabValue}
                    variant="scrollable"
                    scrollButtons="on"
                    onChange={this.handleChange}
                    className={"tabPanes "+this.props.tabBarClassName}
                >
                    {React.Children.map(this.props.children || null, (child, index) => {
                        return (child.type === Tabs.Pane) ? <MaterialTab
                            label={child.props.title}
                            className={child.props.tabClassName}
                            onClick={child.props.onClick && child.props.onClick.bind(this)}
                        /> : "";
                    })}
                </MaterialTabs>

                {React.Children.map(this.props.children || null, (child, index) => {
                    let children = child.props.loadFrom ? child.props.loadFrom(index) : child.props.children;

                    return (child.type === Tabs.Pane) ? <TabPanel
                        value={this.state.tabValue}
                        index={index}
                        className={child.props.className}
                    >{children}</TabPanel> : "";
                })}

            </div>
        );
    }
}

// $("#tabAccordionDemo").each((index, container) => ReactDOM.render(<TabAccordionDemo />, container));