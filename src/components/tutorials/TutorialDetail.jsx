import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const TutorialDetail = () => {
    const [theTutorial, SettheTutorial] = useState(null);
    const { id } = useParams();
    // console.log('Tutorial ID:', id);
    const tutorials = useSelector((state) => state.tutorials.tutorials);
  
    useEffect(() => {
        tutorials.forEach((element) => {
          // console.log('ID from URL:', id);
          // console.log('ID from Tutorial:', element.id);

        if (element.id === parseInt(id)) {
          SettheTutorial(element);
        }
      });
    }, [id, tutorials]);
  
    return (
      <div className="flex flex-col items-center justify-center h-full tutorials tutorial_1">
        {theTutorial ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-56 mx-auto w-full max-w-screen-lg min-h-max lg: mr-24 tutorial-card">
            <div className="text-center md:text-left tutorial-card_image">
              <img
                src={theTutorial.photo}
                alt={theTutorial.title}
                className="rounded-full w-full h-full object-cover mx-auto md:ml-0 md:mr-8"
              />
            </div>
            <div className="flex flex-col justify-between tutorial-card_content">
              <div className='text-center md:text-left'>
                <h2 className="text-6xl font-bold mb-12">{theTutorial.title}</h2>
                <table className="w-full table-fixed">
              <tbody>
                <tr className="bg-gray-100 flex items-center justify-around">
                  <td className="font-bold">Tutorial Price:</td>
                  <td>{theTutorial.tutorial_price}</td>
                </tr>
                <tr className="bg-gray-300 flex items-center justify-around">
                  <td className="font-bold">Scheduling Price:</td>
                  <td>{theTutorial.scheduling_price}</td>
                </tr>
              </tbody>
                </table>
              </div>
              <div className="flex flex-col w-full justify-center items-center">
                <Link to={`/reserve/${theTutorial.id}`}>
                  <button
                    type="button"
                    className="w-full bg-secondary text-primary rounded-lg p-2 mt-3"
                  >
                    Reserve
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">Tutorial not found</div>
        )}
      </div>
    );
  };
  
  export default TutorialDetail;
  