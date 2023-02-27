import { useForm } from "react-hook-form";
import Input from "../Shared/Input";
import FormSubmit from "../Shared/FormSubmit";
import FormTitle from "../Shared/FormTitle";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-[calc(100vh-6rem)] w-screen items-center justify-center">
      <form
        className="mx-auto flex w-[35rem] flex-col justify-center rounded-md bg-extra-dark-blue py-8 px-10"
        onSubmit={handleSubmit(onSubmit)}
      >
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
