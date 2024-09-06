import PropTypes from 'prop-types';

const IconButton = ({ icon: Icon, onClick = () => {}, className = '', disabled = false }) => {
  return (
    <button
    className={`flex items-center justify-center cursor-pointer p-2 rounded-md transition-colors duration-300 outline-none focus:outline-none hover:bg-gray-200 min-w-9 w-9 max-w-9 min-h-9 h-9 max-h-9 ${className} ${disabled ? 'disabled:select-none disabled:cursor-not-allowed disabled:opacity-60' : ''}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <Icon className="size-4" />
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default IconButton;
