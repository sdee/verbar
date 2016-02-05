React = require("react");

var Controls = React.createClass({
    propTypes: {
        onNextQuestion: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return { };
    },
    render: function() {
        return (
            <div>
            <a className="nextquestion" href="#"
                  onClick={this.props.onNextQuestion}>Next</a>
            </div>
        );
    }
});

module.exports = Controls;
