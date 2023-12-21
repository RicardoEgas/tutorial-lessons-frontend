import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTutorial } from '../../redux/actions';

import bgImage from '../../images/form-bg-desktop.png';

const TutorialForm = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [tutorialTitle, setTutorialTitle] = useState('');
  const [tutorialPrice, setTutorialPrice] = useState('');
  const [schedulingPrice, setSchedulingPrice] = useState('');
  const [description, setDescription] = useState('');
  const [tutorialPhoto, setTutorialPhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    if (
        tutorialTitle !== '' &&
        tutorialPrice > 0 &&
      schedulingPrice > 0 &&
      description !== '' &&
      tutorialPhoto !== ''
    ) {
      const newTutorial = {
        title: tutorialTitle,
        tutorial_price: tutorialPrice,
        scheduling_price: schedulingPrice,
        description: description,
        photo: tutorialPhoto,
      };
      await dispatch(addTutorial(newTutorial));
      setTutorialTitle('');
      setTutorialPrice('');
      setSchedulingPrice('');
      setDescription('');
      setTutorialPhoto('');
    } else {
      alert('All fields required');
    }
    setDisabled(false);
  };

  return (
    <div
      className="lg:h-screen h-[90vh] overflow-hidden bg-cover bg-no-repeat p-2 text-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div
        className="absolute grid place-items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{
          backgroundColor: 'rgba(115, 145, 6, 0.9)',
        }}
      >
        <div className="items-center text-gray-300 p-2 rounded w-full max-w-lg mx-auto">
          <h2 className="text-2xl text-white font-semi-bold mb-6">
            Add a New Tutorial
          </h2>

          <form className="p-2 flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 md:flex-row md:align-center md:gap-1">
              <div className="flex-1">
                <input
                  required
                  id="name"
                  className="w-full bg-gray-100 bg-opacity-20 border border-white text-white rounded-full py-2 px-4 md:rounded-r-none md:rounded-l-full placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent focus:bg-lime-400 focus:bg-opacity-20"
                  type="text"
                  placeholder="Enter Tutorial Name"
                  value={tutorialTitle}
                  aria-label="Tutorial Name"
                  onChange={(e) => setTutorialTitle(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <input
                  required
                  className="w-full bg-gray-100 bg-opacity-20 border border-white text-white rounded-full py-2 px-4 md:rounded-l-none md:rounded-r-full placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent focus:bg-lime-400 focus:bg-opacity-20"
                  id="purchasePrice"
                  type="number"
                  value={tutorialPrice}
                  placeholder="Enter Purchase Price"
                  aria-label="Purchase Price"
                  onChange={(e) => setTutorialPrice(e.target.value)}
                />
              </div>
            </div>

            <div>
              <input
                required
                className="w-full bg-gray-100 bg-opacity-20 border border-white text-white rounded-full py-2 px-4 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent focus:bg-lime-400 focus:bg-opacity-20"
                id="schedulingPrice"
                type="number"
                value={schedulingPrice}
                placeholder="Enter Scheduling Price"
                aria-label="Scheduling Price"
                onChange={(e) => setSchedulingPrice(e.target.value)}
              />
            </div>

            <div>
              <textarea
                required
                className="w-full bg-gray-100 bg-opacity-20 border border-white text-white rounded-xl py-2 px-4 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent focus:bg-lime-400 focus:bg-opacity-20 h-20 resize-none"
                id="description"
                value={description}
                placeholder="Enter Tutorial Description"
                aria-label="Tutorial Description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="w-full flex flex-col gap-3 md:flex-row md:align-center">
              <div className="w-full">
                <input
                  required
                  className="w-full bg-gray-100 bg-opacity-20 border border-white text-white rounded-full py-2 px-4 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent focus:bg-lime-400 focus:bg-opacity-20"
                  id="photo"
                  type="text"
                  value={tutorialPhoto}
                  placeholder="Enter Tutorial Photo URL"
                  aria-label="Tutorial Photo URL"
                  onChange={(e) => setTutorialPhoto(e.target.value)}
                />
              </div>

              {disabled ? (
                <div>
                  <div className="bg-white text-lime-700 rounded-full py-3 px-4 grid place-items-center w-full">
                    <div role="status" className="flex items-center">
                      <svg
                        aria-hidden="true"
                        className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-lime-400"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="text-lime-700 text-xs flex-1 w-max">
                        Adding Tutorial...
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    type="submit"
                    disabled={disabled}
                    className="w-full md:w-max bg-white text-lime-700 rounded-full py-2 px-6 hover:bg-gray-200"
                  >
                    Add Tutorial
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TutorialForm;
