import K from "../../../constants";
import { Link, NavLink } from "react-router";
import { LogOut, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md w-full shadow-lg fixed top-0 p-4 flex justify-between items-center z-50 border-b border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <span className="text-3xl font-extrabold text-purple-700 tracking-wide">
            G.LOBAL GOURMET
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 items-center">
        {K.USERLINKS.map(({ text, path, children, dropdown }) => (
          <div key={text} className="relative group">
            {/* Main Link */}
            <div className="flex items-center gap-1 px-4 py-2 rounded-xl text-base font-semibold transition-all duration-300 text-gray-700 hover:text-purple-700 hover:bg-purple-100 cursor-pointer">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-purple-700 font-bold" : ""
                  }`
                }
                end
              >
                {text}
              </NavLink>
              {dropdown && (
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              )}
            </div>

            {dropdown && children && (
              <div
                className="absolute left-0 mt-1 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md border min-w-[180px] z-50"
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseLeave={(e) => e.stopPropagation()}
              >
                {children.map((child, index) => (
                  <Link
                    key={index}
                    to={child.path}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                  >
                    {child.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <Link to="/login">
        <button className=" bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Login
        </button>
      </Link>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
          A
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-800">Ama</p>
          <button className="flex items-center gap-1 text-xs text-red-500 hover:underline">
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
