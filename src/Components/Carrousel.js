import React from "react";

const Carrousel = (props) => {
  return (
    <div className="carrousel">
      {props.imageList.map((image, index) => {
        return <img src={image} alt="movie" key={index} />;
      })}
    </div>
  );
};

export default Carrousel;
