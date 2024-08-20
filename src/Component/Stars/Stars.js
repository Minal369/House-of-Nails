import React from "react";
import "./Stars.css";

const Stars = ({rating}) => {
    const totalStars = 5
  return (
    <>
      <div>
        {[...Array(totalStars)].map((_, index)=>(
            <span key={index} style={{color: index < rating ? ' #fc2779' : 'lightpink' }}><i class="fa-solid fa-star"></i></span>
        ))}
      </div>
    </>
  );
};

export default Stars;
