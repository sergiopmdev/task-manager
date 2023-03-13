import Input from "../Shared/Input";
import FormSubmit from "../Shared/FormSubmit";
import FormTitle from "../Shared/FormTitle";
import Error from "../Shared/Error";
import Success from "../Shared/Success";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import postUser from "../../services/postUser";

function RegisterForm() {
  const [registerStatus, setRegisterStatus] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (registerStatus == 201) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [registerStatus]);

  async function onSubmit(data) {
    await postUser(data, setRegisterStatus);
  }

  return (
    <div className="mt-10 flex h-auto w-screen items-center justify-center md:mt-0 md:h-[calc(100vh-6rem)]">
      <form
        className="relative mx-auto flex w-11/12 flex-col justify-center rounded-md bg-extra-dark-blue py-8 px-5 md:w-[35rem] md:px-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        {registerStatus == 409 && (
          <Error message="User already exists" customCSS="mr-3" />
        )}
        {registerStatus == 201 && (
          <Success message="Account created" customCSS="mr-3" />
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
        <FormSubmit action="Send" status={registerStatus} />
      </form>
    </div>
  );
}

export default RegisterForm;
