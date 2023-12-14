import React from 'react';
import './reservation.css'

const Reservation = () => {
  return (
    <section className='reservation flex justify-center items-center'>
      <div className="container mx-auto mt-8 p-4 bg-none border-none text-white max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">RESERVE AN ONLINE COURSE WITH US</h1>
        <p className="mb-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque delectus praesentium aspernatur, quas maiores facilis, perferendis, dignissimos pariatur nesciunt iste dolorem quasi ea totam minus. Est libero dignissimos corporis fuga!
        </p>
        <h2 className="text-xl font-bold mb-2 text-center">Reservation Form</h2>
        <form>
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
                className="w-full rounded-md border border-[#e0e0e0] bg-[#97bf0f] py-3 px-6 text-base font-medium text-white outline-none"
              />
            </div>
          </div>
          <div className="relative inline-block w-full mb-4">
            <label
              htmlFor="city"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Select City
            </label>
            <select className="block appearance-none w-full bg-[#97bf0f] border border-gray-300 px-4 py-2 pr-8 rounded leading-tight outline-none py-3 px-6 text-base font-medium">
              <option value="" disabled selected>Select an option</option>
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
}

export default Reservation;
