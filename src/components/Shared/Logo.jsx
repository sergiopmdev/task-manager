import { RiTaskFill } from "react-icons/ri";

function Logo(props) {
  return (
    <div className="flex items-center gap-2">
      <RiTaskFill className="h-8 w-8"></RiTaskFill>
      <h1 className="text-2xl">{props.appName}</h1>
    </div>
  );
}

export default Logo;
