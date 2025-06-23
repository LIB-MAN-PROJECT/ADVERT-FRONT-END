
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const CreateAd= () => {
  const navigate=useNavigate();

  // State to show/hide the success message
  const [showSuccess, setShowSuccess] = useState(false);
  // State to simulate loading
  const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    // prevent form from defaulting
    e.preventDefault();

    const formData = e.target;
    console.log(formData);

    const payload = {
      bookImg: formData.bookImg.value,
      title: formData.title.value,
      genre: formData.genre.value,
      author: formData.author.value,
      summary: formData.summary.value,
      publisher: formData.publisher.value,
      publication_year: formData.publication_year.value,
      rating: formData.rating.value,
    };

    try {
      const res = await axios.post(
        "https://library-management-api-backup.onrender.com/books",
        payload
      );
      alert(res.data.message);
      navigate("/books")
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = () => {
    
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false); 
      setShowSuccess(true); 

      
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }, 1000); // Simulates a 1-second "Add" process
  };

  return (
       <div className=" body bg-white p-8 rounded-lg shadow-md w-full max-w-md" >
      {showSuccess && (
        <div style={{ color: "green", marginBottom: "10px" }}>
          Book added successfully!
        </div>
      )}

      <h2 className="text-center mb-5 text-gray-800 italic form-title">Add a Book</h2>
      <form className="space-y-5 " onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            name="bookImg"
            type="text"
            placeholder="image-url"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700">
            Summary
          </label>
          <textarea
            name="summary"
            placeholder="Short summary of the book"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            name="author"
            type="text"
            placeholder="Author Name"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Publisher
          </label>
          <input
            name="publisher"
            type="text"
            placeholder="Publisher Name"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Year of Publication
          </label>
          <input
            name="publication_year"
            type="number"
            placeholder="2025"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <input
            name="genre"
            type="text"
            placeholder="e.g., Fiction, Romance"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Rating (1 to 5)
          </label>
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            placeholder="4"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div className="flex space-x-4">
          <button
            // onClick={handleAdd}
            disabled={loading}
            type="submit"
            className=" w-1/1 bg-blue-600 px-6 text-white p-2 rounded-xl hover:bg-blue-700 transition add-btn"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  
   

    

    // <form className="width-[40] p-20px border-1px rounded-lg border-gray-600">
    //   <div>
    //     <label>Image:</label>
    //     <input type="text" id="Image" required />
    //   </div>

    //   <div>
    //     <label>Title:</label>
    //     <input type="text" id="Title" required />
    //   </div>

    //   <div>
    //     <label>Summary:</label>
    //     <input type="text" id="Summary" required />
    //   </div>

    //   <div>
    //     <label>Author:</label>
    //     <input type="text" id="Name" required />
    //   </div>

    //   <div>
    //     <label>Publisher:</label>
    //     <input type="text" id="name" required />
    //   </div>

    //   <div>
    //     <label>Year of Publisher:</label>
    //     <input type="text" id="date" required />
    //   </div>
    // </form>
  );
};

export default CreateAd;
