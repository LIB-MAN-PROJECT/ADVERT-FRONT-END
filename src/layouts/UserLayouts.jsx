import { Outlet } from "react-router";
import Navbar from "../pages/user/components/Navbar";

const UserLayouts = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="pt-10">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayouts;
