React = require("react");

var Controls = React.createClass({
    propTypes: {
        onNextQuestion:  React.PropTypes.func.isRequired,
        onShowAnswer:  React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return { };
    },
    render: function() {
        return (
            <div>
            <a className="nextquestion" href="#"
                  onClick={this.props.onNextQuestion}>Next</a>

                <a className="showanswer" href="#"
                  onClick={this.props.onShowAnswer}>Flip</a>
            </div>
        );
    }
});

module.exports = Controls;