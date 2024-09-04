import PropTypes from 'prop-types';

const IconButton = ({ icon: Icon, onClick = () => {}, className = '' }) => {
  return (
    <div className={`flex items-center justify-center cursor-pointer p-2 rounded-md hover:bg-gray-200 min-w-9 w-9 max-w-9 min-h-9 h-9 max-h-9 ${className}`} onClick={onClick} >
      <Icon className="size-4" />
    </div>
  );
};

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default IconButton;
