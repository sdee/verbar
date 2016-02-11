var React = require("react"),
    ReactBootstrap = require("react-bootstrap"),
    Fluxxor = require("fluxxor"),
    StoreWatchMixin = Fluxxor.StoreWatchMixin,
    FluxMixin = Fluxxor.FluxMixin(React);
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserAnswer = require("./userAnswer.jsx");

var Controls = React.createClass({
    mixins: [FluxMixin, LinkedStateMixin, StoreWatchMixin("FilterStore")],
    getStateFromFlux: function () {
        var flux = this.getFlux();
        var FilterStore = this.getFlux().store("FilterStore");
        return {
            useVosotros: FilterStore.useVosotros,
            enableIrregular: FilterStore.enableIrregular
        };
    },
    render: function () {
        return (
            <div>
                <ReactBootstrap.ButtonToolbar>
                    <ReactBootstrap.Button bsStyle="success" onClick={this.onNextQuestion}>Next Question</ReactBootstrap.Button>
                    <ReactBootstrap.Button bsStyle="primary" onClick={this.onShowAnswer}>Flip Card</ReactBootstrap.Button>
                </ReactBootstrap.ButtonToolbar>
            </div>
        );
    },
    onNextQuestion: function () {
        this.getFlux().actions.nextQuestion(this.state.enableIrregular, this.state.useVosotros);
    },
    onShowAnswer: function () {
        this.getFlux().actions.showAnswer();
    }
});

module.exports = Controls;