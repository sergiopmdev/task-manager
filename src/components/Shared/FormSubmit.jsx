import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

function FormSubmit(props) {
  const successfulStatus = [201].includes(props.status);
  let submitMessage = undefined;

  if (!successfulStatus && props.loading) {
    submitMessage = "Sending";
  } else if (successfulStatus) {
    submitMessage = "Redirecting";
  } else {
    submitMessage = props.action;
  }

  return (
    <button
      disabled={props.loading}
      className={`${
        props.loading && "cursor-not-allowed opacity-50"
      } mt-8 h-10 rounded-md bg-medium-blue text-base transition-colors enabled:hover:bg-medium-blue/[.9] md:text-lg`}
      type="submit"
    >
      <div className="flex items-center justify-center gap-2">
        {submitMessage}
        {props.loading && (
          <UseAnimations
            animation={loading}
            size={20}
            strokeColor="#A8DADC"
            wrapperStyle={{ opacity: "1" }}
          />
        )}
      </div>
    </button>
  );
}

export default FormSubmit;
