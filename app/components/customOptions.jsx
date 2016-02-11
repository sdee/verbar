var React = require("react"),
    ReactBootstrap = require("react-bootstrap");
var LinkedStateMixin = require('react-addons-linked-state-mixin'),
    VosotrosCheckbox= require("./filters/vosotros_checkbox.jsx");
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
                <VosotrosCheckbox/>
                </ReactBootstrap.Panel>
            </div>
        );
    }
});

module.exports = CustomOptions;