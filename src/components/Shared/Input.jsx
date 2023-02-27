function Input(props) {
  return (
    <div className="relative flex flex-col">
      {props.error && (
        <div className="absolute top-3 right-0 rounded-sm bg-error-color py-1 px-2 text-xs">
          {props.errorMessage}
        </div>
      )}
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
