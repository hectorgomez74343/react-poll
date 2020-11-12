import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { confirmPollSelection } from "../redux/actions/pollActions";

class ConfirmPollSelection extends React.Component {
  routeToRoot = () => {
    const { history } = this.props;
    history.push("/");
  };
  confirmAppointment = () => {
    const { history, confirmPoll } = this.props;

    confirmPoll();

    history.push("/confirmation");
  };

  render() {
    const { text, image, title } = this.props.pollSelection;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Confirm your choice</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            style={{
              justifyContent: "center",
              display: "flex",
              marginBottom: "1rem",
            }}
          >
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.routeToRoot}
            >
              Click to go back and start over
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="Cards"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="Card"
                style={{ width: "400px", height: "400px" }}
                onClick={this.confirmAppointment}
              >
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <h3>{text}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    confirmPoll: () => dispatch(confirmPollSelection()),
  };
}

function mapStateToProps(state) {
  return {
    pollSelection: state.pollReducer.pollSelection,
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ConfirmPollSelection)
);
