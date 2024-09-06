import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { PanelLeftClose, PanelLeftOpen, ShoppingBag } from 'lucide-react';

import SidebarItem from '../components/ui/SidebarItem';
import IconButton from '../components/ui/IconButton';
import useResponsive from '../hooks/useResponsive';

import { SIDEBAR_ITEMS } from '../constants';

const Sidebar = ({ className }) => {
  const screenSizeIndex = useResponsive([768, 1024, 1280]);
  const [isCollapsed, setIsCollapsed] = useState(screenSizeIndex < 3);

  useEffect(() => {
    setIsCollapsed(screenSizeIndex < 3 || screenSizeIndex < 2);
  }, [screenSizeIndex]);

  const handleToggleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <>
      <div className={`flex flex-col h-screen ${isCollapsed ? "" : "w-[var(--sidebar-width)]"} bg-white z-[101] p-2 shadow-md ${className}`}>
        <div className="flex items-center justify-between gap-2 pb-2 border-b">
          {!isCollapsed && <Link to="/" className="text-xl font-bold">React</Link>}
          <div className="p-2 lg:hidden">
            <ShoppingBag className="size-5" />
          </div>
          <IconButton className="hidden lg:flex" icon={isCollapsed ? PanelLeftOpen : PanelLeftClose} onClick={handleToggleCollapse} />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem key={item.id} isCollapsed={isCollapsed} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
