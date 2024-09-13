import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';

export const DropdownContext = createContext(false);

export const Dropdown = ({ children, placement = "bottom", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animatedClasses, setAnimatedClasses] = useState("invisible opacity-0 scale-95");
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  let menuClasses = "";

  switch (placement) {
    case "top":
      menuClasses = "bottom-full left-0 mb-2";
      break;
    case "bottom":
      menuClasses = "top-full left-0 mt-2";
      break;
    case "left":
      menuClasses = "right-full top-0 mr-2";
      break;
    case "right":
      menuClasses = "left-full top-0 ml-2";
      break;
    default:
      menuClasses = "top-full left-0 mt-2";
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
      menuRef.current.style.left = "";
      menuRef.current.style.right = "";
      menuRef.current.style.top = "";
      menuRef.current.style.bottom = "";
    }
  };

  const adjustDropdownPosition = (placement) => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const toggleWidth = toggleRef.current.getBoundingClientRect().width;
      const toggleHeight = toggleRef.current.getBoundingClientRect().height;

      switch (placement) {
        case "top":
        case "bottom":
          if (rect.left < 0) {
            menuRef.current.style.left = "0";
            menuRef.current.style.right = "auto";
          } else if (rect.right > viewportWidth) {
            menuRef.current.style.right = "0";
            menuRef.current.style.left = "auto";
          }

          if (rect.top < 0) {
            menuRef.current.style.top = `${toggleHeight}px`;
            menuRef.current.style.bottom = "auto";
            menuRef.current.style.marginTop = "8px";
          } else if (rect.bottom > viewportHeight) {
            menuRef.current.style.bottom = `${toggleHeight}px`;
            menuRef.current.style.top = "auto";
            menuRef.current.style.marginBottom = "8px";
          }
          break;
        case "left":
        case "right":
          if (rect.left < 0) {
            menuRef.current.style.left = `${toggleWidth}px`;
            menuRef.current.style.right = "auto";
            menuRef.current.style.marginLeft = "8px";
          } else if (rect.right > viewportWidth) {
            menuRef.current.style.right = `${toggleWidth}px`;
            menuRef.current.style.left = "auto";
            menuRef.current.style.marginRight = "8px";
          }

          if (rect.top < 0) {
            menuRef.current.style.top = "0";
            menuRef.current.style.bottom = "auto";
          } else if (rect.bottom > viewportHeight) {
            menuRef.current.style.bottom = "0";
            menuRef.current.style.top = "auto";
          }
          break;
      }
    }
  };
  
  useEffect(() => {
    if (isOpen) {
      resetDropdownPosition();
      adjustDropdownPosition(placement);

      setAnimatedClasses("visible opacity-100 scale-100");
    } else {
      setAnimatedClasses("invisible opacity-0 scale-95");
    }
  }, [isOpen, placement]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={dropdownRef} className={twMerge("relative w-fit", className)}>
        <div ref={toggleRef} onClick={toggleDropdown}>
          {children[0]}
        </div>

        <div 
          ref={menuRef} 
          className={twMerge(
            "absolute z-[50] bg-white border border-gray-200 rounded-md shadow-lg transition-all",
            isOpen ? "block " : "hidden", 
            animatedClasses, menuClasses
          )}
        >
          {children[1]}
        </div>
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownToggle = ({ children, className = "" }) => {
  return (
    <div className={twMerge("flex flex-row", className)}>
      {children}
    </div>
  );
};

export const DropdownMenu = ({ children, className = "" }) => {
  return (
    <div className={twMerge("flex flex-col min-w-[160px] w-auto", className)}>
      {children}
    </div>
  );
};

export const DropdownHead = ({ children, className = "" }) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      {children}
    </div>
  );
};

export const DropdownBody = ({ children, className = "" }) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      {children}
    </div>
  );
};

export const DropdownGroup = ({ children, title, className = "" }) => {
  return (
    <div className="flex flex-col gap-1 p-1">
      {title && <span className="font-semibold text-sm text-gray-700">{title}</span>}
      <div className={twMerge("flex flex-col", className)}>
        {children}
      </div>
    </div>
  );
};

export const DropdownItem = ({ item, closeable = false, onClick = () => {}, className = "" }) => {
  const { setIsOpen } = useContext(DropdownContext);

  const handleClick = () => {
    onClick();
    if(closeable) setIsOpen(false);
  }

  const ItemContent = () => (
    <div 
      className={twMerge("flex items-center gap-2 px-2 py-1 text-sm font-medium rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-100 [&.active]:bg-gray-100", className)}
      onClick={handleClick}
    >
      {item.icon && <item.icon className="size-4" />}
      {item.name}
    </div>
  );

  return item.path ? (
    <Link to={item.path}>
      <ItemContent />
    </Link>
  ) : (
    <ItemContent />
  );
};

export const DropdownSeparator = () => {
  return (
    <div className="border-t" />
  )
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  placement: PropTypes.string,
  className: PropTypes.string,
};

DropdownToggle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

DropdownHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

DropdownBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

DropdownGroup.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

DropdownItem.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.elementType,
  }).isRequired,
  closeable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
