import React from "react";
import "./header.css";
import myp from "../assets/myp.png";

import { Link,  } from "react-router-dom";
// import About from "../About/About";

// import Education from "../Education/Education";

const Header = () => {



  
  return (
    <div className="landing">
      <div className="aside1">
        <div className="small_img">
          <img className="small_pic" src={myp} alt='' />
        </div>
        <div className="disc">
          <h5>Usamot Abeebullahi</h5>
          <p>Fullstack Developer</p>
        </div>

        <ul className="aside1_ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/about" >Skill</Link>
          </li>
          <li>
            <Link to="">Workdone</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
