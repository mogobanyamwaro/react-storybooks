import React from "react";
import "./Button.css";

function Button(props: any) {
  const { children, variant = "primary", ...rest } = props;
  return <div className={`button ${variant} {...rest}`}>{children}</div>;
}

export default Button;
