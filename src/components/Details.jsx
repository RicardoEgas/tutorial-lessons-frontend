import React from "react";
import { useParams, Link } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const courses = [
    {
      id: 1,
      name: "Course 1",
      cost: "$100",
      duration: "6 weeks",
      picture:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwY291cnNlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Course 2",
      cost: "$150",
      duration: "8 weeks",
      picture:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwY291cnNlfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Course 3",
      cost: "$120",
      duration: "7 weeks",
      picture:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwY291cnNlfGVufDB8fDB8fHww",
    },
  ];

  const selectedCourse = courses.find((course) => course.id === Number(id));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-56 mx-auto w-full max-w-screen-lg min-h-max lg: mr-24">
      <div className="text-center md:text-left">
        <img
          src={selectedCourse.picture}
          alt={selectedCourse.name}
          className="rounded-full w-h-3/4 h-h-3/4 object-cover mx-auto md:ml-0 md:mr-8"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-12">{selectedCourse?.name}</h1>
          {selectedCourse ? (
            <table className="w-full table-fixed">
              <tbody>
                <tr className="bg-gray-100 flex items-center justify-around">
                  <td className="font-bold">Cost</td>
                  <td>{selectedCourse.cost}</td>
                </tr>
                <tr className="bg-gray-300 flex items-center justify-around">
                  <td className="font-bold">Duration</td>
                  <td>{selectedCourse.duration}</td>
                </tr>
                {/* Add other details as needed */}
              </tbody>
            </table>
          ) : (
            <p>Course not found</p>
          )}
        </div>
        <div className="mx-auto md:mx-0">
          <Link to="/reservations">
            <button className="btn btn-primary bg-[#97bf0f] p-2 text-white mt-8">
              Go to Reservations
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
