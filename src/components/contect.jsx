import React from "react";
import logo from "./css/github.svg";
import logo2 from "./css/linkedin.svg";
import "./css/contect.css";
function Contect() {
  return (
    <div className="container">
      <h1 className="heading-contact">Contact</h1>
      <div className="form">
        <form>
        <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
          <br/>
          <br/>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
          <br />
          <br />
          <label htmlFor="work">Message: </label>
          <textarea name="work" id="text1" cols="23" rows="5"></textarea>
          <br/>
          <br/>
          <input type="button" value="Send" />
        </form>
      </div>

      <span>
        <h4 className="heading2">See my work and projects</h4>
        <a href="https://github.com/jaiminpanna">
          <img src={logo} alt="Bootstrap" width="32" height="32"></img>
        </a>{" "}
      </span>
      <h4 className="heading3">Connect me on linkedin</h4>
      <a href="https://www.linkedin.com/in/jaiminpanna/">
        <img src={logo2} alt="Bootstrap" width="32" height="32"></img>
      </a>
    </div>
  );
}

export default Contect;