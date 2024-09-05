import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Separator from './Separator';

const Dropdown = ({ children, menu, placement = 'bottom', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  let menuClasses = '';

  switch (placement) {
    case 'top':
      menuClasses = 'bottom-full mb-2';
      break;
    case 'bottom':
      menuClasses = 'top-full mt-2';
      break;
    case 'left':
      menuClasses = 'right-full mr-2';
      break;
    case 'right':
      menuClasses = 'left-full ml-2';
      break;
    default:
      menuClasses = 'top-full mt-2';
  }

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const resetDropdownPosition = () => {
    if (menuRef.current) {
      menuRef.current.style.left = '';
      menuRef.current.style.right = '';
    }
  };

  const adjustDropdownPosition = () => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      if (rect.left < 0) {
        menuRef.current.style.left = '0';
        menuRef.current.style.right = 'auto';
      } else if (rect.right > viewportWidth) {
        menuRef.current.style.right = '0';
        menuRef.current.style.left = 'auto';
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      resetDropdownPosition();
      adjustDropdownPosition();
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {children}
      </div>

      <div
        ref={menuRef}
        className={`absolute z-10 min-w-[160px] w-auto bg-white border border-gray-200 rounded-md shadow-lg transition-all ${isOpen ? 'visible opacity-100 scale-100' : 'invisible opacity-0 scale-95'} ${menuClasses}`}
      >
        {menu}
      </div>
    </div>
  );
};

Dropdown.Content = ({ children, className = '' }) => {
  return (
    <>
      <div className={`flex flex-col ${className}`}>
        {children}
      </div>
    </>
  );
};

Dropdown.Header = ({ children, className = '' }) => {
  return (
    <>
      <div className={`flex flex-col gap-1 border-b px-4 py-2 ${className}`}>
        {children}
      </div>
    </>
  );
};

Dropdown.Body = ({ children, className = '' }) => {
  return (
    <>
      <div className={`flex flex-col py-1 ${className}`}>
        {children}
      </div>
    </>
  );
};

Dropdown.Item = ({ item, onClick = () => {}, className = '' }) => {
  return (
    <>
      {item.type == 'item' ? (
        <Link to={item.path} onClick={onClick()} className={`${className}`}>
          <div className="flex items-center gap-2 px-4 py-2 text-gray-800 text-sm font-semibold transition-colors duration-300 hover:bg-gray-200">
            <item.icon className="size-4" />
            {item.name}
          </div>
        </Link>
      ) : (
        <Separator />
      )}
    </>
  );
};

Dropdown.displayName = 'Dropdown';
Dropdown.Content.displayName = 'Dropdown.Content';
Dropdown.Header.displayName = 'Dropdown.Header';
Dropdown.Body.displayName = 'Dropdown.Body';
Dropdown.Item.displayName = 'Dropdown.Item';

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.node.isRequired,
  placement: PropTypes.string,
  className: PropTypes.string,
};

Dropdown.Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Dropdown.Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Dropdown.Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Dropdown.Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    path: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.elementType,
  }).isRequired,
  closable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Dropdown;
