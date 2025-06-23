import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

const AdDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});

  const fetchSingleBook = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://library-management-api-backup.onrender.com/books/${id}`
      );
      setBook(res.data.data || res.data.findBook || {});
    } catch (error) {
      console.error("Error fetching book:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  const renderStars = (rating = 0) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const remainder = rating - fullStars;

    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }
    if (remainder >= 0.5) stars.push("☆");
    while (stars.length < 5) {
      stars.push("☆");
    }

    return stars.join(" ");
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-gradient-to-br from-gray-100 to-white text-gray-900 font-serif animate-fadeIn">
      {loading ? (
        <p className="text-center text-xl font-medium">Fetching your book...</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Book Image */}
          <div className="bg-white shadow-2xl rounded-2xl p-6 flex justify-center items-center h-[500px]">
            <img
              src={book?.bookImg}
              alt={book?.title}
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          </div>

          {/* Book Details */}
          <div className="shadow-2xl rounded-2xl p-10 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 leading-snug">
                {book?.title}
              </h1>
              <p className="text-lg text-gray-500 mt-1">
                by{" "}
                <span className="text-gray-700 font-semibold">
                  {book?.author}
                </span>
              </p>
            </div>

            <div className="text-md text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">Publisher:</span>{" "}
                {book?.publisher}
              </p>
              <p>
                <span className="font-semibold">Genre:</span> {book?.genre}
              </p>
              <p>
                <span className="font-semibold">Publication Year:</span>{" "}
                {book?.publication_year}
              </p>
              <p>
                <span className="font-semibold">Rating:</span>{" "}
                <span className="text-yellow-500">
                  {renderStars(book?.rating)}
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Book Summary
              </h2>
              <p className="text-gray-700 leading-relaxed tracking-wide">
                {book?.summary || "No summary provided for this title."}
              </p>
            </div>

            <div className="pt-6 flex justify-between items-center">
              <Link
                to="/dashboard/adverts"
                className="text-purple-700 underline text-sm hover:text-purple-900"
              >
                ← Back to Ads
              </Link>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all shadow">
                Read Sample
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdDetails;
