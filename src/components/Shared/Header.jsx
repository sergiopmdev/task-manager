import Logo from "./Logo";
import DefaultNav from "./DefaultNav";
import Burger from "./Burger";
import DefaultResponsiveNav from "./DefaultResponsiveNav";
import { useEffect, useState } from "react";
import addWidthListener from "../../utilities/addWidthListener";

function Header(props) {
  const [responsiveNav, setResponsiveNav] = useState(false);

  useEffect(() => {
    addWidthListener(768, setResponsiveNav);
  }, []);

  return (
    <header className="flex h-20 w-full items-center justify-center">
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
