import PropTypes from 'prop-types';

import Dropdown from '../ui/Dropdown';
import Button from '../ui/Button';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

const Sort = ({ children, header }) => {
  return (
    <>
      <Dropdown className="w-fit" placement="bottom">
        <Dropdown.Toggle>
          <Button>
            {children}
            {header.column.getIsSorted() ? (
              header.column.getIsSorted() === "asc" ? (
                <ArrowUp className="size-4" />
              ) : (
                <ArrowDown className="size-4" />
              )
            ) : (
              <ArrowUpDown className="size-4" />
            )}
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Body className="px-2">
            <Dropdown.Group className="gap-1" title="Sorting">
              <div 
                className={`flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer transition-colors duration-300 hover:bg-slate-100  ${header.column.getIsSorted() == "asc" ? "bg-slate-100" : ""}`}
                onClick={() =>{
                  header.column.getIsSorted() === "asc" ? header.column.clearSorting() : header.column.toggleSorting(false);
                }}
              >
                <ArrowUp className="size-4" />
                Asc
              </div>
              <div 
                className={`flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer transition-colors duration-300 hover:bg-slate-100 ${header.column.getIsSorted() == "desc" ? "bg-slate-100" : ""}`}
                onClick={() => {
                  header.column.getIsSorted() === "desc" ? header.column.clearSorting() : header.column.toggleSorting(true);
                }}
              >
                <ArrowDown className="size-4" />
                Desc
              </div>
            </Dropdown.Group>
          </Dropdown.Body>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

Sort.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.object.isRequired,
};

export default Sort;