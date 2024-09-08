import PropTypes from 'prop-types';
import { CirclePlus } from 'lucide-react';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';

const Filter = ({ columnFilters, setColumnFilters, columnId, statuses }) => {
  const filterStatuses = columnFilters.find(f => f.id == columnId)?.value || []

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle>
          <Button icon={CirclePlus} color="transparent" className="w-fit" bordered>
            Role
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Body className="gap-1 p-1">
            {statuses.map(status => (
              <Dropdown.Item
                key={status.id}
                item={{ name: status.name }}
                onClick={() => {
                  setColumnFilters(prev => {
                    const filters = prev.find(filter => filter.id === columnId)?.value;
                    if(!filters){
                      return prev.concat({
                        id: columnId,
                        value: [status.id]
                      })
                    }

                    return prev.map(
                      f => f.id === columnId ? {
                        ...f,
                        value: filterStatuses.includes(status.id) 
                          ? filters.filter(s => s !== status.id)
                          : filters.concat(status.id)
                      } : f
                    )
                  })
                }}
                className={filterStatuses.includes(status.id) ? "active" : ""}
              />
            ))}
          </Dropdown.Body>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

Filter.propTypes = {
  columnFilters: PropTypes.array.isRequired,
  setColumnFilters: PropTypes.func.isRequired,
  columnId: PropTypes.string.isRequired,
  statuses: PropTypes.array.isRequired,
};

export default Filter;
