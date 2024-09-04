import PropTypes from 'prop-types';

const Button = ({ children = '', icon: Icon, onClick = () => {}, className = '' }) => {
  return (
    <div className={`flex items-center justify-start w-full gap-2 px-2.5 py-2 min-h-9 h-9 max-h-9 rounded-md hover:bg-gray-200 [&.active]:bg-gray-200 transition-colors duration-300 ${className}`} onClick={onClick}>
      <div className="flex items-center gap-2">
        {Icon ? <Icon className="size-4" /> : ""}
        {children}
      </div>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;