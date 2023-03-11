import Input from "../Shared/Input";
import FormSubmit from "../Shared/FormSubmit";
import FormTitle from "../Shared/FormTitle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import postUser from "../../services/postUser";

function RegisterForm() {
  const [registerStatus, setRegisterStatus] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => postUser(data, setRegisterStatus);

  return (
    <div className="flex h-[calc(100vh-6rem)] w-screen items-center justify-center">
      <form
        className="relative mx-auto flex w-[35rem] flex-col justify-center rounded-md bg-extra-dark-blue py-8 px-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        {registerStatus == 409 && (
          <div className="absolute top-3 right-0 rounded-sm bg-error-color py-1 px-2 text-xs">
            User already exists
          </div>
        )}
        <FormTitle title="Sign Up" />
        <Input
          label="Name"
          dataHook={register("name", { required: true, pattern: /^.{4,}$/i })}
          error={errors.name}
          errorMessage="Minimum 4 characters"
        />

        <Input
          label="Email"
          type="email"
          dataHook={register("email", {
            required: true,
            pattern:
              /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
          })}
          error={errors.email}
          errorMessage="Invalid email"
        />
        <Input
          label="Password"
          type="password"
          dataHook={register("password", {
            required: true,
            pattern: /^.{8,}$/i,
          })}
          error={errors.password}
          errorMessage="Minimum 8 characters"
        />
        <FormSubmit action="Send" />
      </form>
    </div>
  );
}

export default RegisterForm;
