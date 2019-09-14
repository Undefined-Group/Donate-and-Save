import React, { Component } from "react";

export default class DeleSu extends Component {
  render() {
    const mystyle = {
      color: "green",

      fontFamily: "	Courier New",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 'bold'
    };
    return (
      <>
        {/* <button
          type="button"
          className="btn btn-outline-danger"
          data-toggle="modal"
          data-target="myModals"
        >
          <h6>Deleted</h6>
        </button> */}
        <div className="modal" id="myModals">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title"> <span role="img" aria-label="pin">&#128204;</span> </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className='border border-danger'>
                <h1 style={mystyle}>Deleted<span role="img" aria-label="pin">&#10004;</span></h1>
                {/* <h5 style={mystyle}>Thanks You </h5> */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className=" btn btn-outline-danger"
                  data-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </>);
  }
}
