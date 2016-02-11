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
                    <ReactBootstrap.Tab eventKey={1} title="Planning">
                        Tab 1 content
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={2} title="Arriving">Tab 2 content</ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={3} title="Eating">Tab 3 content</ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={4} title="Exploring">Tab 4 content</ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={5} title="Interacting">Tab 5 content</ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={6} title="Shopping">Tab 6 content</ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={7} title="Caution">Tab 7 content</ReactBootstrap.Tab>
                </ReactBootstrap.Tabs>
            </div>);
    }
});

module.exports = Tabs