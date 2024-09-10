import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

import useResponsive from '../hooks/useResponsive';

const Navbar = ({ openDrawer }) => {
  const screenSizeIndex = useResponsive([768, 1024, 1280]);

  return (
    <div className="flex items-center justify-between z-[100] w-full min-h-[--navbar-height] h-[var(--navbar-height)] max-h-[--navbar-height] bg-white px-3 shadow-sm">
      <div className="flex items-center gap-2">
        {screenSizeIndex < 1 && (
          <>
            <div className="cursor-pointer p-2" onClick={openDrawer}>
              <Menu />
            </div>
          </>
        )}
        <Link to="/" className="text-xl font-bold">React</Link>
      </div>
      {screenSizeIndex >= 1 && (
        <>
          <div className="flex items-center gap-2">
            <NavLink to="/" className="text-sm font-medium hover:text-gray-800 hover:bg-gray-100 [&.active]:text-gray-800 [&.active]:bg-gray-100 rounded-md px-2 py-1 transition-colors duration-300">Home</NavLink>
            <NavLink to="/profile" className="text-sm font-medium hover:text-gray-800 hover:bg-gray-100 [&.active]:text-gray-800 [&.active]:bg-gray-100 rounded-md px-2 py-1 transition-colors duration-300">Profile</NavLink>
            <NavLink to="/dashboard/" className="text-sm font-medium hover:text-gray-800 hover:bg-gray-100 [&.active]:text-gray-800 [&.active]:bg-gray-100 rounded-md px-2 py-1 transition-colors duration-300">Dashboard</NavLink>
            <NavLink to="/login" className="text-sm font-medium hover:text-gray-800 hover:bg-gray-100 [&.active]:text-gray-800 [&.active]:bg-gray-100 rounded-md px-2 py-1 transition-colors duration-300">Login</NavLink>
          </div>
        </>
      )} 
    </div>
  );
};

Navbar.propTypes = {
  openDrawer: PropTypes.func.isRequired
};

export default Navbar;
