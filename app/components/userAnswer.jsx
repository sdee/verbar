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
        console.log("STORE");
        console.log(UserInputStore);
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
        console.log("-------------");
        console.log("TEXT");
        console.log(text);
        console.log("final answer");
        console.log(text);
        console.log("ANSWER");
        console.log(this.props.answer);
        var correct = text == this.props.answer;
        this.setState({finalAnswer: text});
        console.log("CORRECT????");
        console.log(correct);
        this.setState({correct: correct});
        this.setState({userAnswer: ''});
    },
    handleUserAnswer: function (e) {
        this.setState({userAnswer: e.target.value});
    },
    render: function () {
        console.log("ANSWER");
        console.log(this.props.answer);
        return (
            <div>
                Correct???: {this.state.correct.toString()}
                Final Answer
                <b>{this.state.finalAnswer}</b>
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