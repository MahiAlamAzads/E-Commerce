import React from "react";
import "./Star.css"; // External CSS file for styles

const Star = ({ rating }) => {
  const percentage = (rating / 5) * 100;

  return (
    <div>
        <div className="star-wrapper" aria-label={`Rating: ${rating}`}>
      <div className="star-back">★★★★★</div>
      <div className="star-front" style={{ width: `${percentage}%` }}>
        ★★★★★
      </div>
    </div>
    <p className="text-green-500 text-3xl">{rating}</p>
    </div>
  );
};

export default Star;
