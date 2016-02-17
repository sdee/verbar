var React = require("react"),
    ReactBootstrap = require("react-bootstrap");
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CustomOptions = React.createClass({
    mixins: [FluxMixin, LinkedStateMixin],
    getInitialState: function () {
        return {
            enableIrregular: false,
            useVosotros: false
        };
    },
    render: function () {
        return (
                <ReactBootstrap.Panel header="Customize your lesson">
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col md={4}>
                                <IrregularCheckbox/>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col md={4}>
                                <VosotrosCheckbox/>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col md={4}>
                            <RepeatCheckbox/>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <TensesCheckgroup/>
                </ReactBootstrap.Panel>
        );
    }
});
module.exports = CustomOptions;