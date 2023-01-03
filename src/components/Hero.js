import React from "react";
import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <p>Buy, Sell, and store hundreds of cryptocurrencies 24/7</p>
          <h1>Find and research new projects</h1>
          <p>Stay up to date on the latest crypto trends!</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
