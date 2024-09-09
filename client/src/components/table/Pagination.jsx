import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

import { Dropdown, DropdownBody, DropdownItem, DropdownMenu, DropdownToggle } from '../ui/Dropdown';
import { useState } from 'react';
import Button from '../ui/Button';

const Pagination = ({ table, pagination, pageSizeOptions }) => {
  const [pageSize, setPageSize] = useState(pagination.pageSize);

  return (
    <>
      <div className="flex items-center justify-between">
        {pageSizeOptions.length ? (
          <Dropdown placement="bottom">
            <DropdownToggle>
              <Button type="icon" color="transparent" bordered>{pageSize}</Button>
            </DropdownToggle>
            <DropdownMenu className="min-w-[120px]">
              <DropdownBody className="gap-1 p-1">
                {pageSizeOptions.map((option, index) => (
                  <DropdownItem 
                    key={index}
                    item={{
                      name: option.toString()
                    }} 
                    closeable
                    className={`${pageSize === option ? 'active' : ''}`}
                    onClick={() => {
                      setPageSize(option);
                      table.setPageSize(Number(option));
                    }}
                  />
                ))}
              </DropdownBody>
            </DropdownMenu>
          </Dropdown>
        ) : (<div></div>)}
        <div className="flex items-center gap-2">
          <div className="font-medium text-sm">Page {pagination.pageIndex + 1} of {table.getPageCount()} pages</div>

          <Button type="icon" color="transparent" icon={ChevronsLeft} onClick={() => table.firstPage()} bordered disabled={!table.getCanPreviousPage()} />
          <Button type="icon" color="transparent" icon={ChevronLeft} onClick={() => table.previousPage()} bordered disabled={!table.getCanPreviousPage()} />
          <Button type="icon" color="transparent" icon={ChevronRight} onClick={() => table.nextPage()} bordered disabled={!table.getCanNextPage()} />
          <Button type="icon" color="transparent" icon={ChevronsRight} onClick={() => table.lastPage()} bordered  disabled={!table.getCanNextPage()} />
        </div>
      </div>
    </>
  )
}

Pagination.propTypes = {
  table: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired,
  pageSizeOptions: PropTypes.array.isRequired,
};

export default Pagination;