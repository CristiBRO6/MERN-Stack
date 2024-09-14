import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const Input = React.forwardRef(({ className = "", type = "test", ...props }, ref) => {
  return (
    <input
      type={type}
      className={twMerge(
        "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border focus-visible:border-primary focus-visible:shadow-[0px_0px_1px_0px_var(--color-primary)] disabled:select-none disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired, 
  disabled: PropTypes.bool, 
  placeholder: PropTypes.string, 
  onChange: PropTypes.func, 
};

export default Input;
