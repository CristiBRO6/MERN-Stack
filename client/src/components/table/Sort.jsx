import PropTypes from 'prop-types';

import Dropdown from '../ui/Dropdown';
import Button from '../ui/Button';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

const Sort = ({ children, header, className = '' }) => {
  return (
    <>
      <Dropdown placement="bottom" className={`${className}`}>
        <Dropdown.Toggle>
          <Button
            color="transparent"
            icon={
              header.column.getIsSorted() ? (
                header.column.getIsSorted() === "asc" ? (
                  ArrowUp
                ) : (
                  ArrowDown
                )
              ) : (
                ArrowUpDown
              )
            }
            iconPosition="end"
          >
            {children}
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Body>
            <Dropdown.Group className="gap-1">
              <Dropdown.Item 
                item = {{
                  name: "Asc",
                  icon: ArrowUp
                }}
                className={`${header.column.getIsSorted() == "asc" ? "active" : ""}`}
                onClick={() =>{
                  header.column.getIsSorted() === "asc" ? header.column.clearSorting() : header.column.toggleSorting(false);
                }}
              />
              <Dropdown.Item 
                item = {{
                  name: "Desc",
                  icon: ArrowDown
                }}
                className={`${header.column.getIsSorted() == "desc" ? "active" : ""}`}
                onClick={() => {
                  header.column.getIsSorted() === "desc" ? header.column.clearSorting() : header.column.toggleSorting(true);
                }}
              />
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
  className: PropTypes.string,
};

export default Sort;