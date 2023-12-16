import { useDispatch, useSelector } from 'react-redux';
import {
  setReservationDate,
  setReservationCity,
  setReservationError,
  resetReservation,
} from './redux/reservationStore/reservationSlice';
import './reservation.css';

const Reservation = () => {
  const dispatch = useDispatch();
  const { date, city, error } = useSelector((state) => state.reservation);

  const handleDateChange = (e) => {
    dispatch(setReservationDate(e.target.value));
  };

  const handleCityChange = (e) => {
    dispatch(setReservationCity(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !city) {
      dispatch(setReservationError('Please fill out all fields.'));
      return;
    }

    dispatch(setReservationError(null));

    dispatch(resetReservation());
  };

  return (
    <section className='reservation flex justify-center items-center'>
      <div className="container mx-auto mt-8 p-4 bg-none border-none text-white max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">RESERVE AN ONLINE COURSE WITH US</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-[#97bf0f] py-3 px-6 text-base font-medium text-white outline-none"
            />
          </div>

          <div className="relative inline-block w-full mb-4">
            <label
              htmlFor="city"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Select City
            </label>
            <select
              value={city}
              onChange={handleCityChange}
              className="block appearance-none w-full bg-[#97bf0f] border border-gray-300 px-4 py-2 pr-8 rounded leading-tight outline-none py-3 px-6 text-base font-medium"
            >
              <option value="" disabled>Select an option</option>
              <option value="option1">London</option>
              <option value="option2">New York</option>
              <option value="option3">Paris</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 top-10 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 12l-8-8 1.5-1.5L10 9l6.5-6.5L18 4z" />
              </svg>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
