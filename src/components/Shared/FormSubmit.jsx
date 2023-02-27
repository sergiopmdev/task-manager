function FormSubmit(props) {
  return (
    <button
      className="mt-8 h-10 rounded-md bg-medium-blue text-lg transition-colors hover:bg-medium-blue/[.9]"
      type="submit"
    >
      {props.action}
    </button>
  );
}

export default FormSubmit;
