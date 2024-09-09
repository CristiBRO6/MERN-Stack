import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const IndeterminateCheckbox = ({ indeterminate, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      {...rest}
    />
  );
};

IndeterminateCheckbox.propTypes = {
  indeterminate: PropTypes.bool,
};

export default IndeterminateCheckbox;
