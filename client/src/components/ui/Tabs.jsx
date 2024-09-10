import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const TabsContext = createContext(null);

export const Tabs = ({ children, defaultValue, className = '' }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={twMerge("flex flex-col", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export const TabsList = ({ children, className = '' }) => {
  return (
    <div className={twMerge("flex border-b border-gray-300", className)}>
      {children}
    </div>
  );
}

export const TabsTrigger = ({ children, value, className = '' }) => {
  const { value: activeValue, setValue } = useContext(TabsContext);

  return (
    <button
      onClick={() => setValue(value)}
      className={twMerge(
        "px-4 py-2 text-sm font-medium",
        value === activeValue ? "border-b border-blue-500 text-blue-500" : "text-gray-600",
        className
      )}
    >
      {children}
    </button>
  );
}

export const TabsContent = ({ children, value, className = '' }) => {
  const { value: activeValue } = useContext(TabsContext);

  return (
    <>
      {activeValue === value ? (
        <div className={twMerge("flex flex-col p-4", className)}>
          {children}
        </div>
      ) : null}
    </>
  );
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
};

TabsList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TabsTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TabsContent.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};
