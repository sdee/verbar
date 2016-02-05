var React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap")
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var MsgCard = require("./messageCard.jsx"),
    VerbCard = require("./verbCard.jsx"),
    AnswerCard = require("./answerCard.jsx")
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
            showAnswer: store.showAnswer,
            currentQuestion: store.currentQuestion
        };
    },
    componentDidMount: function() {
        this.getFlux().actions.loadQuiz();
      },
    render: function() {
        console.log("rendering");
        console.log(this.state);
        var questions = this.state.quiz;
        console.log(questions);
        var curr = this.state.currentQuestion;
        var card;
        console.log("show answer");
        console.log(this.state.showAnswer);
        if (curr.infinitive && this.state.showAnswer===false){

            card = <VerbCard pronoun={curr.pronoun} infinitive={curr.infinitive} tense={curr.tense} />;
        }
        else if (curr.infinitive) {
            card = <AnswerCard answer={curr.answer}/>;
        }
        else {
            card = <MsgCard msg = {curr.text}/>
        }

        return (
            <div id="test">
            {card}
                <Ctrls onNextQuestion={this.onNextQuestion} onShowAnswer={this.onShowAnswer}/>
            </div>

        );
    },
     onNextQuestion: function() {
        this.getFlux().actions.nextQuestion();
    },
    onShowAnswer: function() {
        this.getFlux().actions.showAnswer();
    }
});

module.exports = Quiz;
