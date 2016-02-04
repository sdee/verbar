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
        var questions = this.state.quiz;
        console.log("render");
        return (
            <div id="test">Blah....</div>
            {this.state.currentQuestion.question}
        );
    },
     onNextQuestion: function() {
        this.getFlux().actions.nextQuestion();
    }
});

module.exports = Quiz;
