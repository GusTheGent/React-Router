import { User } from "components/Users/types";
import {
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  label: string;
  type: string | number | boolean;
  name: keyof User;
  register: (
    name: keyof User,
    options?: RegisterOptions<FieldValues, string> | undefined
  ) => UseFormRegisterReturn<any>;
};
