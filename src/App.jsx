import { createBrowserRouter } from "react-router";
import "./App.css";
import { RouterProvider } from "react-router";
import Overview from "./pages/vendor/Overview";
import VendorAds from "./pages/vendor/VendorAds";
import CreateAd from "./pages/vendor/CreateAd";
import DashboardLayout from "./layouts/DashboardLayouts";
import EditAd from "./pages/vendor/components/EditAd";
import AdDetails from "./pages/vendor/AdDetails";
import UserLayouts from "./layouts/UserLayouts";
import AllAdverts from "./pages/user/AllAdverts";
import Offers from "./pages/user/Offers";
import About from "./pages/user/About";
import UserContact from "./pages/user/UserContact";
import Landing from "./pages/user/Landing";
import HowItWorks from "./pages/user/HowItWorks";
import MeetTheTeam from "./pages/user/MeetTheTeam";

function App() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          // or you can specify the path here in this case the index: true method is not used but rather the path for the overview is specified and the other children elememts , use the full absolute path
          index: true,
          element: <Overview />,
        },
        // this is used for the child element whom you want to show with the layout of the parent thus in this case the overview page.
        {
          path: "adverts",
          element: <VendorAds />,
        },
        {
          path: "create-ad",
          element: <CreateAd />,
        },
      ],
      // element: <Overview />,
    },
    {
      path: "/",
      element: <UserLayouts/>,
      children: [
        {
          // or you can specify the path here in this case the index: true method is not used but rather the path for the overview is specified and the other children elememts , use the full absolute path
          index: true,
          element: <Landing/>,
        },
        // this is used for the child element whom you want to show with the layout of the parent thus in this case the overview page.
        {
          path: "about-us",
          element: <About/>,
        },
        {
          path: "about-us/how-it-works",
          element: <HowItWorks/>,
        },
        {
          path: "about-us/meet-the-team",
          element: <MeetTheTeam/>,
        },

        {
          path: "user-adverts",
          element: <AllAdverts/>,
        },
        {
          path: "offers",
          element: <Offers/>,
        },
        {
          path: "user-contact",
          element: <UserContact/>,
        },
      ],
      // element: <Overview />,
    },

    {
      path: "/edit-ad/:id",
      element: <EditAd />,
    },
    {
      path: "/ad-details/:id",
      element: <AdDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
