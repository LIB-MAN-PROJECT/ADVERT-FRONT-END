import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const EditAd = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [book, setBook] = useState({});
  const [formData, setFormData] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
//   book: stores the original book data fetched from the server.
// formData: stores edited values from the form.
// showSuccess: controls whether we show a “success” message.
// loading: helps us show a loading a text while fetching data.

  const fetchSingleBook = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://library-management-api-backup.onrender.com/books/${params?.id}`
      );
      setBook(res.data.data);
      // setFormData(res.data.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      bookImg:  book.bookImg??formData.bookImg ,
      title: formData.title ?? book?.title,
      genre: formData.genre ?? book?.genre,
      author: formData.author ?? book?.author,
      summary: formData.summary ?? book?.summary,
      publisher: formData.publisher ?? book?.publisher,
      publication_year: formData.publication_year ?? book?.publication_year,
      rating: formData.rating ?? book?.rating,
    };
    // this payload above representd the nullish coalescing
//     e.preventDefault() stops the page from refreshing when submitting.
//a payload object is built with all book details:
// If the user edited the field, it uses formData.
// If the user left it unchanged, it uses the original book data.
// ?? means "use the first value if it's not null or undefined, otherwise use the second."



    try {
      const res = await axios.put(
        `https://library-management-api-backup.onrender.com/books/${params?.id}`,
        payload
      );
      alert(res.data.message);
      navigate(-1); 
    } catch (error) {
      console.log(error);
    }
  };

//   axios.put(...) sends the updated book info to the server.
// If successful, it shows an alert and navigates back to the previous page using navigate(-1).

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <div className="fixed inset-0 bg-white bg-opacity-40 z-50 flex items-center justify-center px-4">
      {/* this wraps the whole form in a modal popup component */}
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 space-y-6 border">
        {showSuccess && (
          <div className="text-green-600 font-medium text-sm">Ad edited successfully</div>
        )}

        <h2 className="text-2xl font-bold text-gray-800 text-center">Edit an Ad</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              name="bookImg"
              type="text"
              value={formData?.bookImg ?? book.bookImg}
              placeholder="image-url"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, bookImg: e.target.value }))
              }
              className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              value={formData?.title ?? book.title}
              className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          {/* value: displays either what the user typed (formData) or original value (book.title).
onChange: updates the formData with every keystroke using setFormData. 
onChange={...}
This listens for when the value of the input changes (e.g., when the user types).


(e) => ...
This is the arrow function handling the event. e is the event object from the input(thus shows the current value ).
setFormData(...)
This updates the formData state (from useState).
(prev) => ({ ...prev, bookImg: e.target.value })
This function takes the previous state (prev), spreads its content into a new object (...prev), and updates the bookImg property with the new input value (e.target.value).*/}

          <div>
            <label className="block text-sm font-medium text-gray-700">Summary</label>
            <textarea
              name="summary"
              placeholder="Short summary of the book"
              value={formData?.summary ?? book.summary}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, summary: e.target.value }))
              }
              rows="4"
              className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Author</label>
            <input
              name="author"
              type="text"
              value={formData?.author ?? book.author}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, author: e.target.value }))
              }
              placeholder="Author Name"
              className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Publisher</label>
            <input
              name="publisher"
              type="text"
              value={formData?.publisher ?? book.publisher}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, publisher: e.target.value }))
              }
              placeholder="Publisher Name"
              className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Year of Publication</label>
            <input
              name="publication_year"
              type="number"
              placeholder="2025"
              value={formData?.publication_year ?? book.publication_year}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, publication_year: e.target.value }))
              }
              className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Genre</label>
            <input
              name="genre"
              type="text"
              value={formData?.genre ?? book.genre}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, genre: e.target.value }))
              }
              placeholder="e.g., Fiction, Romance"
              className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rating (1 to 5)</label>
            <input
              name="rating"
              type="number"
              value={formData?.rating ?? book.rating}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, rating: e.target.value }))
              }
              min="1"
              max="5"
              placeholder="4"
              className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            {/* Cancel: Takes the  user back to the previous page without saving. */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAd;
