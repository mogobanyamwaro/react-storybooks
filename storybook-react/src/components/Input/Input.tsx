import React from "react";

function Input(props: any) {
  const { children, size = "medium", ...rest } = props;
  return <input type="text" className={`input ${size}`} {...rest} />;
}

export default Input;
