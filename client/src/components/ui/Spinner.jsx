import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

import { LoaderCircle } from 'lucide-react';

const Spinner = ({ color = "default", size = "medium" }) => {
  const spinnerColors = {
    primary: "text-primary",
    secondary: "text-gray-500",
    success: "text-success",
    danger: "text-error",
    warning: "text-warning",
    info: "text-info",
    white: "text-white",
    black: "text-black",
    default: "text-gray-500",
  };  

  const spinnerSize = {
    tiny: "size-3",  
    small: "size-4",
    medium: "size-5",
    large: "size-6",
    xl: "size-8",
    xxl: "size-10",
  }

  return (
    <LoaderCircle className={twMerge('inline animate-spin', spinnerColors[color], spinnerSize[size])} />
  )
}

Spinner.propTypes = {
  color: PropTypes.oneOf([
    "primary", 
    "secondary", 
    "success", 
    "danger", 
    "warning", 
    "info", 
    "white",
    "black",
    "default"
  ]),
  size: PropTypes.oneOf(["tiny", "small", "medium", "large", "xl", "xxl"]),
};

export default Spinner;