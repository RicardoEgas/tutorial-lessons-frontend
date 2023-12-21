// Navbar.jsx
import { useState } from 'react';
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import TutorialItems  from './tutorials/TutorialItems'
import { signout } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    dispatch(signout());
  }
  
  if (!isAuthenticated) {
    return null
  }

  
  return (
    <nav
      className={`text-[#4c4c4c] border-r border-gray-400 fixed h-full flex flex-col transition-transform duration-300 transform translate-x-0 lg:translate-x-0 lg:w-80 lg:items-center lg:bg-white ${
        isOpen ? 'bg-white' : 'bg-transparent'
      }`}
      style={{ zIndex: 1000 }}
    >
      {/* Hamburger button for smaller screens */}
      <div className="lg:hidden cursor-pointer p-4" onClick={toggleMenu}>
        {isOpen ? <FaArrowLeft /> : <FaBars />}
      </div>
      <ul className={`lg:flex lg:flex-col lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
  <li className='hidden lg:block'>
    <img src='logo-nw-nw.png' alt='Logo' className='py-4' style={{ width: '100px', height: '50px', margin: '20px' }} />
  </li>
  {console.log('Image Path:', 'new-logo.png')} 

  
        <li className="p-4 cursor-pointer">
          <NavLink to="/tutorials" className='block px-4 text-[18px] py-4 font-bold hover:bg-[#97bf0f] hover:text-white'>
            Tutorial List
          </NavLink>
        </li>
        <li className="p-4 cursor-pointer">
          <NavLink to="/home" className='block px-4 text-[18px] py-4 font-bold hover:bg-[#97bf0f] hover:text-white'>
            All Tutorials
          </NavLink>
        </li>
        <li className="p-4 cursor-pointer">
          <NavLink to="/reservationform" className='block px-4 text-[18px] py-4 font-bold hover:bg-[#97bf0f] hover:text-white'>
            Reserve
          </NavLink>
        </li>
        <li className="p-4 cursor-pointer">
          <NavLink to="/myreservations" className='block px-4 text-[18px] py-4 font-bold hover:bg-[#97bf0f] hover:text-white'>
            My Reservations
          </NavLink>
        </li>
        <li className="p-4 cursor-pointer">
          <NavLink to="/classes" className='block px-4 text-[18px] py-4 font-bold hover:bg-[#97bf0f] hover:text-white'>
            Add Tutorial
          </NavLink>
        </li>
        <li className="p-4 cursor-pointer">
          <NavLink to="/delete" className='block px-4 text-[18px] py-4 font-bold hover:bg-[#97bf0f] hover:text-white'>
            Delete Tutorial
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={() => handleSignOut()} className='block px-4 text-[18px] py-4 mt-28 ml-auto font-bold hover:bg-[#97bf0f] hover:text-white'>
            Logout
          </NavLink>
        </li>

      </ul>

      <div className={`lg:block mt-40 ${isOpen ? 'nav-footer' : 'hidden'}`}>
        <ul className="social-links-container ms-5 flex">
          <li>
            <i className="fab fa-facebook-f me-4 text-sm text-gray-700"></i>
          </li>
          <li>
            <i className="fab fa-google-plus-g me-4 text-sm text-gray-700"></i>
          </li>
          <li>
            <i className="fab fa-twitter me-4 text-sm text-gray-700"></i>
          </li>
          <li>
            <i className="fab fa-pinterest-p me-4 text-sm text-gray-700"></i>
          </li>
          <li>
            <i className="fab fa-vimeo-v me-4 text-sm text-gray-700"></i>
          </li>
        </ul>
        <small className="my-2 ms-5 block text-[10px] font-bold text-gray-500">
          @2015 PIAGGIO $ C.S P.A. PIVA
        </small>
      </div>
    </nav>
  );
};

export default Navbar;
