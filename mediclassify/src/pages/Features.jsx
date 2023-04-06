import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faUsers, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <div className="feature-icon">
          <FontAwesomeIcon icon={faLaptop} />
        </div>
        <div className="feature-title">Easy to Use</div>
        <div className="feature-description">
          Our platform is designed to be user-friendly, even for those who are not tech-savvy.
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <div className="feature-title">Ease of Access</div>
        <div className="feature-description">
          MediClassify make it easy to access and modify content from the database.
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
          <FontAwesomeIcon icon={faFileAlt} />
        </div>
        <div className="feature-title">Storage Management</div>
        <div className="feature-description">
          Keep all your images in one place and access them from anywhere at any time.
        </div>
      </div>
    </div>
  );
};

export default Features;