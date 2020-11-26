import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchUniversity } from "../../actions/searchUniversity";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      universityName: "",
      countryName: "",
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  search = () => {
    this.props.searchUniversity(this.state);
  };

  render() {
    const { university } = this.props.university;

    return (
      <div style={{ height: "90vh" }} className="container">
        <div className="row ">
          <div className="landing-copy col s12 center-align">
            <div className="input-field col m5 s12">
              <input
                onChange={this.onChange}
                value={this.state.universityName}
                id="universityName"
                type="text"
              />
              <label htmlFor="universityName">UniversityName</label>
            </div>
            <div className="input-field col m5 s12">
              <input
                onChange={this.onChange}
                value={this.state.countryName}
                id="countryName"
                type="text"
              />
              <label htmlFor="countryName">countryName</label>
            </div>
            <div className="input-field col m2 s12">
              <button
                onClick={this.search}
                className="btn waves-effect waves-light hoverable"
              >
                Search
              </button>
            </div>
          </div>

          <div className="landing-copy col s12 center-align">
            {university.map((row, index) => {
              return (
                <div className="col s12" key={index}>
                  <div className="card white darken-1">
                    <div className="card-content black-text">
                      <span className="card-title">
                        Country:{" "}
                        <b>
                          {row.country} ( {row.alpha_two_code} )
                        </b>
                      </span>
                      {row["state-province"] && (
                        <h6>Province: {row["state-province"]}</h6>
                      )}
                      <h5>
                        University Name: <b>{row.name}</b>
                      </h5>
                    </div>
                    <div className="card-action">
                      <a
                        href={row.web_pages[0]}
                        target="_blank"
                        style={{ margin: "0.5rem" }}
                        className="btn"
                      >
                        Go to site
                      </a>
                      <Link
                        to={`/newsletter/${row.name}`}
                        style={{ margin: "0.5rem" }}
                        className="btn"
                      >
                        Send Newsletter
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  searchUniversity: PropTypes.func.isRequired,
  university: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  university: state.search,
});

export default connect(
  mapStateToProps,
  { searchUniversity }
)(Dashboard);
