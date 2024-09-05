import PropTypes from 'prop-types';
import { useReactTable, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import { useState } from 'react';

import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react';

const Table = ({ columns, data, pagination: isPagination = false }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="flex flex-col gap-2 overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map(header => (
                <th key={header.id} className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">
                  {header.column.columnDef.Header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="bg-white hover:bg-gray-50">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                  {cell.getValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isPagination && (
        <>
          <div className="flex items-center justify-between">
            <select
              className="cursor-pointer bg-gray-200 rounded-md p-1"
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
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
                <ChevronRight className='size-4' />
              </button>
              <button className="bg-gray-200 cursor-pointer px-2 py-1 rounded-md text-sm" onClick={() => table.lastPage()}  disabled={!table.getCanNextPage()}>
                <ChevronsRight className='size-4' />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  pagination: PropTypes.bool,
};

export default Table;
