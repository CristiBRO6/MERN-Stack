import PropTypes from 'prop-types';
import { Menu, House, User, Settings, LogOut } from 'lucide-react';

import useResponsive from '../hooks/useResponsive';
import Dropdown from './ui/Dropdown';

const dropdownItems = [
  { id: 1, type: 'item', path: "/", name: "Home", icon: House },
  { id: 2, type: 'item', path: "/profile", name: "Profile", icon: User },
  { id: 3, type: 'item', path: "/dashboard/settings", name: "Settigns", icon: Settings },
  { id: 4, type: 'separator' },
  { id: 5, type: 'item', path: "/logout", name: "Logout", icon: LogOut },
];

const Navbar = ({ openDrawer }) => {
  const screenSizeIndex = useResponsive([768, 1024, 1280]);

  return (
    <div className="flex items-center justify-between [100] w-full min-h-[--navbar-height] h-[var(--navbar-height)] max-h-[--navbar-height] bg-white shadow-md px-4">
      <div className="flex items-center gap-2">
        {screenSizeIndex < 1 && (
          <>
            <div className="cursor-pointer p-2" onClick={openDrawer}>
              <Menu />
            </div>
          </>
        )}
      </div>
      <Dropdown placement="bottom">
        <Dropdown.Toggle>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-gray-100 p-2 rounded-full overflow-hidden">
              <User className="size-4" />
            </div>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-1">
          <Dropdown.Head className="gap-1 px-2 pb-1 border-b">
            <span className="font-medium text-sm leading-none">CristiBRO</span>
            <span className="text-gray-800 text-xs leading-none text">cristibro@gmail.com</span>
          </Dropdown.Head>
          <Dropdown.Body className="gap-1 pt-1">
          {dropdownItems.map((item) => 
            item.type === 'item' ? (
              <Dropdown.Item key={item.id} item={item} />
            ) : item.type === 'separator' ? (
              <Dropdown.Separator key={item.id} />
            ) : null
          )}
          </Dropdown.Body>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

Navbar.propTypes = {
  openDrawer: PropTypes.func.isRequired
};

export default Navbar;
