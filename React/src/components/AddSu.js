import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class TAddSu extends Component {

  render() {
    const mystyle = {
      color: " #128204",
      padding: "10px",
      fontFamily: "	Courier New",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 'bold'
    };

    return (
      <div className="modal fade" id="addsu">

        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" > <span role="img" aria-label="pin">&#128204;</span> </h6>
              <button type="button" className="close" data-dismiss="modal">
                ×
                </button>
            </div>
            <div className='border border-danger'>
              {" "}
              <h4 style={mystyle}>  &#10084; Add Succeeded &#10084; </h4>{" "}
            </div>
            <div className="modal-footer">
              <Link to='/'>
                <button
                  href='/'
                  type="button"
                  className=" btn btn-outline-danger"
                  data-dismiss="modal"
                >
                  OK
                </button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
