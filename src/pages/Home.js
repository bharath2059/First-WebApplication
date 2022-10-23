import "../styles/mystyles.css";
import react from "../Images/react.jpeg";
import React from "react";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="Welcome_Text">
      <p>
        Hello, Welcome to my Web Application.
        <br />
        This is My first Web application.
        <br />I Created this Web Application Using the React Native
      </p>
      <Image id="profilepic" src={react} />
    </div>
  );
};

export default Home;
