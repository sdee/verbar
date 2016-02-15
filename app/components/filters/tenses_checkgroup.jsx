React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap"),
    FluxMixin = Fluxxor.FluxMixin(React);

var TensesCheckgroup = React.createClass({
    mixins: [FluxMixin],
    getInitialState: function () {
        return {
            indicativeChecked: this.props.checked || false,
            presentChecked: this.props.checked || true,
            pretChecked: this.props.checked || false,
            imperfectChecked: this.props.checked || false,
            conditionalChecked: this.props.checked || false,
            futureChecked: this.props.checked || false
        }
    },
    render: function () {
        return (
            <div>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md={4}>
                        <label>
                            <input type="checkbox"
                                name="indicative_checkbox"
                                checked={this.state.indicativeChecked}
                                onChange={this.handleIndicativeClick}
                                value="indicative_checkbox" />
                            indicative
                        </label>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                 <ReactBootstrap.Panel header="advanced">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md={4}>
                        <div class="checkbox">

                        <input type="checkbox"
                                name="present_checkbox"
                                checked={this.state.presentChecked}
                                onChange={this.handlePresentClick}
                                value="present_checkbox" />
                        <label>
                            present
                        </label>
                            </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md={4}>
                        <label>
                            <input type="checkbox"
                                name="pret_checkbox"
                                checked={this.state.pretChecked}
                                onChange={this.handlePretClick}
                                value="pret_checkbox" />
                            preterite
                        </label>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md={4}>
                        <label>
                            <input type="checkbox"
                                name="imperfect_checkbox"
                                checked={this.state.imperfectChecked}
                                onChange={this.handleImperfectClick}
                                value="pret_checkbox" />
                            imperfect
                        </label>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md={4}>
                        <label>
                            <input type="checkbox"
                                name="conditional_checkbox"
                                checked={this.state.conditionalChecked}
                                onChange={this.handleConditionalClick}
                                value="pret_checkbox" />
                            conditional
                        </label>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md={4}>
                        <label>
                            <input type="checkbox"
                                name="future_checkbox"
                                checked={this.state.futureChecked}
                                onChange={this.handleFutureClick}
                                value="pret_checkbox" />
                            future
                        </label>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                     </ReactBootstrap.Panel>
            </div>

        );
    },
    handleIndicativeClick: function (e) {
        this.setState({indicativeChecked: e.target.checked});
        this.handlePresentClick(e);
        this.handlePretClick(e);
        this.handleImperfectClick(e);
        this.handleConditionalClick(e);
        this.handleFutureClick(e);
        this.getFlux().actions.setIndicative(e.target.checked);
    },
    handlePresentClick: function (e) {
        console.log("present click");
        this.setState({presentChecked: e.target.checked});
        this.getFlux().actions.setPresent(e.target.checked);
    },
    handlePretClick: function (e) {
        console.log("pret click");
        this.setState({pretChecked: e.target.checked});
        this.getFlux().actions.setPreterite(e.target.checked);
    },
    handleImperfectClick: function (e) {
        console.log("imperfect click");
        this.setState({imperfectChecked: e.target.checked});
        this.getFlux().actions.setImperfect(e.target.checked);
    },
    handleConditionalClick: function (e) {
        console.log("conditional click");
        this.setState({conditionalChecked: e.target.checked});
        this.getFlux().actions.setConditional(e.target.checked);
    },
    handleFutureClick: function (e) {
        console.log("future click");
        this.setState({futureChecked: e.target.checked});
        this.getFlux().actions.setFuture(e.target.checked);
    }
});

module.exports = TensesCheckgroup;