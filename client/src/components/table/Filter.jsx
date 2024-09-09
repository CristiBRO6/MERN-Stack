import PropTypes from 'prop-types';
import { Square, SquareCheck, CirclePlus } from 'lucide-react';
import Button from '../ui/Button';
import { Dropdown, DropdownGroup, DropdownItem, DropdownMenu, DropdownToggle } from '../ui/Dropdown';

const Filter = ({ title, column, statuses, columnFilters, setColumnFilters }) => {
  const filterStatuses = columnFilters.find(f => f.id == column)?.value || [];
  const isActive = (id) => {
    return !!filterStatuses.includes(id);
  }

  const handleToggle = (id) => {
    setColumnFilters(prev => {
      const filter = prev.find(filter => filter.id === column);
      if(!filter) return [...prev, { id: column, value: [id] }];

      const updatedValue = isActive(id) 
        ? filter.value.filter(s => s !== id)
        : [...filter.value, id];

      return prev.map(filter =>
        filter.id === column ? { ...filter, value: updatedValue } : filter
      );
    })
  }

  return (
    <>
      <Dropdown>
        <DropdownToggle>
          <Button icon={CirclePlus} color="transparent" className="w-fit" bordered>
            {title}
          </Button>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownGroup title={title} className="gap-1">
            {statuses.map(status => (
              <DropdownItem
                key={status.id}
                item={{ 
                  name: status.name,
                  icon: isActive(status.id) ? SquareCheck : Square,
                }}
                onClick={() => handleToggle(status.id)}
                className={isActive(status.id) ? "active" : ""}
              />
            ))}
          </DropdownGroup>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  columnFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.array.isRequired,
    })
  ).isRequired,
  setColumnFilters: PropTypes.func.isRequired,
};

export default Filter;
