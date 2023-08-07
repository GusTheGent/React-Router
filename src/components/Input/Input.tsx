import React from "react";
import { InputProps } from "./types";

const Input: React.FunctionComponent<InputProps> = (props) => {
  const { label, type, name, register } = props;
  return (
    <React.Fragment>
      <label htmlFor={register.name}>{label}</label>
      <input type={type} {...register(name)} />
    </React.Fragment>
  );
};

export default Input;
