import Logo from "./Logo";
import DefaultNav from "./DefaultNav";

function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-center">
      <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between px-5">
        <Logo appName="Task Manager" />
        <DefaultNav page="register" />
      </div>
    </header>
  );
}

export default Header;
