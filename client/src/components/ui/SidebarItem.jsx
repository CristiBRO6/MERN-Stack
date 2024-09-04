import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Tooltip from './Tooltip';
import Button from './Button';

const SidebarItem = ({ isCollapsed = false, item, onClick = () => {}, className = '' }) => {
  return (
    <NavLink to={item.path} end className={` ${className}`} onClick={onClick}>
      {({ isActive }) => (
        isCollapsed ? (
          <Tooltip content={item.name} position="right">
            <Button icon={item.icon} className={`${isActive ? 'active' : ''}`} />
          </Tooltip>
        ) : (
          <Button icon={item.icon} className={`text-sm font-semibold ${isActive ? 'active' : ''}`}>
            {item.name}
          </Button>
        )
      )}
    </NavLink>
  );
};

SidebarItem.propTypes = {
  isCollapsed: PropTypes.bool,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default SidebarItem;