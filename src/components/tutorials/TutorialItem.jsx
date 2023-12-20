import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';

const TutorialItem = ({ data }) => {
  return (
    <Link
      to={`/tutorial/${data.id}`}
      className="rounded p-4 text-center w-full inline-block relative border border-transparent hover:shadow-lg hover:border-gray-200 transition-border&shadow duration-200 ease-in-out"
    >
      <div className="mb-4 grid place-items-center rounded-full w-52 h-52 mx-auto bg-gray-100">
        <img
          src={data.photo || 'https://via.placeholder.com/150'}
          alt={data.name}
          className="object-cover rounded"
        />
      </div>

      <h2 className="font-semi-bold px-4 pt-2 pb-3 border-b border-b-2 border-dashed border-gray-300 text-gray-700 inline-block text-gray-700 text-lg">
        {data.name}
      </h2>

      <div className="pt-2">
        <p className="text-center text-xs px-3 max-w-[250px] mx-auto">
          {data.description.slice(0, 60)}...
        </p>

        <div className="flex justify-center mt-2 gap-3 text-lg">
          <CiFacebook />
          <CiTwitter />
          <CiInstagram />
        </div>
      </div>
    </Link>
  );
};

TutorialItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TutorialItem;
