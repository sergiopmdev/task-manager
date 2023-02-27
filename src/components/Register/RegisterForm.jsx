import { useForm } from "react-hook-form";

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
        <h1 className="text-center text-4xl">Sign Up</h1>
        <div className="relative flex flex-col">
          {errors.name && (
            <div className="absolute top-3 right-0 rounded-sm bg-error-color py-1 px-2 text-xs">
              Minimum 4 characters
            </div>
          )}
          <label className="mt-4 mb-1">Name</label>
          <input
            className="h-9 rounded-md"
            {...register("name", {
              required: true,
              pattern: /^.{4,}$/i,
            })}
          ></input>
        </div>
        <div className="relative flex flex-col">
          {errors.email && (
            <div className="absolute top-3 right-0 rounded-sm bg-error-color py-1 px-2 text-xs">
              Invalid type of email
            </div>
          )}
          <label className="mt-4 mb-1">Email</label>
          <input
            className="h-9 rounded-md"
            {...register("email", {
              required: true,
              pattern:
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
            })}
          ></input>
        </div>
        <div className="relative flex flex-col">
          {errors.password && (
            <div className="absolute top-3 right-0 rounded-sm bg-error-color py-1 px-2 text-xs">
              Minimum 8 characters
            </div>
          )}
          <label className="mt-4 mb-1">Password</label>
          <input
            className="h-9 rounded-md"
            type={"password"}
            {...register("password", {
              required: true,
              pattern: /^.{8,}$/i,
            })}
          ></input>
        </div>
        <button
          className="mt-8 h-10 rounded-md bg-medium-blue text-lg transition-colors hover:bg-medium-blue/[.9]"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
