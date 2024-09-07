import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

import { X } from 'lucide-react';
import { useState } from 'react';

const Badge = ({
  children = "",
  color = "default",
  bordered = true,
  closable = false,
  icon: Icon,
  onClick = () => {},
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if(!isVisible) return null;

  const badgeColors = {
    processing: 'bg-blue-50 text-blue-500 border-blue-00',
    success: 'bg-success-bg text-success-text border-success-border',          
    error: 'bg-error-bg text-error-text border-error-border',           
    warning: 'bg-warning-bg text-warning-text border-warning-border',         
    magenta: 'bg-magenta-50 text-magenta-600 border-magenta-200',         
    red: 'bg-red-50 text-red-600 border-red-200',              
    volcano: 'bg-volcano-50 text-volcano-600 border-volcano-200',          
    orange: 'bg-orange-50 text-orange-600 border-orange-200',          
    gold: 'bg-gold-50 text-gold-600 border-gold-200',           
    lime: 'bg-lime-50 text-lime-600 border-lime-200',             
    green: 'bg-green-50 text-green-600 border-green-200',           
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-200',             
    blue: 'bg-blue-50 text-blue-600 border-blue-200',             
    geekblue: 'bg-geekblue-50 text-geekblue-600 border-geekblue-200',        
    purple: 'bg-purple-50 text-purple-600 border-purple-200',           
    default: 'bg-[#fafafa] text-[#191919] border',         
  };

  const baseClasses = "w-fit flex items-center justify-center gap-1 text-xs font-medium rounded-[4px] px-2 py-0.5";
  const colorClasses = badgeColors[color] || badgeColors.default;
  const borderClasses = bordered ? "border" : "border-transparent";

  return (
    <div className={twMerge(baseClasses, colorClasses, borderClasses, className)}>
      {Icon && <Icon className="size-3" />}
      {children}
      {closable && (
        <div
          className="cursor-pointer text-xs font-medium"
          onClick={() => {
            onClick();
            setIsVisible(false);
          }}
        >
          <X className="size-3" />
        </div>
      )}
    </div>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'processing', 'success', 'error', 'warning', 'magenta', 'red', 'volcano', 
    'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple', 'default'
  ]),
  bordered: PropTypes.bool,
  closable: PropTypes.bool,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Badge;
