import { Mail, Phone, MapPin } from "lucide-react";
import phoneMockup from "../../assets/phone2.jpg";

const Contact = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        Have questions, feedback, or need support? We’d love to hear from you.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        <div className="space-y-8">
        
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">support@forkedapp.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+233 567 8900</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Location
                </h4>
                <p className="text-gray-600">Accra, Ghana</p>
              </div>
            </div>
          </div>

         
          <form className="space-y-6 bg-orange-50 p-6 rounded-xl shadow-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* App Download Section */}
        <div className="text-center">
          <img
            src={phoneMockup}
            alt="Download Forked App"
            className="mx-auto mb-6 w-64 h-auto"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Get the Forked App
          </h3>
          <p className="text-gray-600 mb-6">
            Download our app to book chefs, explore recipes, and manage your
            account on the go.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
