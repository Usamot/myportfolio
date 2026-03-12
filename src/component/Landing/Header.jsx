import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import myp from "../assets/myp.png";

const Header = () => {
  return (
    <div className="landing">
      <div className="aside1">
        <div className="small_img">
          <img className="small_pic" src={myp} alt="Profile" />
        </div>
        <div className="disc">
          <h5>Usamot Abeebullahi</h5>
          <p>Fullstack Developer</p>
        </div>

        <ul className="aside1_ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/workdone">Work Done</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;