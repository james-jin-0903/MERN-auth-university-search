import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { sendNewsletters } from "../../actions/sendNewsletters";

class Newsletter extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      letters: "",
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSend = () => {
    sendNewsletters(
      {
        ...this.state,
        to: this.props.match.params.university_name,
      },
      this.props.history
    );
  };

  render() {
    return (
      <div style={{ height: "90vh", marginTop: "5rem" }} className="container">
        <div className="row ">
          <div className="landing-copy col s12 center-align">
            <div className="input-field col m5 s12">
              <input
                onChange={this.onChange}
                value={this.state.from}
                id="from"
                type="text"
              />
              <label htmlFor="from">From</label>
            </div>
            <div className="input-field col s12">
              <textarea
                id="letters"
                onChange={this.onChange}
                value={this.state.letters}
                className="materialize-textarea"
                style={{ height: "20vh" }}
              />
              <label htmlFor="letters">Letters</label>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
                onClick={this.onSend}
                className="btn waves-effect waves-light hoverable accent-3"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Newsletter);
