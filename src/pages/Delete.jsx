import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTutorials, deleteTutorial } from '../redux/tutorialSlice';

const DeleteClass = () => {
  const dispatch = useDispatch();
  const tutorials = useSelector((state) => state.tutorials.tutorials);

  useEffect(() => {
    dispatch(getTutorials());
  }, [dispatch]);

  const handleDelete = (tutorialId) => {
    dispatch(deleteTutorial(tutorialId))
      .then(() => {
        dispatch(getTutorials());
      })
      .catch((error) => {
        console.error('Error deleting tutorial:', error);
      });
  };

  const overlayStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), #97bf0f), url("https://img.freepik.com/free-photo/rear-view-young-man-walking-pavement_23-2147891935.jpg")`,
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
            <h2 className="text-4xl font-bold text-white mb-2" style={{ letterSpacing: '4px' }}>
              Delete Tutorial
            </h2>
            <div className="border-t border-white w-52 mx-auto mb-4 mt-4"></div>
            <p className="text-lg text-white">Click "Delete" to remove a tutorial from the list.</p>
          </div>
          {tutorials.length === 0 ? (
            <p className="text-white">No tutorials available to delete.</p>
          ) : (
            <ul className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
              {tutorials.map((tutorial) => (
                <li key={tutorial.id} className="flex items-center justify-between p-4 border-b">
                  <span className="text-[#97bf0f]">{tutorial.title}</span>
                  <button
                    onClick={() => handleDelete(tutorial.id)}
                    className="bg-[#97bf0f] text-white py-2 px-4 rounded-full hover:bg-white hover:text-[#97bf0f] transition duration-300"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
  );
};

export default DeleteClass;
