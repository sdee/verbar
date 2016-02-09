React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap"),
    FluxMixin = Fluxxor.FluxMixin(React),
    Constants = require("../constants"),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserAnswer = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("UserInputStore"), LinkedStateMixin],
    getStateFromFlux: function () {
        var flux = this.getFlux();
        var UserInputStore = this.getFlux().store("UserInputStore");
        return {
            userAnswer: UserInputStore.userAnswer,
            finalAnswer: UserInputStore.finalAnswer,
            ignoreAccent: UserInputStore.ignoreAccent,
            correct: UserInputStore.correct
        };
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var text = this.state.userAnswer.trim();
        if (!text) {
            return;
        }
        //check answer and change color
        //check if correct
        var correct = text == this.props.answer;
        this.setState({finalAnswer: text});
        this.setState({correct: correct});
        this.setState({userAnswer: ''});
    },
    handleUserAnswer: function (e) {
        this.setState({userAnswer: e.target.value});
    },
    render: function () {
        return (
            <div>
                Correct???: {this.state.correct.toString()}
                Final Answer
                <b><font color={correct ? "green" : "red"}>{this.state.finalAnswer}</font></b>
                <br></br>
                Your Answer: {this.linkState('useAnswer').value}
                <br></br>
                <form className="userInput" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Answer"
                        value={this.state.userAnswer}
                        onChange={this.handleUserAnswer}
                    />
                    <input type="submit" value="Post" />
                </form>
            </div>
        );
    }
});

module.exports = UserAnswer;