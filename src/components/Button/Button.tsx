import React from "react";
import { ButtonProps } from "./types";
import "./Button.css";

const Button: React.FunctionComponent<ButtonProps> = ({
  buttonText,
  buttonType,
  clickHandler,
}) => {
  return (
    <React.Fragment>
      <button
        className="custom-button"
        type={buttonType}
        onClick={clickHandler}
      >
        {buttonText}
      </button>
    </React.Fragment>
  );
};

export default Button;
