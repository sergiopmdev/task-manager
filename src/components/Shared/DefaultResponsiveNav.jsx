function DefaultResponsiveNav() {
  return (
    <nav className="absolute top-24 right-6 w-40 rounded-lg bg-medium-blue p-3">
      <span>Do you already have an account?</span>
      <ul className="mt-4 w-1/2 cursor-pointer rounded-lg bg-dark-blue px-3.5 py-1.5 transition-colors hover:bg-dark-blue/[.9]">
        <li className="text-md">Login</li>
      </ul>
    </nav>
  );
}

export default DefaultResponsiveNav;
