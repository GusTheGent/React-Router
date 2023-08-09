import React, { forwardRef, ForwardedRef } from "react";
import { InputProps } from "./types";

const Input = forwardRef(
  (
    {
      id,
      name,
      label,
      type = "text",
      size = "medium",
      className = "",
      placeholder,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
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
