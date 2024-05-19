import React, { Component } from "react";

const Like = (props) => {
  return (
    <i
      className={props.liked === true ? "fas fa-heart" : "far fa-heart"}
      onClick={props.onClick}
    ></i>
  );
};

export default Like;
