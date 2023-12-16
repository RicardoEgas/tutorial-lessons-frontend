import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTutorials } from '../../redux/tutorialSlice';
import TutorialItem from './TutorialItem';

const TutorialItems = () => {
  const dispatch = useDispatch();
  const tutorials = useSelector((state) => state.tutorials.tutorials);
  console.log('Tutorials from Redux:', tutorials);
  
  useEffect(() => {
    dispatch(getTutorials());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center gap-4 text-gray-500 text-sm py-8 h-full">
      <header className="text-center">
        <h1 className="text-3xl font-semi-bold mb-4 text-gray-800">
          Latest Tutorials
        </h1>

        <p className="font-semi-bold">
          Please select a tutorial to see more details about it and to reserve
          it.
        </p>
        <span className="w-32 border-b-2 border-dashed border-gray-300 inline-block mt-4"></span>
      </header>
{/* 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tutorials && tutorials.map((tutorial) => (
          <TutorialItem key={tutorial.id} data={tutorial} />
        ))}
      </div>
    </div>
  );
}; */}
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tutorials && tutorials.map((tutorial) => {
          console.log(tutorial);
          return <TutorialItem key={tutorial.id} data={tutorial} />
        })}
      </div>
    </div>
  );
};


export default TutorialItems;
