import PropTypes from 'prop-types';
import { Menu, User } from 'lucide-react';
import useResponsive from '../hooks/useResponsive';

const Navbar = ({ openDrawer }) => {
  const screenSizeIndex = useResponsive([768, 1024, 1280]);

  return (
    <div className="flex items-center justify-between w-full min-h-[--navbar-height] h-[var(--navbar-height)] max-h-[--navbar-height] bg-white shadow-md px-4">
      <div className="flex items-center gap-2">
        {screenSizeIndex < 1 && (
          <>
            <div className="cursor-pointer p-2" onClick={openDrawer}>
              <Menu />
            </div>
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-gray-100 p-2 rounded-full overflow-hidden">
          <User className="size-6" />
        </div>
        <span className="text-sm font-semibold">Username</span>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  openDrawer: PropTypes.func.isRequired
};

export default Navbar;
