import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { createContext, useContext, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from "./Button";
import { Dropdown, DropdownBody, DropdownItem, DropdownMenu, DropdownToggle } from "./Dropdown";
import React from 'react';

export const SelectContext = createContext(null);

export const Select = ({ children, defaultValue = null, className = "" }) => {
  const [value, setValue] = useState(defaultValue);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (defaultValue) {
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === SelectContent) {
          React.Children.forEach(child.props.children, (item) => {
            if (React.isValidElement(item) && item.props.value === defaultValue) {
              setTitle(item.props.children);
            }
          });
        }
      });
    }
  }, [defaultValue, children]);

  return (
    <SelectContext.Provider value={{ value, setValue, title, setTitle }}>
      <Dropdown placement="bottom" className={className}>
        {children}
      </Dropdown>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = ({ children, className = "" }) => {
  return (
    <DropdownToggle className={className}>
      {children}
    </DropdownToggle>
  );
};

export const SelectValue = ({ placeholder, className = "" }) => {
  const { value, title } = useContext(SelectContext);

  return (
    <Button
      color="transparent"
      icon={ChevronDown}
      iconPosition="end"
      bordered
      className={twMerge("justify-between", className)}
    >
      {value ? title : placeholder}
    </Button>
  );
};

export const SelectContent = ({ children, className = "" }) => {
  return (
    <DropdownMenu className={twMerge("gap-1 p-1", className)}>
      {children}
    </DropdownMenu>
  );
};

export const SelectGroup = ({ children, className = "" }) => {
  return (
    <DropdownBody className={className}>
      {children}
    </DropdownBody>
  );
};

export const SelectLabel = ({ children, className = "" }) => {
  return (
    <span className={twMerge("px-2 font-semibold text-sm text-gray-700", className)}>
      {children}
    </span>
  );
};

export const SelectItem = ({ children, value, className = "", onClick = () => {},  }) => {
  const { value: selectedValue, setValue, setTitle } = useContext(SelectContext);

  return (
    <DropdownItem
      item={{
        name: children,
      }}
      className={twMerge(
        className,
        selectedValue === value ? "bg-gray-100 font-bold" : ""
      )}
      onClick={() => {
        setValue(value);
        setTitle(children);
        onClick();
      }}
      closeable
    />
  );
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
};

SelectTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SelectValue.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SelectContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SelectLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SelectGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SelectItem.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
