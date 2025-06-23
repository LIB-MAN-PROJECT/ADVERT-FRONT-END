import K from "../../../constants";
import { NavLink } from "react-router";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-black backdrop-blur-lg shadow-xl w-72 h-screen fixed left-0 top-0 p-6 flex flex-col justify-between z-50 border-r border-white/30 text-white">
      <div className="flex items-center justify-center mb-10">
        <span className="text-3xl font-extrabold text-purple-700 tracking-wide">
          G.ARNISH
        </span>
      </div>
      <nav className="flex flex-col gap-4">
        {K.NAVLINKS.map(({ icon, text, path }) => (
          <NavLink
            key={text}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-purple-700 text-white shadow-md"
                  : "text-gray-300 hover:bg-purple-100 hover:text-purple-700"
              }`
            }
            end
          >
            <span className="text-xl">{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </nav>

      {/* <div className="mt-auto">
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <div>
            <p className="text-sm font-semibold">Ama</p>
            <button className="flex items-center gap-1 text-xs text-red-400 hover:underline">
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>

        {/* Footer */}
      <div className="text-xs text-center text-gray-500">
        &copy; 2025 G.arnish
      </div>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
