import Error from "./Error";

function Input(props) {
  return (
    <div className="relative flex flex-col">
      {props.error && <Error message={props.errorMessage} />}
      <label className="mt-4 mb-1 text-sm md:text-base">{props.label}</label>
      <input
        type={props.type && props.type}
        className="h-8 rounded-md md:h-9"
        {...props.dataHook}
      ></input>
    </div>
  );
}

export default Input;
