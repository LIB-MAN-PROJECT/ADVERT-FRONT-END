import Hero from "./components/Hero";
import About from "./About";
import Offers from "./Offers";
import HowItWorks from "./HowItWorks";
import MeetTheTeam from "./MeetTheTeam";

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <MeetTheTeam />
      <HowItWorks />
      <Offers />
      <section className="bg-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Cook the World?
        </h2>
        <p className="text-gray-600 mb-6">
          Sign up today and start your culinary adventure with top chefs and
          global flavors.
        </p>
        <a
          href="/signup"
          className="bg-orange-600 text-white px-6 py-3 rounded font-semibold hover:bg-orange-700 transition"
        >
          Get Started
        </a>
      </section>
    </>
  );
};

export default Landing;
