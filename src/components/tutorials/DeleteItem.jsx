import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  delTutorial,
  deleteTutorial,
  getTutorials,
} from '../../redux/tutorialSlice';

const DeleteItem = () => {
  const dispatch = useDispatch();
  const tutorials = useSelector((state) => state.tutorials.tutorials);

  console.log(tutorials);

  useEffect(() => {
    dispatch(getTutorials());
  }, [dispatch]);

  const handleDelete = async (tutorial_id) => {
    await dispatch(deleteTutorial(tutorial_id));
    await dispatch(delTutorial(tutorial_id));
  };

  return (
    <div className="flex flex-col w-full items-center py-8 px-4">
      <h1 className="text-2xl font-semi-bold my-8">
        <span className="inline-block border-b-2 border-dashed border-gray-300 pb-4 px-6">
          Delete Tutorial
        </span>
      </h1>

      <ul className="w-full flex flex-col items-center space-y-2">
        {tutorials.map((tutorial) => (
          <li
            key={tutorial.id}
            className="flex justify-between w-full rounded-full max-w-[40rem] m-auto py-2 pl-2 pr-4 even:bg-gray-100"
          >
            <div className="flex items-center space-x-2">
              <img
                src={tutorial.photo}
                alt={tutorial.title}
                className="w-12 h-12 object-cover rounded-full border border-gray-500 shadow-md"
              />
              <h2 className="text-lg font-semi-bold text-gray-700">
                {tutorial.name}
              </h2>
            </div>

            <div className="grid place-items-center">
              <button
                type="button"
                onClick={() => handleDelete(tutorial.id)}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-1 my-1 "
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteItem;
