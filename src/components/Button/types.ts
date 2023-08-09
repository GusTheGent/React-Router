export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  buttonType?: "submit" | "button" | "reset";
  buttonText: string;
  clickHandler?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};
