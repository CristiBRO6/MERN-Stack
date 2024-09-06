import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

import IconButton from '../ui/IconButton';
import Dropdown from '../ui/Dropdown';
import { useState } from 'react';

const Pagination = ({ table, pagination, pageSizeOptions }) => {
  const [pageSize, setPageSize] = useState(pagination.pageSize);

  return (
    <>
      <div className="flex items-center justify-between">
        {pageSizeOptions.length ? (
          <Dropdown placement="bottom">
            <Dropdown.Toggle>
              <div className="px-2 py-1 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 hover:bg-gray-100">
                {pageSize}
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="min-w-[120px]">
              <Dropdown.Body className="gap-1 p-1">
                {pageSizeOptions.map((option, index) => (
                  <>
                    <Dropdown.Item 
                      key={index}
                      item={{
                        name: option
                      }} 
                      className={`px-2 py-1 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 ${pageSize === option ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                      onClick={() => {
                        setPageSize(option);
                        table.setPageSize(Number(option));
                      }}
                    />
                  </>
                ))}
              </Dropdown.Body>
            </Dropdown.Menu>
          </Dropdown>
        ) : (<div></div>)}
        <div className="flex items-center gap-2">
          <div className="font-medium text-sm">Page {pagination.pageIndex + 1} of {table.getPageCount()} pages</div>

          <IconButton icon={ChevronsLeft} onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()} />
          <IconButton icon={ChevronLeft} onClick={() => table.previousPage()}  disabled={!table.getCanPreviousPage()} />
          <IconButton icon={ChevronRight} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
          <IconButton icon={ChevronsRight} onClick={() => table.lastPage()}  disabled={!table.getCanNextPage()} />
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