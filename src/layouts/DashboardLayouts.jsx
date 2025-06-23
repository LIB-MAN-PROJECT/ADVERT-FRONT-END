
import { Outlet } from "react-router";
import Sidebar from "../pages/vendor/components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-72 w-full p-6 min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
