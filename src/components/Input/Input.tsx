import React, { forwardRef, ForwardedRef } from "react";
import { InputProps } from "./types";
import "./Input.css";

const Input = forwardRef(
  (
    {
      id,
      name,
      label,
      type = "text",
      size = "medium",
      className = "input",
      placeholder,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        className={className}
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        {...props}
      />
    );
  }
) as React.FC<InputProps>;

export default Input;
