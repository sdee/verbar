React = require("react"),
    Fluxxor = require("fluxxor"),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ReactBootstrap = require("react-bootstrap"),
    FluxMixin = Fluxxor.FluxMixin(React),
    Constants = require("../constants"),
    StoreWatchMixin = Fluxxor.StoreWatchMixin,
    Utils = require("../utils");
var LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ReactBootstrap = require("react-bootstrap");
var UserAnswer = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("UserInputStore"), LinkedStateMixin],
    getInitialState: function () {
        return {
            ignoreAccents: false
        };
    },
    getStateFromFlux: function () {
        var flux = this.getFlux();
        var UserInputStore = this.getFlux().store("UserInputStore");
        return {
            userAnswer: '',
            finalAnswer: UserInputStore.finalAnswer,
            correct: UserInputStore.correct
        };
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var tidyText = this.state.userAnswer.trim();
        if (!tidyText) {
            return;
        }
        //check answer and change color
        //check if correct
        var correctAnswer = this.props.answer;
        if (this.state.ignoreAccents) {
            tidyText = Utils.accentsTidy(tidyText);
            correctAnswer = Utils.accentsTidy(correctAnswer);
        }
        var correct = tidyText == correctAnswer;
        this.setState({finalAnswer: tidyText});//submitted
        this.setState({correct: correct});
        this.setState({userAnswer: ''}); //user input as being typed
        this.getFlux().actions.submitUserAnswer(tidyText, correct)
    },
    handleUserAnswer: function (e) {
        this.setState({userAnswer: e.target.value});
    },
    render: function () {
        return (
            <div>
                <b><font color={this.state.correct ? "green" : "red"}>{this.state.finalAnswer}</font></b>
                <form className="userInput form-inline ctrl" onSubmit={this.handleSubmit}>
                    <input
                        autoFocus
                        type="text"
                        placeholder="Your Answer"
                        value={this.state.userAnswer}
                        onChange={this.handleUserAnswer}
                    />
                    <ReactBootstrap.ButtonInput type="submit" value="post" bsStyle="success" bsSize="small" disabled={this.state.disabled} />
                    <br></br>
                    <input type="checkbox" checkedLink={this.linkState('ignoreAccents')}  /> Ignore Accents
                </form>
            </div>
        );
    }
});

module.exports = UserAnswer;