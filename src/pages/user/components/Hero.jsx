
import background from "../../../assets/background.jpg";

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full bg-fixed ">
      <img
        src={background}
        alt="Delicious food hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-"></div>

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Recipes from Around the World, Delivered to You
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Learn from top chefs, explore authentic meals, and bring
            international flavors home.
          </p>
          <a
            href="/signup"
            className=" animate-bounce inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
