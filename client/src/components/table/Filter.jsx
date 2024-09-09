import PropTypes from 'prop-types';
import { Check, CirclePlus } from 'lucide-react';
import Button from '../ui/Button';
import { Dropdown, DropdownGroup, DropdownItem, DropdownMenu, DropdownToggle } from '../ui/Dropdown';

const PlaceholderIcon = () => (
  <div className="w-4 h-4 opacity-0"></div>
);

const Filter = ({ title, column, statuses, columnFilters, setColumnFilters }) => {
  const filterStatuses = columnFilters.find(f => f.id == column)?.value || [];
  const isActive = (id) => {
    return !!filterStatuses.includes(id);
  }

  const handleToggle = (id) => {
    setColumnFilters(prev => {
      const filters = prev.find(filter => filter.id === column)?.value;
      if(!filters){
        return prev.concat({
          id: column,
          value: [id]
        })
      }

      return prev.map(
        f => f.id === column ? {
          ...f,
          value: isActive(id) 
            ? filters.filter(s => s !== id)
            : filters.concat(id)
        } : f
      )
    })
  }

  return (
    <>
      <Dropdown>
        <DropdownToggle>
          <Button icon={CirclePlus} color="transparent" className="w-fit" bordered={true}>
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
                  icon: isActive(status.id) ? Check : PlaceholderIcon,
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
