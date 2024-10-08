import PropTypes from 'prop-types';

import useResponsive from '../hooks/useResponsive';

import { Menu } from 'lucide-react';

const Navbar = ({ openDrawer }) => {
  const screenSizeIndex = useResponsive([768, 1024, 1280]);

  return (
    <div className="flex items-center justify-between z-[100] w-full min-h-[--navbar-height] h-[var(--navbar-height)] max-h-[--navbar-height] bg-white px-3 shadow-sm">
      <div className="flex items-center gap-2">
        {screenSizeIndex < 1 ? (
          <div className="md:hidden cursor-pointer p-2" onClick={openDrawer}>
            <Menu />
          </div>
        ) : null}
        <div className="w-full flex items-center justify-between">
          <span className="text-lg font-bold">User</span>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  openDrawer: PropTypes.func.isRequired
};

export default Navbar;
