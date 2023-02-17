import React from "react";

import axios from "axios";


class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      Title: "",
      Description: "",
      Status: "",

      formDisabled: false,
    };
  }
  handleFormSubmit(event) {
    const { Title, Status, Description } = this.state;


    this.setState({
      formDisabled: true,
    });


    if (Title === "") {
      alert("Title is Required")
    } else if (Status === "") {
      alert("Status is Required")
    } else if (Description === "") {
      alert("Description id Required")
    } else {
      axios
        .post("https://draganddrop-j8t4.onrender.com/createProject", {
          Title, Status, Description
        })
        .then((response) => {
          console.log("response", response);
          this.setState({
            formDisabled: false,
          });
          this.setState({
            phone: "", email: "", title: "", name: "", password: "",
          });
          alert("Registration Successful!");

          event.preventDefault();
          //window.location.href = "/"


        }).catch((error) => {
          alert(error.response.data.message)
        });



    }







  }
  render() {
    return (
      <div className="registerForm">
        <h2>Create Task </h2>
        <form className="yash"
          onSubmit={(event) => this.handleFormSubmit(event)}
          style={{
            padding: "40px",
            backgroundColor: "#eee",
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="your Title"
              value={this.state.Title}
              onChange={(e) => {
                this.setState({
                  Title: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Status
            </label>
            <select

              type="text"
              className="form-control"
              id="title"
              placeholder="your Status"
              value={this.state.Status}
              onChange={(e) => {
                this.setState({
                  Status: e.target.value,
                });
              }}
            >
              <option>select Status</option>
              <option>Open</option>
              <option>In-Progress</option>
              <option>Completed</option>


            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="your Description"
              value={this.state.Description}
              onChange={(e) => {
                this.setState({
                  Description: e.target.value,
                });
              }}
            />
          </div>




          <button
            disabled={this.state.formDisabled}
            type="submit"

          >
            Submit
          </button>

          {this.state.formDisabled && (
            <p> Form is being submitted please wait.</p>
          )}
        </form>
        <br />
        <br />

      </div>
    );
  }
}

export default RegisterForm;