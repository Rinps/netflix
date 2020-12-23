import React from "react";
import Title from "./Title";
import Carrousel from "./Carrousel";

const Section = (props) => {
  return (
    <div className="movieSection">
      <Title text={props.title} />
      <Carrousel imageList={props.imageList} />
    </div>
  );
};

export default Section;
