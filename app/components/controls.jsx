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
            enableIrregular: FilterStore.enableIrregular,
            useVosotros: FilterStore.useVosotros,
            allowPresent: FilterStore.allowPresent,
            allowPreterite: FilterStore.allowPreterite,
            allowImperfect: FilterStore.allowImperfect,
            allowConditional: FilterStore.allowConditional,
            allowFuture: FilterStore.allowFuture
        };
    },
    render: function () {
        return (
            <div>
                    <ReactBootstrap.Button bsStyle="success" onClick={this.onNextQuestion}>Next Question</ReactBootstrap.Button>
                    <ReactBootstrap.Button bsStyle="primary" onClick={this.onShowAnswer}>See Answer</ReactBootstrap.Button>

            </div>
        );
    },
    onNextQuestion: function () {
        this.getFlux().actions.nextQuestion(
            this.state.enableIrregular,
            this.state.useVosotros,
            this.state.allowPresent,
            this.state.allowPreterite,
            this.state.allowImperfect,
            this.state.allowConditional,
            this.state.allowFuture);
    },
    onShowAnswer: function () {
        this.getFlux().actions.showAnswer();
    }
});

module.exports = Controls;