import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Dropdown, DropdownGroup, DropdownItem, DropdownMenu, DropdownToggle } from '../ui/Dropdown';

import { Square, SquareCheck, CirclePlus } from 'lucide-react';

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
            {filterStatuses.length > 0 ? (
              <>
                <div className="h-full border-l"></div>
                {filterStatuses.length > 2 ? (
                  <Badge>{filterStatuses.length} selected</Badge>
                ) : (
                  filterStatuses.map((status, index) => (
                    <Badge key={index}>{statuses[status].name}</Badge>
                  ))
                )}
              </>
            ) : null}
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
                className={twMerge(isActive(status.id) ? "active" : "")}
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
