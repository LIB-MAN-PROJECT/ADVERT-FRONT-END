import { FormInput, HomeIcon } from "lucide-react";
import { FcAdvertising } from "react-icons/fc";

const K = {
  NAVLINKS: [
    {
      icon: <HomeIcon />,
      text: "Overview",
      path: "/dashboard",
    },
    {
      icon: <FcAdvertising />,
      text: "Explore Our Ads",
      path: "/dashboard/adverts",
    },
    {
      icon: <FormInput />,
      text: "Want To Create An Ad?",
      path: "/dashboard/create-ad",
    },
  ],
  USERLINKS: [
    {
      text: "About-Us",
      dropdown: true,
      children: [
        { text: "Our Team", path: "/about-us/meet-the-team" },
        { text: "How It Works", path: "/about-us/how-it-works" },
      ],

      path: "/about-us",
    },
    {
      text: "Explore Our Recipes",
      dropdown: true,
      children: [
        { text: "Country-based recipes", path: "/user-adverts" },
        { text: "Country-based recipes", path: "/user-adverts" },
        { text: "Country-based recipes", path: "/user-adverts" },
        { text: "Country-based recipes", path: "/user-adverts" },
      ],

      path: "/user-adverts",
    },
    {
      text: "Offers and Discounts",
      path: "/offers",
    },
    {
      text: "Need Help?",
      path: "/user-contact",
    },
  ],
};

export default K;
