import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

function FormSubmit(props) {
  const disabledStatus = [201].includes(props.status);

  return (
    <button
      disabled={disabledStatus}
      className={`${
        disabledStatus && "cursor-not-allowed opacity-50"
      } mt-8 h-10 rounded-md bg-medium-blue text-lg transition-colors enabled:hover:bg-medium-blue/[.9]`}
      type="submit"
    >
      <div className="flex items-center justify-center gap-2">
        {!disabledStatus ? props.action : "Redirecting"}
        {disabledStatus && (
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
