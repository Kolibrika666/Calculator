import React from "react";

type ButtonAttributeType = {
  textContent: string;
  onClick: React.MouseEventHandler;
};
const Button = (button: ButtonAttributeType) => {
  return <button onClick={button.onClick}>{button.textContent}</button>;
};

export default Button;
