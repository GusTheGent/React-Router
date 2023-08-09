import React from "react";
import { useForm } from "react-hook-form";
import { FormProps } from "./types";
import FormInput from "../FormInput/FormInput";
import { DevTool } from "@hookform/devtools";
import "./Form.css";
import Button from "components/Button/Button";

const Form: React.FunctionComponent<FormProps> = ({
  fieldValues,
  formSubmission,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Record<string, any>>();

  const onSubmit = handleSubmit((data) => {
    console.log("Form Data: ", data);
    formSubmission(data);
  });
  return (
    <React.Fragment>
      <form className="form" onSubmit={onSubmit}>
        {fieldValues.map((field) => {
          return (
            <FormInput
              key={field.id}
              id={field.id}
              type={field.type}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              register={register}
              rules={{ required: field.requiredMessage }}
              errors={errors}
            />
          );
        })}
        <Button buttonType="submit" buttonText="Submit" />
      </form>
      <DevTool control={control} />
    </React.Fragment>
  );
};

export default Form;
