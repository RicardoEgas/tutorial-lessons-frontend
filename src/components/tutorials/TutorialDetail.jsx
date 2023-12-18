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
      <div className="flex flex-col items-center justify-center h-full">
        {theTutorial ? (
          <div className="flex w-full justify-between items-center">
            <div className="w-3/5">
              <img
                src={theTutorial.photo}
                alt={theTutorial.title}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col w-2/5 px-6">
              <div>
                <p className="text-lg font-bold p-1">{theTutorial.title}</p>
                <p className=" text-xs p-1">{theTutorial.description}</p>
                <p className="text-md bg-secondary p-1">
                  Tutorial Price: {theTutorial.tutorial_price} $
                </p>
                <p className="text-md p-1">
                 Scheduling Price: {theTutorial.scheduling_price} $
                </p>
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
  