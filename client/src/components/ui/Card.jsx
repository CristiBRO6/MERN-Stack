import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export const Card = ({ children, width = 500, className = "" }) => {
  return (
    <>
      <div 
        className={twMerge("flex flex-col w-full bg-white rounded-lg shadow-md border mx-2", className)}
        style={{maxWidth: width}}
      >
        {children}
      </div>
    </>
  )
};

export const CardHeader = ({ children, className = "" }) => {
  return (
    <>
      <div className={twMerge("p-4 pb-2", className)}>
        {children}
      </div>
    </>
  )
};

export const CardTitle = ({ children, className = "" }) => {
  return (
    <>
      <span className={twMerge("block text-center font-bold text-lg", className)}>
        {children}
      </span>
    </>
  )
};

export const CardBody = ({ children, className = "" }) => {
  return (
    <>
      <div className={twMerge("p-4 pt-2", className)}>
        {children}
      </div>
    </>
  )
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  className: PropTypes.string,
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};