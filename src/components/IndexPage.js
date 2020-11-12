import React from "react";
import Card from "./Card";
import { withRouter } from "react-router-dom";

class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="Cards">
              <h2>Food Poll</h2>
              <h2>Do you like burrito or pizza more?</h2>
              <div className="CardGroup">
                <Card
                  title="Pizza"
                  text="Click to vote for pizza"
                  image="/images/pizza.jpg"
                  pollSelection="selectionOne"
                />
                <Card
                  title="Burrito"
                  text="Click to vote for burrito"
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

export default withRouter(IndexPage);
