React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap"),
    FluxMixin = Fluxxor.FluxMixin(React);

var RepeatCheckbox = React.createClass({
    mixins: [FluxMixin],
  getInitialState: function () {
    return {
        checked: this.props.checked || false
     };
  },
  render: function () {
    return (
        <label>
            <input type="checkbox"
              name="repeat_checkbox"
                className="disabled"
                alt="coming soon!"
              checked={this.state.checked}
              onClick={this.handleClick}
              value="repeat" />
            allow repeats
      </label>
    );
  },
  handleClick: function(e) {

  }
});

module.exports = RepeatCheckbox;