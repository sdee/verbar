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
            userAnswer: UserInputStore.userAnswer,
            finalAnswer: UserInputStore.finalAnswer,
            correct: UserInputStore.correct
        };
    },
    handleSubmit: function (e) {
        console.log("STATE>>>");
        console.log(this.state);
        e.preventDefault();
        var text = this.state.userAnswer.trim();
        if (!text) {
            return;
        }
        //check answer and change color
        //check if correct
        var correctAnswer = this.props.answer;
        if (this.state.ignoreAccents) {
            text = Utils.accentsTidy(text);
            correctAnswer = Utils.accentsTidy(text);
            console.log("ignore accent!");
            console.log(text);
        }
        var correct = text == correctAnswer;
        this.setState({finalAnswer: text});
        this.setState({correct: correct});
        this.setState({userAnswer: ''});
    },
    handleUserAnswer: function (e) {
        this.setState({userAnswer: e.target.value});
    },
    render: function () {
        return (
            <ReactBootstrap.Panel header="Input">
                Final Answer
                <b><font color={this.state.correct ? "green" : "red"}>{this.state.finalAnswer}</font></b>
                <br></br>
                <form className="userInput" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Answer"
                        value={this.state.userAnswer}
                        onChange={this.handleUserAnswer}
                    />
                    <ReactBootstrap.ButtonInput type="submit" value="post" bsStyle="success" bsSize="medium" disabled={this.state.disabled} />
  <input type="checkbox" checkedLink={this.linkState('ignoreAccents')}  />
                Ignore Accents
                </form>


            </ReactBootstrap.Panel>
        );
    }
});

module.exports = UserAnswer;