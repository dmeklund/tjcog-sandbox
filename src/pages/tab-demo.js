import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Tabs from "../components/Tabs";

export default class TabDemo extends Component
{
    render() {
        return (
                <Tabs>
                    <Tabs.Pane title="Demographics">
                        Demographics
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
        );
    }
}
