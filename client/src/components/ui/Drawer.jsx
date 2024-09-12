import PropTypes from 'prop-types';
import { X } from 'lucide-react';

import Button from './Button';

const Drawer = ({ children, title = "Menu", drawerOpen, closeDrawer }) => {
  return (
    <div className="absolute">
      <div className={`fixed top-0 ${drawerOpen ? "-translate-x-0" : "-translate-x-[var(--sidebar-width)]"} min-w-[var(--sidebar-width)] w-[var(--sidebar-width)] max-w-[var(--sidebar-width)] h-screen bg-white z-[1000] transition-transform duration-300`}>
        <div className="flex flex-col justify-between h-full p-3">
          <div className="flex items-center justify-between gap-2 pb-3 border-b">
            <span className="text-xl font-bold">{title}</span>
            <Button type="icon" color="transparent" icon={X} onClick={closeDrawer} />
          </div>
          {children}
        </div>
      </div>

      <div 
        className={`fixed top-0 left-0 w-screen h-screen bg-black/50 z-[999] transition-[opacity, visibility] duration-300 ${drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={closeDrawer} 
      />
    </div>
  )
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  drawerOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default Drawer;