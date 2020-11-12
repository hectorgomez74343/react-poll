import React from "react";
import { withRouter } from "react-router-dom";
import Success from "./success";

class ConfirmationPage extends React.Component {
  routeToMainMenu = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Your vote has been confirmed and saved!</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="btn btn-danger"
                type="button"
                onClick={this.routeToMainMenu}
              >
                Click to go back to main menu
              </button>
            </div>
            <Success />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ConfirmationPage);
