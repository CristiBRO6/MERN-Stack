import PropTypes from 'prop-types';

const Card = ({ children, width = 500, className = '' }) => {
  return (
    <>
      <div 
        className={`flex flex-col bg-white rounded-lg shadow-lg border ${className}`}
        style={{width: width}}
      >
        {children}
      </div>
    </>
  )
};

Card.Header = ({ children, className = '' }) => {
  return (
    <>
      <div className={`p-4 pb-2 ${className}`}>
        {children}
      </div>
    </>
  )
};

Card.Title = ({ children, className = '' }) => {
  return (
    <>
      <span className={`font-semibold text-lg ${className}`}>
        {children}
      </span>
    </>
  )
};

Card.Body = ({ children, className = '' }) => {
  return (
    <>
      <div className={`p-4 pt-2 ${className}`}>
        {children}
      </div>
    </>
  )
};

Card.displayName = 'Card';
Card.Header.displayName = 'Card.Header';
Card.Title.displayName = 'Card.Title';
Card.Body.displayName = 'Card.Body';

Card.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  className: PropTypes.string,
};

Card.Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
