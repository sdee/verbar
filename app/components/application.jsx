var React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap")
    FluxMixin = Fluxxor.FluxMixin(React), Constants = require("../constants"),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var MsgCard = require("./messageCard.jsx"),
    VerbCard = require("./verbCard.jsx"),
    AnswerCard = require("./answerCard.jsx")
    Ctrls = require("./controls.jsx");

var Quiz = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("QuizStore", "FilterStore")],
    // Required by StoreWatchMixin
    getStateFromFlux: function() {
        var flux = this.getFlux();
        var QuizStore = this.getFlux().store("QuizStore");
        var FilterStore = this.getFlux().store("FilterStore");
        console.log("FILTER");
        console.log(FilterStore);
        return {
            loading: QuizStore.loading,
            error: QuizStore.error,
            quiz: QuizStore.quiz,
            showAnswer: QuizStore.showAnswer,
            currentQuestion: QuizStore.currentQuestion,
            useVosotros: FilterStore.useVosotros,
            enableIrregular: FilterStore.enableIrregular
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
         console.log("STATE---->");
         console.log(this.state);
        this.getFlux().actions.nextQuestion(this.state.enableIrregular, this.state.useVosotros);
    },
    onShowAnswer: function() {
        //pass filters to show answer!
        this.getFlux().actions.showAnswer();
        //this.getFlux().actions.beep();
    }
});

module.exports = Quiz;
