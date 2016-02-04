var React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap")
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Quiz = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("QuizStore")],
    // Required by StoreWatchMixin
    getStateFromFlux: function() {
        var flux = this.getFlux();
        var store = this.getFlux().store("QuizStore");
        return {
            loading: store.loading,
            error: store.error,
            quiz: store.quiz
        };
    },
    componentDidMount: function() {
        this.getFlux().actions.loadQuiz();
      },
    render: function() {
        return (
            <div id="test"></div>
        );
    }
});

module.exports = Quiz;
