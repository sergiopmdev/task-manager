function Error(props) {
  return (
    <div
      className={`absolute top-3 right-0 rounded-sm bg-error-color py-1 px-2 text-xs ${props.customCSS}`}
    >
      {props.message}
    </div>
  );
}

export default Error;
