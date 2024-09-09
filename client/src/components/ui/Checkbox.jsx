import PropTypes from 'prop-types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Check } from 'lucide-react';

const Checkbox = ({ checked = false, disabled = false }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleChecked = () => {
    if (!disabled) {
      setIsChecked(!isChecked);
    }
  };

  return (
    <>
      <button
        onClick={toggleChecked}
        className={twMerge(
          "w-4 h-4 flex items-center justify-center border rounded-[4px]",
          isChecked ? "bg-primary border-primary" : "bg-white",
          disabled && "cursor-not-allowed opacity-50"
        )}
        disabled={disabled}
        aria-checked={isChecked}
        role="checkbox"
      >
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          readOnly
        />
        {isChecked && (
          <Check className="text-white w-4 h-4 transition-transform transform scale-100" />
        )}
      </button>
    </>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Checkbox;
