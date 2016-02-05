var React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap")
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var MsgCard = require("./messageCard.jsx"),
    VerbCard = require("./verbCard.jsx"),
    Ctrls = require("./controls.jsx");

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
        var questions = this.state.quiz;
        console.log(questions);
        var curr = this.state.currentQuestion;
        var card;
        if (curr.infinitive){
            card = <VerbCard pronoun={curr.pronoun} infinitive={curr.infinitive} tense={curr.tense} />
        }
        else {
            card = <MsgCard msg = {curr.text}/>
        }

        return (
            <div id="test">
            {card}
                <Ctrls onNextQuestion={this.onNextQuestion}/>
            </div>

        );
    },
     onNextQuestion: function() {
        this.getFlux().actions.nextQuestion();
    }
});

module.exports = Quiz;
