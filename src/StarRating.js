import React, { useState } from "react";

function RatingStars({ onSetRating }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const totalStar = 10;

  // Funzione per gestire il mouse sopra la stella
  function handleMouseEnter(index) {
    setHoveredRating(index);
  }

  // Funzione per gestire il mouse che esce dalla stella

  function handleMouseLeave() {
    setHoveredRating(0);
  }

  // Funzione per gestire il click sulla stella

  function handleClick(index) {
    setRating(index);
    onSetRating(index);
  }

  // Funzione per determinare il colore delle stelle

  function getStarColor(index) {
    if (index <= hoveredRating || index <= rating) {
      return "gold";
    }
    return "gray";
  }

  return (
    <>
      {Array.from({ length: totalStar }, (_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: getStarColor(index),
          }}
        >
          ★
        </span>
      ))}
      <div>
        <p>{hoveredRating || rating || ""}</p>
      </div>
    </>
  );
}

export default RatingStars;
