import about from "../../assets/about.jpg";

const About = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src={about}
            alt="Our team"
            className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="md:w-1/2 md:pl-10 mt-10 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className=" text-gray-600 mb-4">
            At Global Gourmet, we bridge the culinary world — connecting recipe
            creators, cookbook vendors, and elite chefs with passionate home
            cooks and food explorers.
          </p>
          <p className="text-gray-600">
            Our mission is to make authentic recipes from every corner of the
            globe accessible, while also giving talented chefs a global stage to
            teach, share, and be booked for exclusive culinary experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
