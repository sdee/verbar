var React = require("react"),
    Fluxxor = require("fluxxor"),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    FluxMixin = Fluxxor.FluxMixin(React),
    Constants = require("../constants"),
    ReactBootstrap = require("react-bootstrap"),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var MsgCard = require("./messageCard.jsx"),
    VerbCard = require("./verbCard.jsx"),
    AnswerCard = require("./answerCard.jsx"),
    FeedbackCard = require("./feedbackCard.jsx"),
    Ctrls = require("./controls.jsx"),
    CustomOptions = require("./customOptions.jsx"),
    UserAnswer = require("./userAnswer.jsx");

var Quiz = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("QuizStore", "UserInputStore"), LinkedStateMixin],
    // Required by StoreWatchMixin
    getStateFromFlux: function () {
        var flux = this.getFlux();
        var QuizStore = this.getFlux().store("QuizStore");
        var UserInputStore = this.getFlux().store("UserInputStore");
        return {
            loading: QuizStore.loading,
            error: QuizStore.error,
            quiz: QuizStore.quiz,
            showAnswer: QuizStore.showAnswer,
            currentQuestion: QuizStore.currentQuestion,
            hasSubmittedAnswer: UserInputStore.hasSubmittedAnswer,
            correct: UserInputStore.correct,
            submittedAnswer: UserInputStore.submittedAnswer
        };
    },
    componentDidMount: function () {
        this.getFlux().actions.loadQuiz();
    },
    render: function () {
        var questions = this.state.quiz;
        console.log(questions);
        var curr = this.state.currentQuestion;
        var card;
        console.log("show answer state");
        console.log(this.state.showAnswer);
        if (this.state.hasSubmittedAnswer && curr.infinitive) {
            console.log("feedback");
            card = <FeedbackCard correct={this.state.correct} correctAnswer={curr.answer} submittedAnswer={this.state.submittedAnswer}/>
        }
        else if (curr.infinitive && this.state.showAnswer==false) {
            console.log("verb");
            card = <VerbCard pronoun={curr.pronoun} infinitive={curr.infinitive} tense={curr.tense} />;
        }
        else if (curr.infinitive && this.state.showAnswer==true) { //add branch to user input
            console.log("answer");
        console.log("show answer state");
        console.log(this.state.showAnswer);
            card = <AnswerCard answer={curr.answer}/>;
        }
        else {
            console.log("message");
            card = <MsgCard msg = {curr.text}/>
        }
        return (
            <div id="test">
                <ReactBootstrap.Panel header="practice your verbs, eat your vegetables">
                {card}
                    <Ctrls question={this.state.currentQuestion}/>
                </ReactBootstrap.Panel>
                <UserAnswer answer={this.state.currentQuestion.answer}/>
                <CustomOptions/>
            </div>
        );
    }
});

module.exports = Quiz;
