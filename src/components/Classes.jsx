import { useState } from "react";
import { useDispatch } from 'react-redux';
import { submitTutorialApiCall } from '../redux/tutorialSlice';
import { useNavigate } from "react-router-dom";

const AddClassForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    duration: "",
    image: "",
    description:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitTutorialApiCall(formData);
      setFormData({
        name: "",
        cost: "",
        duration: "",
        image: "",
        description: "",
      });
      navigate('/home');
    } catch (error) {
      console.error('Error submitting tutorial:', error);
    }
  };

  const overlayStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), #97bf0f), url("https://imageio.forbes.com/specials-images/imageserve/64a558c8a1a3027a9e9805d4/Black-ethnicity-student-writing-while-studying-in-classroom/960x0.jpg?format=jpg&width=960")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  };

  return (
      <div style={overlayStyle}>
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
          <div className="text-center mb-8">
            <h2
              className="text-4xl font-bold text-white mb-2"
              style={{ letterSpacing: "4px" }}
            >
              Add Tutorial
            </h2>
            <div className="border-t border-white w-52 mx-auto mb-4 mt-4"></div>
            <p className="text-lg text-white">
              Provide the details for your new class.
            </p>
          </div>
          <form
            className="bg-white p-8 rounded-md shadow-md w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-[#97bf0f] font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cost"
                className="block text-[#97bf0f] font-semibold mb-2"
              >
                Cost
              </label>
              <input
                type="text"
                id="cost"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                placeholder="$USD"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="duration"
                className="block text-[#97bf0f] font-semibold mb-2"
              >
                Duration
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Duration(hours)"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-[#97bf0f] font-semibold mb-2"
              >
                Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image url..."
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-[#97bf0f] font-semibold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Say something..."
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#97bf0f] text-white py-2 px-4 rounded-full hover:bg-white hover:text-[#97bf0f] transition duration-300"
            >
              Submit
              <i className="fas fa-arrow-alt-circle-right pl-2"></i>
            </button>
          </form>
        </div>
      </div>
  );
};

export default AddClassForm;
