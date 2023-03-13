import Logo from "./Logo";
import DefaultNav from "./DefaultNav";
import Burger from "./Burger";
import DefaultResponsiveNav from "./DefaultResponsiveNav";
import { useEffect, useState } from "react";
import addWidthListener from "../../utilities/addWidthListener";
import addScrollListener from "../../utilities/addScrollListener";

function Header(props) {
  const [responsiveNav, setResponsiveNav] = useState(false);
  const [activeHeader, setActiveHeader] = useState(false);

  useEffect(() => {
    addWidthListener(768, setResponsiveNav);
    addScrollListener(setActiveHeader);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 flex ${
        activeHeader ? "h-20" : "h-24"
      } w-full items-center justify-center transition-[height,background-color] duration-200 ${
        activeHeader && "bg-extra-dark-blue"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between px-5">
        <Logo appName="Task Manager" />
        <DefaultNav page={props.page} />
        <Burger
          responsiveNav={responsiveNav}
          setResponsiveNav={setResponsiveNav}
        />
      </div>
      {responsiveNav && <DefaultResponsiveNav page={props.page} />}
    </header>
  );
}

export default Header;
