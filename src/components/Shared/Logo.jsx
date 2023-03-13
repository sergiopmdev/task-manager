import { RiTaskFill } from "react-icons/ri";
import { useState } from "react";
import { useEffect } from "react";
import addWidthListener from "../../utilities/addWidthListener";

function Logo(props) {
  const [shortLogo, setShortLogo] = useState(false);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    addWidthListener(768, setShortLogo, true);
  }, []);

  return (
    <div className="flex cursor-pointer items-center gap-2 transition-colors hover:text-light-blue">
      <RiTaskFill className="h-5 w-5 md:h-8 md:w-8"></RiTaskFill>
      <h1 className="text-xl md:text-2xl">
        {shortLogo == false && screenWidth >= 768 ? props.appName : "TM"}
      </h1>
    </div>
  );
}

export default Logo;
