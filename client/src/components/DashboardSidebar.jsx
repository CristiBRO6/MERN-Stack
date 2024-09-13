import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Dropdown, DropdownBody, DropdownItem, DropdownMenu, DropdownSeparator, DropdownToggle } from './ui/Dropdown';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import SidebarItem from '../components/ui/SidebarItem';
import useResponsive from '../hooks/useResponsive';
import Button from './ui/Button';

import { PanelLeftClose, PanelLeftOpen, ShoppingBag, EllipsisVertical, SunMoon } from 'lucide-react';
import { SIDEBAR_ITEMS, DASHBOARD_PROFILE_ITEMS } from '../constants';

const Sidebar = ({ className }) => {
  const screenSizeIndex = useResponsive([768, 1024, 1280]);
  const [isCollapsed, setIsCollapsed] = useState(screenSizeIndex < 3);

  useEffect(() => {
    setIsCollapsed(screenSizeIndex < 3 || screenSizeIndex < 2);
  }, [screenSizeIndex]);

  const handleToggleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <>
      <div className={`flex flex-col justify-between h-screen ${isCollapsed ? "w-auto" : "w-[var(--sidebar-width)]"} bg-white z-[101] shadow-md ${className}`}>
        <div className="h-[--navbar-height] flex items-center justify-between gap-2 p-3 border-b">
          {!isCollapsed && <Link to="/" className="text-xl font-bold">React</Link>}
          <div className="flex items-center justify-center size-9 p-2 lg:hidden">
            <ShoppingBag className="size-4" />
          </div>
          <Button type="icon" color="transparent" icon={isCollapsed ? PanelLeftOpen : PanelLeftClose} onClick={handleToggleCollapse} className="hidden lg:flex" />
        </div>
        <div className="h-full flex flex-col gap-2 p-3">
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem key={item.id} isCollapsed={isCollapsed} item={item} />
          ))}
        </div>
        <div className="w-full flex items-center justify-between p-3 border-t">
          {!isCollapsed ? (
            <>
              <div className="w-full flex items-center gap-2">
                <Avatar className="rounded-md size-9">
                  <AvatarImage src="http://cristibro.epizy.com/phone_store/avatar/614dcb8130063b69cbe83aa018dfb0c6.png?v=1726162528" alt="CristiBRO" />
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-base leading-none">CristiBRO</span>
                  <span className="text-sm text-gray-800 leading-none">cristibro@gmail.com</span>
                </div>
              </div>
            </>
          ) : null}
          <Dropdown placement="top">
            <DropdownToggle>
              {isCollapsed ? (
                <>
                  <Avatar className="cursor-pointer rounded-md size-9">
                    <AvatarImage src="http://cristibro.epizy.com/phone_store/avatar/614dcb8130063b69cbe83aa018dfb0c6.png?v=1726162528" alt="CristiBRO" />
                    <AvatarFallback>CB</AvatarFallback>
                  </Avatar>
                </>
              ) : (
                <div className="p-1 cursor-pointer">
                  <EllipsisVertical className="size-4" />
                </div>
              )}
            </DropdownToggle>
            <DropdownMenu className="p-1">
              <DropdownBody className="gap-1 pt-1">
                {DASHBOARD_PROFILE_ITEMS.map((item) => 
                  item.type === "item" ? (
                    <DropdownItem key={item.id} item={item} closeable />
                  ) : item.type === "separator" ? (
                    <DropdownSeparator key={item.id} />
                  ) : null
                )}
                <DropdownSeparator />
                <Dropdown placement="left" className="w-full">
                  <DropdownToggle>
                    <DropdownItem item={{ name: "Theme", icon: SunMoon }} className="w-full" />
                  </DropdownToggle>
                  <DropdownMenu className="p-1">
                    <DropdownBody className="gap-1 pt-1">
                      <DropdownItem item={{ name: "Light" }} closeable />
                      <DropdownItem item={{ name: "Dark" }} closeable />
                      <DropdownSeparator />
                      <DropdownItem item={{ name: "System" }} closeable />
                    </DropdownBody>
                  </DropdownMenu>
                </Dropdown>
              </DropdownBody>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
