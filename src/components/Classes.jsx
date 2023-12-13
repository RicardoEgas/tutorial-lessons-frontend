import React, { useState } from "react";

const AddClassForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    duration: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const backgroundStyle = {
    backgroundImage:
      'url("https://i.pinimg.com/736x/f0/31/00/f03100ff0c6afbbf061bbb4c63b5a15c.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
  };

  const overlayStyle = {
    backgroundColor: "rgba(151, 191, 15, 0.8)",
    height: "100%",
    width: "100%",
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-bold text-white mb-2"
              style={{ letterSpacing: "4px" }}
            >
              Add Class
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
                className="block text-[#97bf0f] text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cost"
                className="block text-[#97bf0f] text-sm font-semibold mb-2"
              >
                Cost
              </label>
              <input
                type="text"
                id="cost"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="duration"
                className="block text-[#97bf0f] text-sm font-semibold mb-2"
              >
                Duration
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-[#97bf0f] text-sm font-semibold mb-2"
              >
                Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
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
    </div>
  );
};

export default AddClassForm;
