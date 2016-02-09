var React = require("react"),
    ReactBootstrap = require("react-bootstrap");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserAnswer = require("./userAnswer.jsx");

var Controls = React.createClass({
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
                <ReactBootstrap.Button bsStyle="success" onClick={this.onNextQuestion}>Next Question</ReactBootstrap.Button>
                <ReactBootstrap.Button bsStyle="primary" onClick={this.onShowAnswer}>Show Answer</ReactBootstrap.Button>
            </div>
        );
    },
    onNextQuestion: function () {
        this.getFlux().actions.nextQuestion(this.linkState('enableIrregular').value, this.linkState('useVosotros').value);
    },
    onShowAnswer: function () {
        //pass filters to show answer!
        this.getFlux().actions.showAnswer();
    }
});

module.exports = Controls;