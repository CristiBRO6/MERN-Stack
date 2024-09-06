import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Separator from './Separator';

const Dropdown = ({ children, placement = 'bottom', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animatedClasses, setAnimatedClasses] = useState('invisible opacity-0 scale-95');
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  let menuClasses = '';

  switch (placement) {
    case 'top':
      menuClasses = 'bottom-full left-0 mb-2';
      break;
    case 'bottom':
      menuClasses = 'top-full left-0 mt-2';
      break;
    case 'left':
      menuClasses = 'right-full top-0 mr-2';
      break;
    case 'right':
      menuClasses = 'left-full top-0 ml-2';
      break;
    default:
      menuClasses = 'top-full left-0 mt-2';
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
      menuRef.current.style.top = '';
      menuRef.current.style.bottom = '';
    }
  };

  const adjustDropdownPosition = () => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
  
      if (rect.left < 0) {
        menuRef.current.style.left = '0';
        menuRef.current.style.right = 'auto';
      } else if (rect.right > viewportWidth) {
        menuRef.current.style.right = '0';
        menuRef.current.style.left = 'auto';
      }
  
      if (rect.top < 0) {
        menuRef.current.style.top = '0';
        menuRef.current.style.bottom = 'auto';
      } else if (rect.bottom > viewportHeight) {
        menuRef.current.style.bottom = '0';
        menuRef.current.style.top = 'auto';
      }
    }
  };
  
  useEffect(() => {
    if (isOpen) {
      resetDropdownPosition();
      adjustDropdownPosition();

      setAnimatedClasses("visible opacity-100 scale-100");
    } else {
      setAnimatedClasses('invisible opacity-0 scale-95');
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
      <div onClick={toggleDropdown} className="w-fit">
        {children[0]}
      </div>

      <div ref={menuRef} className={`absolute z-[50] bg-white border border-gray-200 rounded-md shadow-lg transition-all ${isOpen ? 'block ' : 'hidden'} ${animatedClasses} ${menuClasses}`}>
        {children[1]}
      </div>
    </div>
  );
};

Dropdown.Toggle = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
};

Dropdown.Menu = ({ children, className = '' }) => {
  return (
    <div className={`min-w-[160px] w-auto flex flex-col ${className}`}>
      {children}
    </div>
  );
};

Dropdown.Head = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col gap-1 border-b px-4 py-2 ${className}`}>
      {children}
    </div>
  );
};

Dropdown.Body = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col py-1 ${className}`}>
      {children}
    </div>
  );
};

Dropdown.Group = ({ children, title, className = '' }) => {
  return (
    <div className="flex flex-col py-1 gap-1">
      <span className="font-medium text-base text-gray-700">{title}</span>
      <div className={`flex flex-col ${className}`}>
        {children}
      </div>
    </div>
  );
};

Dropdown.Item = ({ item, onClick = () => {}, className = '' }) => {
  return (
    <>
      {item.path ? (
        <Link to={item.path} onClick={onClick}>
          <div className={`flex items-center gap-2 px-4 py-2 text-gray-800 text-sm font-semibold transition-colors duration-300 hover:bg-gray-200 ${className}`}>
            {item.icon && <item.icon className="size-4" />}
            {item.name}
          </div>
        </Link>
      ) : (
        <div className={`flex items-center gap-2 px-4 py-2 text-gray-800 text-sm font-semibold transition-colors duration-300 hover:bg-gray-200 ${className}`}>
          {item.icon && <item.icon className="size-4" />}
          {item.name}
        </div>
      )}
    </>
  );
};

Dropdown.Separator = () => {
  return (<Separator />)
};

Dropdown.displayName = 'Dropdown';
Dropdown.Toggle.displayName = 'Dropdown.Toggle';
Dropdown.Menu.displayName = 'Dropdown.Menu';
Dropdown.Head.displayName = 'Dropdown.Head';
Dropdown.Body.displayName = 'Dropdown.Body';
Dropdown.Group.displayName = 'Dropdown.Group';
Dropdown.Item.displayName = 'Dropdown.Item';
Dropdown.Separator.displayName = 'Dropdown.Separator';

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  placement: PropTypes.string,
  className: PropTypes.string,
};

Dropdown.Toggle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Dropdown.Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Dropdown.Head.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Dropdown.Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Dropdown.Group.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

Dropdown.Item.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.elementType,
  }).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Dropdown;
