import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";

class PollTotal extends React.Component {
  render() {
    const { selectionOneTotal, selectionTwoTotal } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Poll Total Count</h2>
            <div className="Cards">
              <h2>Food Poll</h2>
              <h2>Do you like burrito or pizza more?</h2>
              <div className="CardGroup">
                <Card
                  title="Pizza"
                  text={selectionOneTotal.count.toString()}
                  image="/images/pizza.jpg"
                  pollSelection="selectionOne"
                />
                <Card
                  title="Burrito"
                  text={selectionTwoTotal.count.toString()}
                  image="/images/burrito.jpg"
                  pollSelection="selectionTwo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectionOneTotal: state.pollReducer.selectionOneTotal,
    selectionTwoTotal: state.pollReducer.selectionTwoTotal,
  };
}

export default withRouter(connect(mapStateToProps, null)(PollTotal));
