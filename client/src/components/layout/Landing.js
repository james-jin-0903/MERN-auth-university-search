import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>Search Universities</h4>
            <p className="flow-text grey-text text-darken-1">
              Please, create your account to search!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
