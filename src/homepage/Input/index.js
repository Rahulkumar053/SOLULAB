import React from "react";

const Input = () => {
  return (
    <>
      <div className="container-input">
        {/* <hr color=" #F1F1F1" /> */}
        <div className="title">
          <p className="name">Diane Cooper</p>
          <p className="email">diane.cooper@example.com</p>
        </div>
        <div className="down-txt-container">
          <div className="left-box-input">
            <div className="inp">
              <p className="light-txt">Gender</p>
              <p className="dwn-txt">Female</p>
            </div>
            <div className="line"></div>
            <div className="inp">
              <p className="light-txt">Birthday</p>
              <p className="dwn-txt">Feb 24th, 1997</p>
            </div>
            <div className="line"></div>
            <div className="inp">
              <p className="light-txt">Phone Number</p>
              <p className="dwn-txt">(239)555-0108</p>
            </div>
            <div className="line"></div>
            <div className="inp">
              <p className="light-txt">Member Status</p>
              <p className="dwn-txt">Active Member</p>
            </div>
          </div>
          <div className="right-box-input">
            <div className="past">
              <p className="number-inp">15</p>
              <p className="light-txt dwn-txt">Past</p>
            </div>
            <div className="line"></div>
            <div className="upcoming">
              <div className="display-flex-inp">
                <p className="number-inp">02</p>
                <p className="light-txt dwn-txt">Upcoming</p>
              </div>
              <a href="/" className="inp-link">
                <p>VIEW ECG REPORT DOCUMENTS</p>
              </a>
            </div>
          </div>
        </div>
        <hr color=" #F1F1F1" />
      </div>
    </>
  );
};

export default Input;
