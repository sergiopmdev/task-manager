function DefaultNav(props) {
  if (props.page == "register") {
    return (
      <nav className="hidden items-center gap-5 md:flex">
        <span>Do you already have an account?</span>
        <ul className="cursor-pointer rounded-lg bg-medium-blue px-3.5 py-1.5 transition-colors hover:bg-medium-blue/[.9]">
          <li className="text-lg">Login</li>
        </ul>
      </nav>
    );
  }
}

export default DefaultNav;
