import PropTypes from 'prop-types';
const Badge = ({
  children = "",
  color = "default",
  bordered = true,
  closable = false,
  icon: Icon,
  onClick = () => {},
  className = "",
}) => {
  const badgeColors = {
    processing: 'bg-[#e6f4ff] text-[#1677ff] border-[#91caff]',
    success: 'bg-[#f6ffed] text-[#52c41a] border-[#b7eb8f]',          
    error: 'bg-[#fff2f0] text-[#ff4d4f] border-[#ffccc7]',           
    warning: 'bg-[#fffbe6] text-[#faad14] border-[#ffe58f]',         
    magenta: 'bg-[#fff0f6] text-[#c41d7f] border-[#ffadd2]',         
    red: 'bg-[#fff1f0] text-[#cf1322] border-[#ffa39e]',              
    volcano: 'bg-[#fff2e8] text-[#d4380d] border-[#ffbb96]',          
    orange: 'bg-[#e6f4ff] text-[#1677ff] border-[#91caff]',          
    gold: 'bg-[#e6f4ff] text-[#1677ff] border-[#91caff]',           
    lime: 'bg-[#e6f4ff] text-[#1677ff] border-[#91caff]',             
    green: 'bg-[#e6f4ff] text-[#1677ff] border-[#91caff]',           
    cyan: 'bg-[#e6f4ff] text-[#1677ff] border-[#91caff]',             
    blue: 'bg-[#e6f4ff] text-[#1677ff] border-[#91caff]',             
    geekblue: 'bg-[#e6f4ff] text-[#1677ff] border-[#91caff]',        
    purple: 'bg-[#e6f4ff] text-[#1677ff] border-[#91caff]',           
    default: 'bg-[#fafafa] text-[#191919] border-[#d9d9d9]',         
  };

  const baseClasses = 'w-fit flex items-center justify-center gap-1 text-xs font-medium rounded-[4px] px-2 py-0.5';
  const colorClasses = badgeColors[color] || badgeColors.default;
  const borderClasses = bordered ? 'border' : 'border-transparent';

  return (
    <div
      className={`${baseClasses} ${colorClasses} ${borderClasses} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="size-3" />}
      {children}
      {closable && (
        <button
          type="button"
          className="ml-2 text-xs font-medium leading-none"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          &times;
        </button>
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
