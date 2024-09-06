import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Pagination = ({ table, pagination, pageSizeOptions }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        {pageSizeOptions.length ? (
          <select
            className="cursor-pointer bg-gray-200 rounded-md p-1"
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {pageSizeOptions.map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        ) : (<div></div>)}
        
        <div className="flex items-center gap-2">
          <div className="font-normal text-sm">Page {pagination.pageIndex + 1} of {table.getPageCount()} pages</div>
          <button className="bg-gray-200 cursor-pointer px-2 py-1 rounded-md text-sm" onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>
            <ChevronsLeft className='size-4' />
          </button>
          <button 
            className={`bg-gray-200 cursor-pointer px-2 py-1 rounded-md text-sm ${!table.getCanPreviousPage() ? "disabled:select-none disabled:cursor-not-allowed disabled:opacity-60" : ""}`} 
            onClick={() => table.previousPage()} 
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className='size-4' />
          </button>
          <button 
            className={`bg-gray-200 cursor-pointer px-2 py-1 rounded-md text-sm ${!table.getCanNextPage() ? "disabled:select-none disabled:cursor-not-allowed disabled:opacity-60" : ""}`} 
            onClick={() => table.nextPage()} 
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight  className='size-4' />
          </button>
          <button className="bg-gray-200 cursor-pointer px-2 py-1 rounded-md text-sm" onClick={() => table.lastPage()}  disabled={!table.getCanNextPage()}>
            <ChevronsRight className='size-4' />
          </button>
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