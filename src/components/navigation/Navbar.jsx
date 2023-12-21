import { Link } from 'react-router-dom';

import MenuButton from './MenuButton';
import SearchIcon from './SearchIcon';
import DesktopLinks from './DesktopLinks';
import MobileMenu from './MobileMenu';
import MenuOpenIcon from './MenuOpenIcon';
// import Footer from '/pages/Footer';
import Footer from '../../pages/Footer';

const handleMenuClick = () => {
  const menu = document.querySelector('#menu');
  menu.classList.toggle('hidden');
};

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 relative lg:h-screen lg:flex-col lg:justify-space-between lg:items-start lg:pr-0 flex-0.5 z-20">
      <MenuButton onClick={handleMenuClick} icon={<MenuOpenIcon />} />

      <span className="consolehub hidden lg:inline-block py-2 px-4 font-extrabold text-4xl">
        <Link to="/">TutorialHub</Link>
      </span>

      <MobileMenu />

      <DesktopLinks />

      <SearchIcon />

      <footer className="hidden lg:inline-block">
        <Footer />
      </footer>
    </nav>
  );
};

export default Navbar;
