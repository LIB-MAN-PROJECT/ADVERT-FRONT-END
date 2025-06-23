import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import LoadingSpinner from "../../components/LoadingSpinner";

function VendorAds() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://library-management-api-backup.onrender.com/books/${id}`
      );
      alert(res.data.message);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://library-management-api-backup.onrender.com/books"
      );
      setBooks(res.data.data);
      // this then updates the variable books to contain the rsponse gotten from the API
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReset = () => setSearchQuery("");

  return (
    <div>
      <section className="pages px-4 py-10 bg-gray-50 min-h-screen pb-32">
        <div className="search">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Explore Our Catalogue
          </h1>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <input
              type="text"
              placeholder="Search by title, author, or genre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-96 px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-700 transition"
            />
            <button
              onClick={handleReset}
              className="px-4 py-2 text-black hover:underline transition"
            >
              Reset
            </button>
          </div>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white h-[620px] shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer rounded-xl"
                onClick={() => navigate(`/ad-details/${book.id}`)}
              >
                <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-t-xl">
                  <img
                    src={book.bookImg}
                    alt={book.title}
                    className="max-h-full max-w-full object-contain p-[20px]"
                  />
                </div>

                <div className="p-4 space-y-2 text-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {book.title}
                  </h2>
                  <p className="text-sm text-red-500">by {book.author}</p>
                  <p className="text-sm text-gray-600">
                    Genre: {book.genre || "N/A"}
                  </p>
                  <p className="text-sm text-gray-600">
                    Publisher: {book.publisher}
                  </p>

                  {/* Action Icons */}
                  <div className="flex justify-center gap-4 mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(book.id);
                      }}
                      className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition"
                      title="Delete Ad"
                    >
                      <Trash2 size={20} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/edit-ad/${book.id}`);
                      }}
                      className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition"
                      title="Edit Ad"
                    >
                      <Pencil size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default VendorAds;
