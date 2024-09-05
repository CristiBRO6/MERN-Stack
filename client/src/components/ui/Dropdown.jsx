import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ children, content, placement = 'bottom', className = '' }) => {
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
        {content}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  placement: PropTypes.string,
  className: PropTypes.string,
};

export default Dropdown;
