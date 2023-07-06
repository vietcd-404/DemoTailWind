import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from "react-icons/bi";
import NavItems from "./NavItems";
import { useState } from "react";

const items = [
  { label: "Home", icon: <BiHomeAlt size="1.875rem" />, active: true },
  { label: "Movies", icon: <BiMoviePlay size="1.875rem" />, active: false },
  { label: "About", icon: <BiInfoCircle size="1.875rem" />, active: false },
];

const Menu = () => (
  <>
    {items.map((items, index) => (
      <NavItems item={items} key={index} />
    ))}
  </>
);

function Nav() {
  const [isNavMenuMobile, setIsMenuMobile] = useState(false);
  return (
    <>
      <nav className="col-span-1 bg-cyan-200">
        <div className="flex mx-4 justify-between items-center md:block">
          <h4 className="uppercase font-bold text-blue-800 py-4 border-b border-blue-700 text-right">
            viiet.com
          </h4>
          <BiMenu
            className="cursor-pointer md:hidden"
            size="1.875rem"
            onClick={() => setIsMenuMobile(!isNavMenuMobile)}
          />
        </div>
        <ul className={`mx-4 my-2 ${isNavMenuMobile ? "" : "hidden"} md:block`}>
          <Menu />
        </ul>
      </nav>
    </>
  );
}

export default Nav;
