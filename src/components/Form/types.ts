import { InputType } from "../Input/types";

export type FieldFormat = {
  id: string; //Must always refer to the keys of the according interface
  type: InputType;
  name: string; //Must always refer to the keys of the according interface
  label: string;
  placeholder?: string;
  requiredMessage?: string | boolean;
};

export type FormProps = React.HTMLProps<HTMLFormElement> & {
  fieldValues: FieldFormat[];
  formSubmission: (data: Record<string, any>) => void;
};
