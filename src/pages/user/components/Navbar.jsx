import K from "../../../constants";
import { Link, NavLink } from "react-router";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white/90 backdrop-blur-md w-full shadow-md fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          to="/"
          className="text-2xl font-extrabold text-purple-700 tracking-wide"
        >
          G.ARNISH
        </Link>

       
        <nav className="hidden md:flex items-center space-x-6">
          {K.USERLINKS.map(({ text, path, children, dropdown }) => (
            <div key={text} className="relative group">
              <div className="flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-purple-700 transition cursor-pointer">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition duration-200 ${
                      isActive ? "text-purple-700 font-bold" : ""
                    }`
                  }
                  end
                >
                  {text}
                </NavLink>
                {dropdown && (
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </div>

              {/* Dropdown */}
              {dropdown && children && (
                <div className="absolute left-0 mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out bg-white shadow-lg rounded-md border min-w-[180px] z-50">
                  {children.map((child, index) => (
                    <Link
                      key={index}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                    >
                      {child.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/signup">
            <button className="border border-amber-600 text-amber-600 hover:bg-amber-100 px-5 py-2 rounded-lg font-semibold transition">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-lg font-semibold transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
