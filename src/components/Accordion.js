import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion as MaterialAccordion} from '@material-ui/core';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../css/accordion.css";

function styles() {
    return makeStyles(theme => {
        return {
            root: {
                width: '100%',
            },
            heading: {
                fontSize: theme.typography.pxToRem(15),
                flexBasis: '33.33%',
                flexShrink: 0,
            },
            secondaryHeading: {
                fontSize: theme.typography.pxToRem(15),
                color: theme.palette.text.secondary,
            },
        };
    });
}

export default class Accordion extends Component
{
    static Pane = () => {};

    static classes = styles();

    handleChange(panel) {
        return (event) => {
            this.setState({expanded: this.state.expanded === panel ? false : panel});
        };
    }

    state = {expanded: false};

    render() {
        return (
            <div className={"accordion "+Accordion.classes.root+" "+this.props.className}>
                {React.Children.map(this.props.children || null, (child, index) => {
                    let children = child.props.loadFrom ? child.props.loadFrom(index) : child.props.children;
                    let name = "panel"+index;

                    return (child.type === Accordion.Pane) ? <MaterialAccordion
                        expanded={this.state.expanded === name}
                        onChange={this.handleChange(name)}
                        onClick={child.props.onClick && child.props.onClick.bind(this)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls={name+"bh-content"}
                            id={name+"bh-header"}
                        >
                            {child.props.title ?
                                <Typography className={Accordion.classes.heading}>{child.props.title}</Typography> : ""}
                            {child.props.description ?
                                <Typography className={Accordion.classes.secondaryHeading}>{child.props.description}</Typography> : ""}
                        </AccordionSummary>
                        <AccordionDetails>
                            {children}
                        </AccordionDetails>
                    </MaterialAccordion> : "";
                })}
            </div>
        );
    }
}
