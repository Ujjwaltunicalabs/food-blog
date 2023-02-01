import React, { useState } from "react";
import "./subscribe.css";
import img2 from "../../images/Photoplate.png";
import img1 from "../../images/kisspng.png";
import axios from "axios";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  console.log(email)
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch("https://foodieland-api.onrender.com/subscribers", {
        method: "POST",
        // mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email}),
      });
      alert("Subscribed Successfully")
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sub-block">
      <div className="sub-title">
        <div className="stitle">Deliciousness to your inbox</div>
        <div className="s-des">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </div>
      </div>

      <div className="tag-img"></div>
      <div className="fd-img2">
        <img src={img2} alt="image2" />
      </div>
      <div className="fd-img1">
        <img src={img1} alt="image1" />
      </div>
      <div className="subbar">
        <form className="subs-form" onSubmit={handleSubmit}>
          <input
            className="sbar"
            type="text"
            id="email"
            name="email"
            placeholder="Your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="sub-button"
            type="submit"
            // onClick={console.log("working")} value={mail}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
