import { Link, NavLink } from "react-router";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [ischang, setChang] = useState(false);

  const handToggle = () => {
    setChang(!ischang);
  };
  return (
    <header className="shadow bg-white">
      <nav className="px-4 py-2">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <Link to="/" aria-label="Go to homepage">
            <img className="w-2xs" src="Logo.jpg" alt="Logo" />
          </Link>
          <div className="flex items-center space-x-6">
            <ul className="flex items-center p-5 space-x-6">
              <li>
                <NavLink className="text-lg " to="/">
                  mohit
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/news">
                  New
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/shop">
                  Shop
                </NavLink>
              </li>
            </ul>
            <div className="flex  items-center space-x-5">
              <div className="flex items-center  relative left-1 ">
                {ischang && (
                  <input
                    className="p-3 w-xs  rounded-2xl "
                    type="text"
                    placeholder="Enter your product name"
                  />
                )}

                <NavLink
                  className="text-xl p-2  text-gray-600 absolute right-0  "
                  to="/search"
                  aria-label="Search">
                  <FaSearch onClick={handToggle} />
                </NavLink>
              </div>

              <NavLink
                className="text-2xl text-gray-600"
                to="/profile"
                aria-label="User profile"
              >
                <FaRegUserCircle />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
