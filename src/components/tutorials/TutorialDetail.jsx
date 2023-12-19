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
          <div className="flex w-full justify-between items-center tutorial-card">
            <div className="tutorial-card_image">
              <img
                src={theTutorial.photo}
                alt={theTutorial.title}
                className="w-full h-auto"
              />
            </div>
            <div className="tutorial-card_content">
              <div>
                <h2 className="text-6xl font-bold p-1">{theTutorial.title}</h2>
                <p className=" text-2xl p-1">{theTutorial.description}</p>
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
  