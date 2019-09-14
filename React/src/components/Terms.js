import React, { Component } from "react";
import './Terms'
export default class Terms extends Component {
  render() {

    const mystyle = {
      color: " #F96767",

      padding: "10px",
      fontFamily: "	Courier New",

      justifyContent: "center",
      alignItems: "center",
      fontWeight: 'bold'
    };

    const mystyleee = {
      color: " black",

      padding: "10px",
      fontFamily: "	Courier New",

      justifyContent: "center",
      alignItems: "center",
      fontWeight: 'bold'
    };
    return (
      <div className="d-inline container mt-3+">

        <div className="modal fade" id="modelTerms">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title"> Terms of donate </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div>

                <div style={mystyle} className="Terms" >
                
                  <p style={mystyleee}>
                    <li>
                      Most people can give blood if they are in good health. There
                      are some basic requirements one need to fulfill in order to
                      become a blood donor.
                    </li>
                    <br /> Below are some basic eligibility guidelines:<span role="img" aria-label="pin">&#128137;</span>
                  </p>
                  <ul>
                    <h5 style={mystyleee}>Age:</h5>
                    <li> 	<span role="img" aria-label="pin">🎂</span> You are aged between 18 and 65</li>

                    <h5 style={mystyleee}> Weight:</h5>

                    <li> <span role="img" aria-label="pin">&#129490;</span> You weigh at least 50 kg5</li>

                    <h5 style={mystyleee} >Health:</h5>
                    <li><span role="img" aria-label="pin"> &#128150;</span> You must be in good health at the time you donate.</li>
                    <li >
                      {" "}
                      <span role="img" aria-label="pin"> &#9940;</span> You cannot donate if you have a cold, flu, sore throat,
                      cold sore, stomach bug or any other infection.
                    </li>
                  </ul>{" "}

                </div>
                <div className="modal-footer">
                  <button type="button" className=" btn btn-outline-danger" data-dismiss="modal"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
