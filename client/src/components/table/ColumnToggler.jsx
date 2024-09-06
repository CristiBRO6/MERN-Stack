import PropTypes from 'prop-types';
import Dropdown from '../ui/Dropdown';
import IconButton from '../ui/IconButton';
import { Settings2, Check } from 'lucide-react';

const PlaceholderIcon = () => (
  <div className="w-4 h-4 opacity-0"></div>
);

const ColumnToggler = ({ table }) => {
  return (
    <>
      <Dropdown placement="bottom">
        <Dropdown.Toggle>
          <IconButton icon={Settings2} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Group title="Columns">
            {table.getAllColumns().filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide()).map((column) => (
              column.getCanHide() && (
                <Dropdown.Item
                  key={column.id}
                  item={{
                    name: column.columnDef.header,
                    icon: column.getIsVisible() ? Check : PlaceholderIcon,
                  }}
                  className={`${column.getIsVisible() ? 'active' : ''}`}
                  onClick={() => {
                    column.toggleVisibility(!column.getIsVisible()); 
                  }}
                />
              )
            ))}
          </Dropdown.Group>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

ColumnToggler.propTypes = {
  table: PropTypes.object.isRequired,
};

export default ColumnToggler;