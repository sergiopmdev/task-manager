function DefaultNav(props) {
  if (props.page == "register") {
    return (
      <nav className="flex items-center gap-5">
        <span>Do you already have an account?</span>
        <ul className="cursor-pointer rounded-lg bg-medium-blue px-3 py-1.5 text-lg">
          <li>Login</li>
        </ul>
      </nav>
    );
  }
}

export default DefaultNav;
