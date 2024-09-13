import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import useResponsive from '../hooks/useResponsive';
import { Dropdown, DropdownBody, DropdownHead, DropdownItem, DropdownMenu, DropdownSeparator, DropdownToggle } from './ui/Dropdown';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';

import { Menu } from 'lucide-react';

import { PROFILE_ITEMS } from '../constants';

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
        <Link to="/" className="text-xl font-bold">React</Link>
      </div>
      <div className="flex items-center gap-2">
        {screenSizeIndex >= 1 && (
          <>
            <NavLink to="/" className="text-sm font-medium hover:text-gray-800 hover:bg-gray-100 [&.active]:text-gray-800 [&.active]:bg-gray-100 rounded-md px-2 py-1 transition-colors duration-300">Home</NavLink>
            <NavLink to="/profile" className="text-sm font-medium hover:text-gray-800 hover:bg-gray-100 [&.active]:text-gray-800 [&.active]:bg-gray-100 rounded-md px-2 py-1 transition-colors duration-300">Profile</NavLink>
            <NavLink to="/login" className="text-sm font-medium hover:text-gray-800 hover:bg-gray-100 [&.active]:text-gray-800 [&.active]:bg-gray-100 rounded-md px-2 py-1 transition-colors duration-300">Login</NavLink>
          </>
        )} 
        <Dropdown placement="bottom">
          <DropdownToggle>
            <Avatar className="cursor-pointer">
              <AvatarImage src="http://cristibro.epizy.com/phone_store/avatar/614dcb8130063b69cbe83aa018dfb0c6.png?v=1726162528" alt="CristiBRO" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
          </DropdownToggle>
          <DropdownMenu className="p-1">
            <DropdownHead className="px-2 pb-1 border-b">
              <span className="py-1 font-medium text-sm leading-none">CristiBRO</span>
            </DropdownHead>
            <DropdownBody className="gap-1 pt-1">
              {PROFILE_ITEMS.map((item) => 
                item.type === "item" ? (
                  <DropdownItem key={item.id} item={item} className={item.danger ? "text-error" : ""} closeable />
                ) : item.type === "separator" ? (
                  <DropdownSeparator key={item.id} />
                ) : null
              )}
            </DropdownBody>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  openDrawer: PropTypes.func.isRequired
};

export default Navbar;
