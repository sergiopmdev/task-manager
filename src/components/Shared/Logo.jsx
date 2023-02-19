import { RiTaskFill } from "react-icons/ri";

function Logo(props) {
  return (
    <div className="flex cursor-pointer items-center gap-2 transition-colors hover:text-light-blue">
      <RiTaskFill className="h-5 w-5 md:h-8 md:w-8"></RiTaskFill>
      <h1 className="text-xl md:text-2xl">{props.appName}</h1>
    </div>
  );
}

export default Logo;
