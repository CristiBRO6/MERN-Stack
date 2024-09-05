import PropTypes from 'prop-types';

const Card = ({ children, width = 500, className }) => {
  return (
    <>
      <div 
        className={`${className}`}
        style={{width: width}}
      >
        {children}
      </div>;
    </>
  )
};

Card.Header = ({ children, className }) => {
  return (
    <>
      <div className={`${className}`}>
        {children}
      </div>;
    </>
  )
};

Card.Body = ({ children, className }) => {
  return (
    <>
      <div className={`${className}`}>
        {children}
      </div>;
    </>
  )
};

Card.displayName = 'Card';
Card.Header.displayName = 'Card.Header';
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

Card.Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
