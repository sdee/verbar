React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap"),
    FluxMixin = Fluxxor.FluxMixin(React);

var IrregularCheckbox = React.createClass({
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
              name="irregular_checkbox"
              checked={this.state.checked}
              onClick={this.handleClick}
              value="irregular" />
            allow irregular
      </label>
    );
  },
  handleClick: function(e) {
      this.setState({checked: e.target.checked});
      this.getFlux().actions.setIrregular(e.target.checked);//tell store
  }
});

module.exports = IrregularCheckbox;