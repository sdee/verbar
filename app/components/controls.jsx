React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Controls = React.createClass({
    mixins: [LinkedStateMixin],
    propTypes: {
        onNextQuestion:  React.PropTypes.func.isRequired,
        onShowAnswer:  React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return { };
    },
    render: function() {
        console.log("LINK STATE1");
        console.log(this.linkState('enableIrregular'));

        return (
            <div>
            <a className="nextquestion" href="#"
                  onClick={this.props.onNextQuestion}>Next</a>

                <a className="showanswer" href="#"
                  onClick={this.props.onShowAnswer}>Flip</a>
                <input type="checkbox" checkedLink={this.linkState('enableIrregular')} />Enable Irregular
                <input type="checkbox" checkedLink={this.linkState('useVosotros')} />Allow Vosotros
            </div>
        );
    }
});

module.exports = Controls;