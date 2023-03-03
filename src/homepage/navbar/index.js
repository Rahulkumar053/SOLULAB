import React from "react";
import logo from "../../assets/images/mlogo.png";
import add from "../../assets/images/+.png";
import person from "../../assets/images/person.png";
import folder from "../../assets/images/folder.png";
import upload from "../../assets/images/upload.png";
import report from "../../assets/images/file.png";
import setting from "../../assets/images/setting.png";
import logout from "../../assets/images/arrow.png";
import vector from "../../assets/images/Vector.png";
import Inputdata from "../Input";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="nav-container">
          <div className="icon-logo icon">
            <img src={logo} alt="logo" />
          </div>
          <div className="icon-add icon">
            <img src={add} alt="logo" />

            <p>NEW</p>
          </div>
          <div className="icon">
            <img src={person} alt="logo" />
            <p>PATIENT</p>
          </div>
          <div className="icon">
            <img src={folder} alt="logo" />
            <p>FOLDER</p>
          </div>
          <div className="icon">
            <img src={upload} alt="logo" />
            <p>UPLOAD</p>
          </div>
          <div className="icon">
            <img src={report} alt="logo" />
            <p>REPORT</p>
          </div>
          <div className="icon">
            <img src={setting} alt="logo" />
            <p>SETTING</p>
          </div>
          <div className="icon">
            <img src={logout} alt="logo" />
            <p>LOGOUT</p>
          </div>
        </div>
        {/* end navbar */}
        <div className="display-flex-column">
          <div className="input-conatiner">
            <div className="iput-box">
              <input type="text" placeholder="Find by Name or phone Nuber" />
            </div>
            <div className="right-box">
              <div className="gender">
                <p>Gender</p>
                <p>Female</p>
                <div className="vector-img">
                  <img src={vector} alt="" />
                </div>
              </div>
              <div className="status">
                <p>Member Status</p>
                <p>Active Member</p>
                <div className="vector-img">
                  <img src={vector} alt="" />
                </div>
              </div>
            </div>
          </div>
          <hr color=" #F1F1F1" />
          <Inputdata />
          <Inputdata />
          <Inputdata />
          <Inputdata />
          <Inputdata />
        </div>
      </div>
    </>
  );
};

export default Navbar;
