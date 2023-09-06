import React from "react";
import "./Card.scss";

const Card = ({ course }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={course.image} alt={course.title} />
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
