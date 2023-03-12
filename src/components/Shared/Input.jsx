import Error from "./Error";

function Input(props) {
  return (
    <div className="relative flex flex-col">
      {props.error && <Error message={props.errorMessage} />}
      <label className="mt-4 mb-1">{props.label}</label>
      <input
        type={props.type && props.type}
        className="h-9 rounded-md"
        {...props.dataHook}
      ></input>
    </div>
  );
}

export default Input;
