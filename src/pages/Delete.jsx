import { useState } from 'react';

const DeleteClass = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: 'Class 1' },
    { id: 2, name: 'Class 2' },
    { id: 3, name: 'Class 3' },
  ]);

  const handleDelete = (classId) => {
    setClasses((prevClasses) => prevClasses.filter((classItem) => classItem.id !== classId));
  };

  const backgroundStyle = {
    backgroundImage:
      'url("https://img.freepik.com/free-photo/rear-view-young-man-walking-pavement_23-2147891935.jpg")',
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
        <h2 className="text-3xl font-bold text-white mb-2" style={{ letterSpacing: '4px' }}>
          Delete Classes
        </h2>
        <div className="border-t border-white w-52 mx-auto mb-4 mt-4"></div>
        <p className="text-lg text-white">Click &quot;Delete&quot; to remove a class from the list.</p>
      </div>
      <ul className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        {classes.map((classItem) => (
          <li key={classItem.id} className="flex items-center justify-between p-4 border-b">
            <span className="text-[#97bf0f]">{classItem.name}</span>
            <button
              onClick={() => handleDelete(classItem.id)}
              className="bg-[#97bf0f] text-white py-2 px-4 rounded-full hover:bg-white hover:text-[#97bf0f] transition duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default DeleteClass;
