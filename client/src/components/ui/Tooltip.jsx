import PropTypes from 'prop-types';

const Tooltip = ({ children, content, position = 'right', delay = 300 }) => {
  let className = '';

  switch (position) {
    case 'top':
      className = 'bottom-full -translate-x-1/2 left-1/2 -translate-y-3 group-hover:translate-y-0 mb-2';
      break;
    case 'bottom':
      className = 'top-full -translate-x-1/2 left-1/2 -translate-y-3 group-hover:translate-y-0 mt-2';
      break;
    case 'left':
      className = 'right-full -translate-y-1/2 top-1/2 -translate-x-3 group-hover:translate-x-0 mr-4';
      break;
    case 'right':
    default:
      className = 'left-full -translate-y-1/2 top-1/2 -translate-x-3 group-hover:translate-x-0 ml-4';
  }

  return (
    <div className="relative group">
      {children}
      <div 
        className={`absolute ${className} z-[50] rounded-md px-2 py-1 bg-gray-100 text-gray-800 text-sm font-semibold cursor-default shadow-md invisible opacity-20 transition-all group-hover:visible group-hover:opacity-100`}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {content}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  delay: PropTypes.number,
};

export default Tooltip;
