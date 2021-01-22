import React, { Component } from "react";
import axios from "axios";
import { Paper, Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      company: "",
      email: "",
      comment: "",
    };
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  onChangeCompany(e) {
    this.setState({
      company: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeComment(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  onSubmit(e) {
    if (
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.email === "" ||
      this.state.company === "" ||
      this.state.comment === ""
    ) {
      alert("Make sure to fill everything!");
      e.preventDefault();
    }

    const profile = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      company: this.state.company,
      email: this.state.email,
      comment: this.state.comment,
    };

    console.log(profile);

    axios
      .post("http://localhost:5000/profiles/add", profile)
      .then((res) => console.log(res.data));

    this.setState({
      firstname: "",
      lastname: "",
      company: "",
      email: "",
      comment: "",
    });
  }

  render() {
    return (
      <div class="container">
        <Grid container direction="row" justify="center" alignItems="center">
          <Paper elevation={15}>
            <Box p={3}>
              <h4>
                <strong>Add to your Rolodex!</strong>
              </h4>
              <Link to={"/list"}> [Open My Rolodex]</Link>
              <br />
              <br />
              <form onSubmit={this.onSubmit}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>First Name: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.firstname}
                      onChange={this.onChangeFirstname}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>Last Name: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.lastname}
                      onChange={this.onChangeLastname}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Email: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>Company: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.company}
                      onChange={this.onChangeCompany}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Comment: </label>

                  <textarea
                    type="text"
                    required
                    className="form-control"
                    value={this.state.comment}
                    onChange={this.onChangeComment}
                    class="form-control"
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <a href="#" onClick={this.onSubmit}>
                    [+] Click to Add!
                  </a>
                </div>
              </form>
            </Box>
          </Paper>
        </Grid>
      </div>
    );
  }
}
