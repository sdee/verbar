var React = require("react"),
    ReactBootstrap = require("react-bootstrap");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserAnswer = require("./userAnswer.jsx");

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
            <div>
                <ReactBootstrap.Panel header="Customize">
                <input type="checkbox" checkedLink={this.linkState('enableIrregular')} />
                Enable Irregular
                <input type="checkbox" checkedLink={this.linkState('useVosotros')} />
                Use Vosotros<br></br>
                </ReactBootstrap.Panel>
            </div>
        );
    }
});

module.exports = CustomOptions;