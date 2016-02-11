var React = require("react"),
    ReactBootstrap = require("react-bootstrap");

var Tabs = React.createClass({
    propTypes: {},
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div>
                <ReactBootstrap.Tabs defaultActiveKey={1}>
                    <ReactBootstrap.Tab eventKey={1} title="Tab 1">Tab 1 content</ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={2} title="Tab 2">Tab 2 content</ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={3} title="Tab 3">Tab 3 content</ReactBootstrap.Tab>
                </ReactBootstrap.Tabs>
            </div>);
    }
});

module.exports = Tabs