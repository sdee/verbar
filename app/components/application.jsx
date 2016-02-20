var React = require("react"),
    Fluxxor = require("fluxxor"),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    FluxMixin = Fluxxor.FluxMixin(React),
    Constants = require("../constants"),
    ReactBootstrap = require("react-bootstrap"),
    StoreWatchMixin = Fluxxor.StoreWatchMixin,
    ReactHotkeys = require('react-hotkeys');

var MsgCard = require("./messageCard.jsx"),
    VerbCard = require("./verbCard.jsx"),
    AnswerCard = require("./answerCard.jsx"),
    FeedbackCard = require("./feedbackCard.jsx"),
    Ctrls = require("./controls.jsx"),
    CustomOptions = require("./customOptions.jsx"),
    UserAnswer = require("./userAnswer.jsx"),
    Readme = require("./readme.jsx");

var Quiz = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("QuizStore", "UserInputStore", "FilterStore"), LinkedStateMixin],
    // Required by StoreWatchMixin
    getStateFromFlux: function () {
        var flux = this.getFlux();
        var QuizStore = this.getFlux().store("QuizStore");
        var UserInputStore = this.getFlux().store("UserInputStore");
        var FilterStore = this.getFlux().store("FilterStore");
        return {
            loading: QuizStore.loading,
            error: QuizStore.error,
            quiz: QuizStore.quiz,
            showAnswer: QuizStore.showAnswer,
            currentQuestion: QuizStore.currentQuestion,
            hasSubmittedAnswer: UserInputStore.hasSubmittedAnswer,
            correct: UserInputStore.correct,
            submittedAnswer: UserInputStore.submittedAnswer,
            enableIrregular: FilterStore.enableIrregular,
            useVosotros: FilterStore.useVosotros,
            allowPresent: FilterStore.allowPresent,
            allowPreterite: FilterStore.allowPreterite,
            allowImperfect: FilterStore.allowImperfect,
            allowConditional: FilterStore.allowConditional,
            allowFuture: FilterStore.allowFuture
        };
    },
    componentDidMount: function () {
        this.getFlux().actions.loadQuiz();
    },
    render: function () {
        var questions = this.state.quiz;
        var curr = this.state.currentQuestion;
        var card;
        const keyMap = {
            'left': 'left',
            'right': 'right'
        };
        const handlers = {
            'right': (event) => this.getFlux().actions.nextQuestion(this.state.enableIrregular,
            this.state.useVosotros,
            this.state.allowPresent,
            this.state.allowPreterite,
            this.state.allowImperfect,
            this.state.allowConditional,
            this.state.allowFuture),
            'up': (event) => this.getFlux().actions.showAnswer()
        };
        if (this.state.hasSubmittedAnswer && curr.infinitive) {
            card = <FeedbackCard correct={this.state.correct} correctAnswer={curr.answer} submittedAnswer={this.state.submittedAnswer}/>
        }
        else if (curr.infinitive && this.state.showAnswer == false) {
            card = <VerbCard pronoun={curr.pronoun} infinitive={curr.infinitive} tense={curr.tense} />;
        }
        else if (curr.infinitive && this.state.showAnswer == true) { //add branch to user input
            card = <AnswerCard answer={curr.answer}/>;
        }
        else {
            card = <MsgCard msg = {curr.text}/>
        }
        return (
            <div id="test">
                <ReactBootstrap.Panel header="practice your verbs, eat your vegetables">
                    <ReactBootstrap.Grid>
                        <ReactBootstrap.Row className="show-grid">
                            <ReactBootstrap.Col md={7}>
                                <ReactBootstrap.Row className="show-grid">
                            <ReactHotkeys.HotKeys keyMap={keyMap} handlers={handlers}>
                            {card}
                            </ReactHotkeys.HotKeys>
                                </ReactBootstrap.Row>
                                <ReactBootstrap.Row className="card" className="ctrl">
                                    <br></br>
                                    <Ctrls question={this.state.currentQuestion}/>
                                </ReactBootstrap.Row>
                                <ReactBootstrap.Row className="card" className="ctrl">
                                    <br></br>
                                    <ReactHotkeys.HotKeys keyMap={keyMap} handlers={handlers}>
                                        <UserAnswer answer={this.state.currentQuestion.answer}/>
                                    </ReactHotkeys.HotKeys>
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col md={5}>
                                <CustomOptions/>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Grid>
                </ReactBootstrap.Panel>
                <Readme/>
            </div>
        );
    }
});

module.exports = Quiz;

