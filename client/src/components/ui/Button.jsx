import PropTypes from 'prop-types';

const Button = ({ children = '', icon: Icon, onClick = () => {}, className = '', disabled = false }) => {
  return (
    <button
    className={`flex items-center justify-start w-full gap-2 px-2.5 py-2 min-h-9 h-9 max-h-9 cursor-pointer rounded-md transition-colors duration-300 outline-none focus:outline-none hover:bg-gray-200 [&.active]:bg-gray-200 ${className} ${disabled ? 'disabled:select-none disabled:cursor-not-allowed disabled:opacity-60' : ''}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="size-4" />}
        {children}
      </div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
