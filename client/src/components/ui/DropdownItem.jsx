import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Separator from './Separator';

const DropdownItem = ({ item, onClick = () => {}, className = '' }) => {
  return (
    <>
      {item.type == 'item' ? (
        <Link to={item.path} end onClick={onClick} className={`${className}`}>
          <div className="flex items-center gap-2 px-4 py-2 text-gray-800 text-sm font-semibold transition-colors duration-300 hover:bg-gray-200">
            <item.icon className="size-4" />
            {item.name}
          </div>
        </Link>
      ) : (
        <Separator />
      )}
    </>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default DropdownItem;