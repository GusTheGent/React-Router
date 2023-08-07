import React from "react";
import { FormProps, formFields } from "./types";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./Form.css";
import Input from "components/Input/Input";
import { User } from "components/Users/types";
import { users } from "data/users";
import { useNavigate } from "react-router-dom";

const Form: React.FunctionComponent<FormProps> = () => {
  const navigate = useNavigate();
  const form = useForm<User>();
  const { register, control, handleSubmit } = form;
  const onSubmit = (data: User) => {
    users.push({
      ...data,
      id: users.length + 1,
      active: true,
    });
    navigate("/users");
  };
  return (
    <React.Fragment>
      <form className="cool-form" onSubmit={handleSubmit(onSubmit)}>
        {formFields.map((formField, index) => {
          return (
            <Input
              key={index}
              label={formField.label}
              type={formField.type}
              name={formField.name}
              register={register}
            />
          );
        })}
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </React.Fragment>
  );
};

export default Form;
