import React, { Component } from "react";
import axios from "./Axios";
class Report extends Component {
  state = {
    report: "",
    emtpy: true,
    Donor: {}
  };
  componentDidMount() {
    this.setState({ Donor: this.props.donor })
  }

  onChange = e => {
    // console.log("onChange", e.target.value);
    this.setState({ report: e.target.value });
    if (e.target.value === "other..") {
      this.setState({ emtpy: false });
    }
  };
  onSubmit = async e => {
    e.preventDefault();
    await this.setState({ Donor: this.props.donor })
    console.log('object000', this.state.Donor)
    console.log('object111', this.props.donor)

    if (this.state.report !== "other..") {
      let newReport = { ...this.state.Donor };
      newReport.reports.push(this.state.report);
      this.setState({ Donor: newReport });
      this.serverReport();
      // console.log("state", this.state.Donor);
    }
  };
  serverReport = () => {
    console.log("serverReport", this.state.Donor);
    axios
      .put("/report", this.state.Donor)
      .then(response => {
        // this.setState({ items: response.data })
        // console.log('response.data from updateRepo -app -react', response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });
    // this.readRepo()
  };
  render() {
    const { i } = this.props

    return (
      <>
        <div className="modal fade" id={`Modalreport${i}`}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Help Us to Understand the Problem :
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>

              <form>
                <div className="modal-body">
                  <div className="custom-control custom-radio">
                    <input
                      onClick={this.onChange}
                      value="Wronge phone number or unavailable"
                      type="radio"
                      id={`reportID1${i}`}
                      name={`report${i}`}
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={`reportID1${i}`}
                    >
                      Wronge phone number or unavailable.
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      onClick={this.onChange}
                      value="Rude or dishonest promise"
                      type="radio"
                      id={`reportID2${i}`}
                      name={`report${i}`}
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={`reportID2${i}`}
                    >
                      Rude or dishonest promise .
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      onClick={this.onChange}
                      value="Fake donor"
                      type="radio"
                      id={`reportID3${i}`}
                      name={`report${i}`}
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={`reportID3${i}`}
                    >
                      Fake donor
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      onClick={this.onChange}
                      value="Spam"
                      type="radio"
                      id={`reportID4${i}`}
                      name={`report${i}`}
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={`reportID4${i}`}
                    >
                      Spam.
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      onClick={this.onChange}
                      type="radio"
                      id={`reportID5${i}`}
                      name={`report${i}`}
                      value="other.."
                      className="custom-control-input"
                      onSelect={this.other}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={`reportID5${i}`}
                    >
                      other...
                      <br></br>
                      <input
                        style={{
                          display:
                            this.state.emtpy === false ||
                              this.state.report === "other.."
                              ? "block"
                              : "none"
                        }}
                        className="form-group has-error has-feedback"
                        onChange={this.onChange}
                        size="35"
                        type="text"
                        id="t"
                        placeholder="please enter your feedback..."
                      ></input>
                    </label>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    data-toggle="modal"
                    data-target="#reportsu"
                    disabled={
                      this.state.report !== "" &&
                        this.state.report !== "other.."
                        ? false
                        : true
                    }
                    onClick={this.onSubmit}
                    type="submit"
                    data-dismiss="modal"
                    className="btn btn-outline-danger"
                    id="a"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Report;

