import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { createReservation, deleteReservation } from '../../redux/reservations/reserveTutorialSlice';

const TutorialDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [theTutorial, setTheTutorial] = useState(null);
  const [isReserved, setIsReserved] = useState(false);
  const { id } = useParams();
  const tutorials = useSelector((state) => state.tutorials.tutorials);
  
  useEffect(() => {
    console.log('Current tutorial ID:', id);
    const tutorial = tutorials.find((element) => element.id === parseInt(id, 10));
    if (tutorial) {
      setTheTutorial(tutorial);
      const userId = parseInt(localStorage.getItem('userId'), 10)
      if (tutorial.reserve_users.includes(userId)) {
        setIsReserved(true);
      }
    }    
    console.log('isReserved state', isReserved)
  }, [id, tutorials]);

  const handleReservation = () => {
      navigate(`/reserve/${id}`);
  };

  const handleCancelReservation = async () => {
    try {
      const reservationId = theTutorial.reservationId;

      console.log('Reservation canceled for tutorial ID:', id);
      setIsReserved(false);

      await dispatch(deleteReservation({ tutorialId: id, reservationId }));
    } catch (error) {
      console.error('Error canceling reservation:', error);
    }
  };

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
                    <td>$ {theTutorial.tutorial_price}</td>
                  </tr>
                  <tr className="bg-gray-300 flex items-center justify-around">
                    <td className="font-bold">Duration:</td>
                    <td>{theTutorial.scheduling_price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              {isReserved ? (
                <button
                  type="button"
                  className="w-full bg-danger text-white rounded-lg p-2 mt-3"
                  onClick={handleCancelReservation}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  type="button"
                  className="w-full bg-secondary text-primary rounded-lg p-2 mt-3"
                  onClick={handleReservation}
                >
                  Reserve
                </button>
              )}
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
