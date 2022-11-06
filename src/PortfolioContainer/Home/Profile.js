import React from "react";
import Typical from "react-typical";
// npm i react-typical --force (to create a animation text)

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="prfile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.facebook.com">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.google.com">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
           
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="high-lighted-text">Selvarani</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev ",
                    1000,
                    "Full Stack Developer",
                    1000, // press windows + .
                    "Cross Platform ",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "React Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applicatiions with front end and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>

            {/* // to download the resume, copy that pdf file inside the public folder */}
            <a href="ehizcv.pdf" download="myResume.pdf">
              {" "}
              {/*// can give any name in download='Resume.pdf */}
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
