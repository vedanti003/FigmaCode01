import React from 'react';

const Testimonial = ({ name, company, rating, text, profileImage }) => {
  return (
    <div className="testimonial">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="testimonial-info">
        <h3>{name}</h3>
        <p>{company}</p>
        <div className="rating">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} className="star">&#9733;</span>
          ))}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
