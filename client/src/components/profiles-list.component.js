import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = (props) => (
  <tr>
    <td>{props.profile.firstname + " " + props.profile.lastname}</td>
    <td>{props.profile.email}</td>
    <td>{props.profile.company}</td>
    <td>{props.profile.comment}</td>
    <td>
      <a
        href="#"
        onClick={() => {
          props.deleteProfile(props.profile._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class ProfilesList extends Component {
  constructor(props) {
    super(props);

    this.deleteProfile = this.deleteProfile.bind(this);

    this.state = { profiles: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/profiles/")
      .then((response) => {
        this.setState({ profiles: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteProfile(id) {
    axios.delete("http://localhost:5000/profiles/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      profiles: this.state.profiles.filter((el) => el._id !== id),
    });
  }

  profileList() {
    return this.state.profiles.map((currentprofile) => {
      return (
        <Profile
          profile={currentprofile}
          deleteProfile={this.deleteProfile}
          key={currentprofile._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>My Rolodex</h3>
        <Link to={"/"}> [+ Add New]</Link>
        <br />
        <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Comment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.profileList()}</tbody>
        </table>
      </div>
    );
  }
}
