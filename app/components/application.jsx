var React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap")
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Ctrls = require("./controls.jsx");

var Quiz = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("QuizStore")],
    // Required by StoreWatchMixin
    getStateFromFlux: function() {
        var flux = this.getFlux();
        var store = this.getFlux().store("QuizStore");
        return {
            loading: store.loading,
            error: store.error,
            quiz: store.quiz,
            currentQuestion: store.currentQuestion
        };
    },
    componentDidMount: function() {
        this.getFlux().actions.loadQuiz();
      },
    render: function() {
        console.log("STATE");
        console.log(this.state);
        var questions = this.state.quiz;
        console.log(questions);
        var curr = this.state.currentQuestion;
        return (
            <div id="test">
            Question: {curr.infinitive}
                <Ctrls onNextQuestion={this.onNextQuestion}/>
            </div>
        );
    },
     onNextQuestion: function() {
        this.getFlux().actions.nextQuestion();
    }
});

module.exports = Quiz;
