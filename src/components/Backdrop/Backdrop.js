import React from "react";

import "./Backdrop.css";

const Backdrop = (props) => {
  const cssClass = ["Backdrop", props.show ? "BackdropOpen" : "BackdropClose"];
  return <div className={cssClass.join(" ")}></div>;
};

export default Backdrop;
