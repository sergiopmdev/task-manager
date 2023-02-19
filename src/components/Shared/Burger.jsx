import { HiMenu } from "react-icons/hi";

function Burger(props) {
  return (
    <HiMenu
      className="block h-8 w-8 cursor-pointer transition-colors hover:text-light-blue md:hidden"
      onClick={() => {
        props.setResponsiveNav(!props.responsiveNav);
      }}
    ></HiMenu>
  );
}

export default Burger;
