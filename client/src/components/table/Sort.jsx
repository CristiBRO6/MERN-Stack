import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

import { Dropdown, DropdownBody, DropdownGroup, DropdownItem, DropdownMenu, DropdownToggle } from '../ui/Dropdown';
import Button from '../ui/Button';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

const Sort = ({ children, header, className = "" }) => {
  return (
    <>
      <Dropdown placement="bottom" className={twMerge(className)}>
        <DropdownToggle>
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
        </DropdownToggle>
        <DropdownMenu>
          <DropdownBody>
            <DropdownGroup className="gap-1">
              <DropdownItem 
                item = {{
                  name: "Asc",
                  icon: ArrowUp
                }}
                closeable
                className={twMerge(header.column.getIsSorted() == "asc" ? "active" : "")}
                onClick={() =>{
                  header.column.getIsSorted() === "asc" ? header.column.clearSorting() : header.column.toggleSorting(false);
                }}
              />
              <DropdownItem 
                item = {{
                  name: "Desc",
                  icon: ArrowDown
                }}
                closeable
                className={twMerge(header.column.getIsSorted() == "desc" ? "active" : "")}
                onClick={() => {
                  header.column.getIsSorted() === "desc" ? header.column.clearSorting() : header.column.toggleSorting(true);
                }}
              />
            </DropdownGroup>
          </DropdownBody>
        </DropdownMenu>
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