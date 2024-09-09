import PropTypes from 'prop-types';
import { Dropdown, DropdownGroup, DropdownItem, DropdownMenu, DropdownToggle } from '../ui/Dropdown';
import Button from '../ui/Button';
import { Settings2, Square, SquareCheck } from 'lucide-react';

const ColumnToggler = ({ table }) => {
  return (
    <>
      <Dropdown placement="bottom">
        <DropdownToggle>
          <Button type="icon" color="transparent" icon={Settings2} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownGroup title="Columns" className="gap-1">
            {table.getAllColumns().filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide()).map((column) => (
              column.getCanHide() && (
                <DropdownItem
                  key={column.id}
                  item={{
                    name: column.columnDef.header,
                    icon: column.getIsVisible() ? SquareCheck : Square,
                  }}
                  className={`${column.getIsVisible() ? 'active' : ''}`}
                  onClick={() => {
                    column.toggleVisibility(!column.getIsVisible()); 
                  }}
                />
              )
            ))}
          </DropdownGroup>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

ColumnToggler.propTypes = {
  table: PropTypes.object.isRequired,
};

export default ColumnToggler;