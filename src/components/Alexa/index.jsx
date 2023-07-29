import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import "./index.css";

const Alexa = () => {
  return (
    <div style={{ backgroundColor: "white", overflow: "scroll" }}>
      <div className="menu-h">
        <span>
          <ArrowLeft size={20} />
        </span>
        <h6>MAIN MENU</h6>
      </div>
      <hr />
      <div className="menu-h-list">
        <ul>
          <li>
            <h5>Echo & Alexa</h5>
          </li>
          <li>All-new Echo Dot (4th Gen)</li>
          <li>Echo Dot (3rd Gen)</li>
          <li>Echo Show 8</li>
          <li>All-new Echo (4th Gen)</li>
          <li>Echo Show 5</li>
          <li>Echo Studio</li>
          <li>All-new Echo Show 10</li>
          <li>See all devices with Alexa</li>
          <hr />
          <li>
            <h5>Content & Resources</h5>
          </li>
          <li>Meet Alexa</li>
          <li>Alexa Skills</li>
          <li>Alexa App</li>
          <li>Alexa Smart Home</li>
          <li>Amazon Prime Music</li>
        </ul>
      </div>
    </div>
  );
};

export default Alexa;
