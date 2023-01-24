import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Contact</li>
            <li className="topListItem">Write</li>
            <li className="topListItem">LogOut</li>
          </ul>
        </div>
        <div className="topRight">
          <img className="topImg" src="https://www.ccifrance-international.org/fileadmin/_processed_/a/1/csm_technologie_hk_853843326c.jpg" alt="" />
          <i className="topSerchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
