import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Tabs from "../components/Tabs";
import "../css/test.css";

export default class TabDemo2 extends Component
{
    fromAjax() {
        return "Ajax content";
    }

    render() {
        return (
            <Tabs
                className="redTest"
                tabBarClassName="greenTest"
            >
                <Tabs.Pane
                    title="Demographics"
                    className="blueTest"
                    tabClassName="yellowTest"
                >
                    Demographics
                </Tabs.Pane>
                <Tabs.Pane
                    title="Housing Stock"
                    onClick={ () => alert('clicked') }
                >
                    Housing Stock
                </Tabs.Pane>
                <Tabs.Pane
                    title="Cost-Burdened Households"
                    loadFrom={this.fromAjax}
                >
                    Cost-Burdened Households
                </Tabs.Pane>
                <Tabs.Pane title="Development & Land Use">
                    Development & Land Use
                </Tabs.Pane>
                <Tabs.Pane title="Housing Market Conditions">
                    Housing Market Conditions
                </Tabs.Pane>
            </Tabs>
        );
    }
}
