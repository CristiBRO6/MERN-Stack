import PropTypes from 'prop-types';
import { Menu } from 'lucide-react';

import useResponsive from '../hooks/useResponsive';
import { Dropdown, DropdownBody, DropdownHead, DropdownItem, DropdownMenu, DropdownSeparator, DropdownToggle } from './ui/Dropdown';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';

import { DASHBOARD_PROFILE_ITEMS } from '../constants';

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
      </div>
      <Dropdown placement="bottom">
        <DropdownToggle>
          <Avatar className="cursor-pointer">
            <AvatarImage src="http://cristibro.epizy.com/phone_store/avatar/614dcb8130063b69cbe83aa018dfb0c6.png?v=1726162528" alt="CristiBRO" />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
        </DropdownToggle>
        <DropdownMenu className="p-1">
          <DropdownHead className="gap-1 px-2 pb-1 border-b">
            <span className="font-medium text-sm leading-none">CristiBRO</span>
            <span className="text-gray-800 text-xs leading-none text">cristibro@gmail.com</span>
          </DropdownHead>
          <DropdownBody className="gap-1 pt-1">
          {DASHBOARD_PROFILE_ITEMS.map((item) => 
            item.type === 'item' ? (
              <DropdownItem key={item.id} item={item} closeable />
            ) : item.type === 'separator' ? (
              <DropdownSeparator key={item.id} />
            ) : null
          )}
          </DropdownBody>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

Navbar.propTypes = {
  openDrawer: PropTypes.func.isRequired
};

export default Navbar;
