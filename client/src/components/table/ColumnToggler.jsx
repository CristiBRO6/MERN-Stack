import PropTypes from 'prop-types';
import Dropdown from '../ui/Dropdown';
import IconButton from '../ui/IconButton';
import { Settings2 } from 'lucide-react';

const ColumnToggler = ({ table }) => {
  return (
    <>
      <Dropdown placement="bottom">
        <Dropdown.Toggle>
          <IconButton icon={Settings2} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Body className='px-2'>
              <Dropdown.Group title="Columns">
                {table.getAllColumns().filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide()).map((column) => (
                  column.getCanHide() && (
                    <label key={column.id} className="flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-200">
                      <input
                        checked={column.getIsVisible()}
                        onChange={column.getToggleVisibilityHandler()}
                        type="checkbox"
                        className="form-checkbox h-3 w-3 text-gray-600 transition-colors duration-200"
                      />
                      <span className={`text-sm`}>
                        {column.columnDef.header}
                      </span>
                    </label>
                  )
                ))}
              </Dropdown.Group>
            </Dropdown.Body>
          </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

ColumnToggler.propTypes = {
  table: PropTypes.object.isRequired,
};

export default ColumnToggler;