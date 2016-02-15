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
                    <ReactBootstrap.Tab eventKey={2} title="Arriving">
                        Tab 2 content
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={3} title="Eating">Tab 3 content</ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={4} title="Exploring">
                        <ReactBootstrap.Table responsive>
                            <thead>
                                <tr>
                                    <th>What</th>
                                    <th>Where</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Iconic Landmark</td>
                                    <td>Golden Gate Bridge</td>
                                </tr>
                                 <tr>
                                    <td>New Landmark</td>
                                    <td>Bay bridge</td>
                                </tr>
                                <tr>
                                    <td>Postcard Photo</td>
                                    <td>Golden Gate bridge from Baker Beach</td>
                                </tr>
                                <tr>
                                    <td>Most Hipster neighborhood</td>
                                    <td>The Mission</td>
                                </tr>

                                <tr>
                                    <td>Best Stroll</td>
                                    <td>Along the Embarcadero</td>
                                </tr>
                                <tr>
                                    <td>Best View</td>
                                    <td>Twin Peaks</td>
                                </tr>
                                <tr>
                                    <td>Place to Escape</td>
                                    <td>Napa Valley, Highway 1</td>
                                </tr>

                            </tbody>
                        </ReactBootstrap.Table>

                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={5} title="Interacting">Tab 5 content</ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={6} title="Shopping">Tab 6 content</ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={7} title="Caution">Tab 7 content</ReactBootstrap.Tab>
                </ReactBootstrap.Tabs>
            </div>);
    }
});
module.exports = Tabs