import about from "../../assets/about.jpg";

const About = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={about}
            alt="Our team"
            className="rounded-lg shadow-xl transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h4 className="text-orange-500 uppercase font-semibold tracking-wider mb-2">
            Our Story
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            Connecting the World Through Culinary Culture
          </h2>
          <p className="text-gray-600 text-base mb-4 leading-relaxed">
            At <strong>Global Gourmet</strong>, we bridge the culinary world —
            connecting recipe creators, cookbook vendors, and elite chefs with
            passionate home cooks and food explorers.
          </p>
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            Our mission is to make authentic recipes from every corner of the
            globe accessible, while also giving talented chefs a global stage to
            teach, share, and be booked for exclusive culinary experiences.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Meet the Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;