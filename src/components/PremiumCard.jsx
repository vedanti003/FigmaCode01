import React from 'react';

const PremiumCard = ({ title, content, price, bullets }) => {
  return (
    <div className="premium-card">
      <h3>{title}</h3>
      <p>
        {content}
        <br />
        Pricing: {price} per month.
      </p>
      <ul>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <button>Start free trial</button>
    </div>
  );
};

export default PremiumCard;
