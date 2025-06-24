import { Outlet } from "react-router";
import Navbar from "../pages/user/components/Navbar";
import Footer from "../pages/user/components/Footer";

const UserLayouts = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="pt-20">
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};

export default UserLayouts;
