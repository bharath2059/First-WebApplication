import React from "react";
import { Alert } from "react-bootstrap";

const Services = ({ props }) => {
  const [Name, onNameChange] = React.useState("");
  const [Email, onEmailChange] = React.useState("");
  const [Subject, onSubjectChange] = React.useState("");
  const [Message, onMessageChange] = React.useState("");
  function submission() {
    Alert("Your request is submitted");
  }
  return (
    <div>
      <div className="SerbiceBody">
        <text>
          I offer Front End and Back end Services for Mobile Applications. For
          Services please fill the below form.
        </text>

        <form>
          <div className="FormBody">
            <div className="Forms">
              <input
                type="text"
                value={Name}
                onChange={onNameChange}
                placeholder="Enter your Name"
              ></input>
              <br />
              <input
                type="text"
                value={Email}
                onChange={onEmailChange}
                placeholder="Enter your Email"
              ></input>
              <br />
              <input
                type="text"
                value={Subject}
                onChange={onSubjectChange}
                placeholder="Subject"
              ></input>
              <br />
              <input
                type="text"
                value={Message}
                onChange={onMessageChange}
                placeholder="Enter Message"
              ></input>
              <br />
              <input
                type="Submit"
                onClick={() => {
                  submission();
                }}
              />
            </div>
          </div>
        </form>
        <text>
          <h1>Contact Details :</h1>
          Emailaddress : bharath.reddy1214@gmail.com
        </text>
      </div>
    </div>
  );
};

export default Services;
