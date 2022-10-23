import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import profile from "../Images/profilepic.jpg";

const About = () => {
  return (
    <div className="section">
      <div className="card_styles">
        <div className="Body">
          <Card>
            <Card.Body>
              <div className="profilepic">
                <Image id="profilepic" src={profile} />

                <div className="cardBody">
                  <Card.Title>Bharath Mamidi</Card.Title> <br />
                  <Card.Text>
                    <h5>Personal Information</h5>
                    <hr></hr>
                  </Card.Text>
                  <Card.Text> Born : 20 May 1999</Card.Text>
                  <Card.Text>Languages : English, Telugu, Hindi</Card.Text>
                  <Card.Text>Nationality: Indian </Card.Text>
                  <Card.Text>
                    Programming Languages : Java, Python, Swift, html,
                    JavaScript{" "}
                  </Card.Text>
                  <Card.Text>
                    Technology worked on : React-Native, Xcode, Andriod Studio
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div class="About">
        <text>
          <h2>Professional Summary </h2> <hr></hr>I'm 21 years old. I'm Graduate
          in Computer Science & Engineering and pursing Mobile Application
          Development. I strive to gain Professional experience. My passion is
          Mobile Application and New technologies.I am good at designinig and
          developing Mobile Applications. I am a hard-working and thorough
          person, I learn quickly. I am looking for opportunities to develop as
          Mobile Application developer.
        </text>
        <text>
          <h2>Education</h2>
          <hr></hr>
          <h4>Graduate Degree in Mobile Application Development</h4>
          2022-2023 Georgian College - Barrie, Ontario, Canada.
          <h4>Bachelor's in Computer Science & Engineering</h4>
          2017-2021 Graduated with 7.8 CGPA Guru Nanak Instituion of Technical
          Campus -Imbrahimpatnam, Hyderabad, Telangana,India
        </text>
        <text>
          <h2>Volunteer Experience</h2>
          <hr></hr>
          During my under graduation, participated in workshops regarding cloud
          computing. Also, did my major project on 'Intrusion Detection and
          Prevention Using HoneyPot Network for Cloud Security' in my last year
          of graduation which is about detecting and preventing intruders from
          accessing the secured cloud data.
        </text>
        <text>
          <h2>Additional Skills</h2>
          <hr></hr>
          Good product knowledge Management skills Kindness, reliability
        </text>
      </div>
    </div>
  );
};

export default About;
