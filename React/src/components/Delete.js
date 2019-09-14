import React, { Component } from "react";
import "./Delete.css";
import axios from "./Axios";

class Delete extends Component {
  state = {
    Donor: {
      reports: [],
      _id: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      bloodType: "",
      country: "",
      state: "",
      birthday: "",
      numberOfcalls: 1,
      dateOfPublish: "",
      __v: 0
    },
    lastName: "",
    birthday: "",
    email: "",
    validation: false
  };


  componentDidMount() {
    this.setState({ Donor: this.props.donor })
  }


  DeleteDonor = () => {
    console.log('object', this.props.donor)
    console.log('delete donor from function');

    console.log(this.props.donor.lastName.toLowerCase() === this.state.lastName.toLowerCase())
    console.log(this.props.donor.birthday.slice(0, 10) === this.state.birthday)
    console.log(this.props.donor.email.toLowerCase() === this.state.email.toLowerCase())

    if (
      this.props.donor.lastName.toLowerCase() === this.state.lastName.toLowerCase() &&
      this.props.donor.birthday.slice(0, 10) === this.state.birthday &&
      this.props.donor.email.toLowerCase() === this.state.email.toLowerCase()
    ) {

      console.log('deleeeeeeeeeeeet after chack');
      console.log("this.state.Donor._id", this.state.Donor);
      axios
        .put("/delete/delete", this.props.donor)
        .then(response => {
          // console.log('response', response.data)
          axios.post('/search', this.props.lastSearch)
            .then(res => {
              if (res.data.length === 0) {
                console.log('object', res.data.length === 0)
                this.props.setSearch(["notFound"], this.props.donor)
              }
              else { this.props.setSearch(res.data, this.props.donor) }

            })
            .catch(error => {
              console.log(error);
            })

        })
        .catch(error => {
          console.log("Error", error);
        });
    }
  };

  onChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    if (
      this.props.donor.lastName.toLowerCase() === this.state.lastName.toLowerCase() &&
      this.props.donor.birthday.slice(0, 10) === this.state.birthday &&
      this.props.donor.email.toLowerCase() === this.state.email.toLowerCase()
    ) {

      this.setState({ validation: true });
    }
    else {
      console.log(this.props.donor.lastName.toLowerCase() === this.state.lastName.toLowerCase(),
        this.props.donor.birthday.slice(0, 10) === this.state.birthday,
        this.props.donor.email.toLowerCase() === this.state.email.toLowerCase())
      console.log(this.state.birthday, this.props.donor.birthday.slice(0, 10))
      console.log('this.state', this.state)
      console.log('this.props', this.props.donor)

      this.setState({ validation: false });
    }
  };

  render() {
    const { i } = this.props
    return (
      <>
        <div className="modal fade " id={`myModal${i}`}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Do you want to remove Donor?</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>

              <div className="modal-body">
                <label htmlFor="LN" className="l">
                  What is your Last Name?
                </label>
                <br></br>
                <input
                  className="form-control"
                  name="lastName"
                  value={this.state.lastName}
                  type="text"
                  onChange={this.onChange}
                  id="LN"
                  required
                ></input>
                <br></br>

                <label htmlFor="D" className="l">
                  What is your Birth Date?
                </label>
                <br></br>

                <input
                  onChange={this.onChange}
                  name="birthday"
                  value={this.state.birthday}
                  className="form-control"
                  type="date"
                  id="D"
                  min="1900-01-01"
                  max={new Date().toJSON().slice(0, 10)} />
                {/* 
              <input onChange={this.changeValue}
                className="form-control"
                name="birthday"
                type="date"
                onChange={this.onChange}
                id="D"
                required
              ></input> */}
                <br></br>

                <label htmlFor="PN" className="l">
                  What is your Email?
                </label>
                <br></br>
                <input
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  type="email"
                  min="6"
                  max="13"
                  onChange={this.onChange}
                  id="PN"
                  required
                ></input>
              </div>

              <div className="modal-footer">
                <button
                  disabled={(this.state.lastName !== "" &&
                    this.state.birthday !== "" &&
                    this.state.email !== "") ? false : true
                  }
                  data-dismiss={this.state.validation ? "modal" : ""}
                  type="submit"
                  onClick={this.DeleteDonor}
                  className="btn btn-outline-danger"
                  id="a"
                  data-target={this.state.validation ? "#myModals" : "#deletef"}

                  data-toggle="modal"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Delete;

