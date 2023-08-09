import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputSize = "medium" | "large";
export type InputType = "text" | "email" | "number" | "radio";

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;
