import { createBrowserRouter } from "react-router";
import "./App.css";
import { RouterProvider } from "react-router";
import Overview from "./pages/vendor/Overview";
import VendorAds from "./pages/vendor/VendorAds";
import CreateAd from "./pages/vendor/CreateAd";
import DashboardLayout from "./layouts/DashboardLayouts";
import EditAd from "./pages/vendor/EditAd";
import AdDetails from "./pages/user/AdDetails";
import UserLayouts from "./layouts/UserLayouts";
import AllAdverts from "./pages/user/AllAdverts";
import Offers from "./pages/user/Offers";
import About from "./pages/user/About";
import UserContact from "./pages/user/UserContact";
import Landing from "./pages/user/Landing";
import HowItWorks from "./pages/user/HowItWorks";
import MeetTheTeam from "./pages/user/MeetTheTeam";
import Footer from "./pages/user/components/Footer";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Policy from "./pages/auth/Policy";
import Profile from "./pages/vendor/Profile";
import Settings from "./pages/vendor/Settings";
import Faq from "./pages/user/FAQ";
import AdminLayouts from "./layouts/AdminLayouts";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdsList from "./pages/admin/AdminAdsList";
import UsersList from "./pages/admin/UsersList";
import BookChef from "./pages/user/BookChef";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    { path: "/adverts/:id", element: <AdDetails /> },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/privacy-policy",
      element: <Policy />,
    },
    {
      path: "/vendor/profile",
      element: <Profile />,
    },
    {
      path: "/vendor/settings",
      element: <Settings />,
    },
    // vendor layouts
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "ads",
          element: <VendorAds />,
        },
        {
          path: "create-ad",
          element: <CreateAd />,
        },

        {
          path: "dashboard-ad/:id",
          element: <EditAd />,
        },
      ],
    },
    // admin layouts
    // {
    //   path: "/admin",
    //   element: <AdminLayouts />,
    //   children: [
    //     {
    //       path: "dashboard-details/:id",
    //       elememt: <AdDetails />,

    //       index: true,
    //       element: <AdminDashboard />,
    //     },
    //     // {
    //     //   path: "",
    //     //   element: <AdminDashboard />,
    //     // },
    //     {
    //       path: "ad-lists",
    //       element: <AdsList />,
    //     },
    //     {
    //       path: "users-list",
    //       element: <UsersList />,
    //     },
    //     {
    //       path: "policy",
    //       element: <Policy />,
    //     },
    //   ],
    // },
    // users layouts
    {
      path: "/",
      element: <UserLayouts />,
      children: [
        {
          // or you can specify the path here in this case the index: true method is not used but rather the path for the overview is specified and the other children elememts , use the full absolute path
          index: true,
          element: <Landing />,
        },
        // this is used for the child element whom you want to show with the layout of the parent thus in this case the overview page.
        {
          path: "about-us",
          element: <About />,
        },
        {
          path: "about-us/how-it-works",
          element: <HowItWorks />,
        },
        {
          path: "about-us/meet-the-team",
          element: <MeetTheTeam />,
        },

        {
          path: "user-adverts",
          element: <AllAdverts />,
        },
        {
          path: "book-chef",
          element: <BookChef />,
        },

        {
          path: "offers",
          element: <Offers />,
        },
        {
          path: "user-contact",
          element: <UserContact />,
        },
        {
          path: "footer",
          element: <Footer />,
        },

        {
          path: "faq",
          element: <Faq />,
        },
      ],

      // element: <Overview />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
