import React from "react";
import "./Signup.css";
import Crypto from "../assets/trade.png";

function Signup() {
  return (
    <div className="signup">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <img src={Crypto} alt="" />
        </div>

        {/* Right Side */}
        <div className="right">
          <h2>Earn passive income with crypto</h2>
          <p>Earn over 10% annually on your digital assets</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
