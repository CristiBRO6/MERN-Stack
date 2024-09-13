import PropTypes from 'prop-types';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import Spinner from './Spinner';

const Button = React.forwardRef(({ 
  children = "", 
  color = "primary", 
  type = "primary", 
  size = "medium",
  shape = "default", 
  bordered = false,
  icon: Icon, 
  iconPosition = "start", 
  loading = false, 
  loadingColor = "primary",
  loadingSize = "medium",
  onClick = () => {}, 
  className = "", 
  disabled = false,
  ...props
}, ref) => {
  const buttonColors = {
    primary: "bg-primary text-white hover:bg-primary-hover [&.active]:bg-primary-active",
    secondary: "bg-gray-200 text-black hover:bg-gray-300 [&.active]:bg-gray-300",
    success: "bg-success text-white hover:bg-success-hover [&.active]:bg-success-active",
    danger: "bg-error text-white hover:bg-error-hover [&.active]:bg-error-active",
    warning: "bg-warning text-black hover:bg-warning-hover [&.active]:bg-warning-active",
    info: "bg-info text-white hover:bg-info-hover [&.active]:bg-info-active",
    transparent: "hover:bg-gray-200 [&.active]:bg-gray-200"
  };  

  const buttonTypes = {
    primary: "",
    dashed: "border border-dashed",
    icon: "flex justify-center items-center",
  };

  const buttonSizes = {
    small: type === "icon" ? "size-8 p-2" : "min-h-8 h-8 max-h-8 px-2 py-1",
    medium: type === "icon" ? "size-9 p-2" : "min-h-9 h-9 max-h-9 px-3 py-2",
    large: type === "icon" ? "size-10 p-2" : "min-h-10 h-10 max-h-10 px-4 py-3",
  };  

  const buttonShapes = {
    round: "rounded-full",
    circle: "rounded-full w-9 h-9 flex justify-center items-center",
    default: "rounded-md",
  };

  const baseClasses = "flex items-center justify-start gap-2 w-full text-sm font-medium transition-colors duration-300";
  const borderClasses = bordered ? "border" : "";
  const loadingClasses = loading ? "" : "";
  const disabledClasses = disabled ? "disabled:select-none disabled:cursor-not-allowed disabled:opacity-60" : "";

  const iconElement = Icon && <Icon className="size-4" />;
  
  return (
    <button
      className={twMerge(
        baseClasses, buttonColors[color], 
        buttonTypes[type], buttonSizes[size], 
        buttonShapes[shape], loadingClasses, 
        disabledClasses, borderClasses, className
      )}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      ref={ref}
      {...props}
    >
      {iconPosition === "start" && (
        <>
          {loading ? <Spinner color={loadingColor} size={loadingSize} /> : iconElement}
        </>
      )}
      {children}
      {iconPosition === "end" && (
        <>
          {loading ? <Spinner color={loadingColor} size={loadingSize} /> : iconElement}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "transparent"]),
  type: PropTypes.oneOf(["primary", "dashed", "text", "link", "default", "icon"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["round", "circle", "default"]),
  bordered: PropTypes.bool,
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["start", "end"]),
  loading: PropTypes.bool,
  loadingColor: PropTypes.string,
  loadingSize: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
