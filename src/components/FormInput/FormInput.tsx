import Input from "../Input/Input";
import { FormInputProps } from "./types";
import { ErrorMessage } from "@hookform/error-message";

const FormInput = <T extends Record<string, unknown>>({
  className,
  name,
  register,
  rules,
  errors,
  ...props
}: FormInputProps<T>): JSX.Element => {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div className={className} aria-live="polite">
      <Input
        name={name}
        aria-invalid={hasError}
        {...props}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <p>{message}</p>}
      />
    </div>
  );
};
export default FormInput;
