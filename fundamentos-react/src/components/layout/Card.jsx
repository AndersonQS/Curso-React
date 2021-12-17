import "./Card.css";
import React from "react";

export default (props) => {
  return (
    <div className="Cor">
      <div className="Title">{props.titulo}</div>
      <div className="Content"> 
      {props.children}
      </div>
     
  </div>
  );
};