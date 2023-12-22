import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './reservation.css';

const ReservationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home', { state: { error: 'Please, select a tutorial first.' } });
  };

  return (
    <section className='reservation flex justify-center items-center'>
      <div className="container mx-auto mt-8 p-4 bg-none border-none text-white max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">RESERVE AN ONLINE COURSE WITH US</h1>
        <p className="mb-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque delectus praesentium aspernatur, quas maiores facilis, perferendis, dignissimos pariatur nesciunt iste dolorem quasi ea totam minus. Est libero dignissimos corporis fuga!
        </p>
        <h2 className="text-xl font-bold mb-2 text-center">Reservation Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-[#97bf0f] py-3 px-6 text-base font-medium text-white outline-none"
              />
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

export default ReservationForm;
