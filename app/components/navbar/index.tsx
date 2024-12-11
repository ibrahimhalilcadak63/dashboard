import { sections } from "@/app/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="h-screen min-w-[60px]">
      <div className="navbar flex flex-col gap-5 border text-gray-500 fixed bg-white h-screen z-50">
        <button className="grid place-items-center pt-5 text-2xl">
          <input id="ham" type="checkbox" />
          <label htmlFor="ham">
            <RxHamburgerMenu />
          </label>
        </button>

        <div className="flex flex-col">
          {sections.map((i,key) => (
            <NavLink item={i} key={key}/>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;