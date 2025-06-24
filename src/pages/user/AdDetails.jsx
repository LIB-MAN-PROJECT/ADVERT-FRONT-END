import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Calendar, ChefHat } from "lucide-react";
import LoadingSpinner from "../../components/LoadingSpinner";

const AdDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          `https://advert-management.onrender.com/api/adverts/${id}`
        );
        setRecipe(res.data);
      } catch (err) {
        console.error("Failed to fetch recipe:", err);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <LoadingSpinner />;

  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img
            src={recipe.imageUrl}
            alt={recipe.recipeName}
            className="w-full h-[500px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {recipe.recipeName}
          </h2>
          <p className="text-orange-600 text-2xl font-bold mb-4">
            ${recipe.price}
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {recipe.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "courseType",
              "countryOfOrigin",
              "specialDiet",
              "cookingTechnique",
            ].map(
              (field) =>
                recipe[field] && (
                  <span
                    key={field}
                    className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium capitalize"
                  >
                    {recipe[field]}
                  </span>
                )
            )}
          </div>

          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
            <Calendar size={20} />
            Book This Chef
          </button>

          {/* Placeholder: Vendor / Chef Info */}
          <div className="mt-10 border-t pt-6">
            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <ChefHat size={20} className="text-purple-500" />
              About This Chef
            </h4>
            <p className="text-sm text-gray-600">
              This section can show chef bio, contact, ratings or badges.
              Designed for future integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdDetails;
