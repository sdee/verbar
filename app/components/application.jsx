var React = require("react"),
    Fluxxor = require("fluxxor"),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    FluxMixin = Fluxxor.FluxMixin(React),
    Constants = require("../constants"),
    ReactBootstrap = require("react-bootstrap"),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var MsgCard = require("./messageCard.jsx"),
    VerbCard = require("./verbCard.jsx"),
    AnswerCard = require("./answerCard.jsx")
Ctrls = require("./controls.jsx"),
    CustomOptions = require("./customOptions.jsx"),
    UserAnswer = require("./userAnswer.jsx");

var Quiz = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("QuizStore"), LinkedStateMixin],
    // Required by StoreWatchMixin
    getStateFromFlux: function () {
        var flux = this.getFlux();
        var QuizStore = this.getFlux().store("QuizStore");
        return {
            loading: QuizStore.loading,
            error: QuizStore.error,
            quiz: QuizStore.quiz,
            showAnswer: QuizStore.showAnswer,
            currentQuestion: QuizStore.currentQuestion
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
        if (curr.infinitive && this.state.showAnswer === false) {
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
                    <ReactBootstrap.Panel header="practice your verbs, eat your vegetables">

                <section className="front">
            {card}
                    </section>

                    <Ctrls question={this.state.currentQuestion}/>
                        </ReactBootstrap.Panel>
                    <UserAnswer answer={this.state.currentQuestion.answer}/>
                    <CustomOptions/>
            </div>


        );
    }
});

module.exports = Quiz;
