import PropTypes from 'prop-types';
import { Menu, House, User, Settings, LogOut } from 'lucide-react';

import useResponsive from '../hooks/useResponsive';
import Dropdown from './ui/Dropdown';
import DropdownItem from './ui/DropdownItem';

const dropdownItems = [
  { id: 1, type: 'item', path: "/", name: "Home", icon: House },
  { id: 2, type: 'item', path: "/profile", name: "Profile", icon: User },
  { id: 3, type: 'item', path: "/dashboard/settings", name: "Settigns", icon: Settings },
  { id: 4, type: 'separator'},
  { id: 5, type: 'item', path: "/logout", name: "Logout", icon: LogOut },
];

const dropdownContent = (
  <div className="flex flex-col">
    <div className="flex flex-col gap-1 border-b px-4 py-2">
      <span className="font-medium text-sm leading-none">CristiBRO</span>
      <span className="text-gray-800 text-xs leading-none text">cristibro@gmail.com</span>
    </div>
    <div className="flex flex-col py-1">
      {dropdownItems.map((item) => <DropdownItem key={item.id} item={item} /> )}
    </div>
  </div>
);

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
      <Dropdown content={dropdownContent} placement="bottom">
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 p-2 rounded-full overflow-hidden">
            <User className="size-6" />
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

Navbar.propTypes = {
  openDrawer: PropTypes.func.isRequired
};

export default Navbar;
