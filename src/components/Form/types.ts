import { User } from "components/Users/types";

export type FormProps = {};

type FormFieldType = {
  label: string;
  type: string;
  name: keyof User;
};

export const formFields: FormFieldType[] = [
  { label: "First Name:", type: "text", name: "name" },
  { label: "Last Name:", type: "text", name: "surname" },
  { label: "Pro Name:", type: "text", name: "proName" },
  { label: "Age:", type: "number", name: "age" },
  { label: "Sport:", type: "text", name: "sport" },
  { label: "Country:", type: "text", name: "country" },
  { label: "Your image url:", type: "text", name: "image" },
];
