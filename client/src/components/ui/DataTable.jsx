import PropTypes from 'prop-types';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { useState } from 'react';

import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

import Dropdown from './Dropdown';

const DataTable = ({ columns, data, columnVisibility: colVisibility, pagination: isPagination = false, currentPage = 0, pageSize = 10, pageSizeOptions = [] }) => {
  if(pageSizeOptions.length && !pageSizeOptions.some(item => item === pageSize)){
    pageSizeOptions.push(pageSize);
    pageSizeOptions.sort((a, b) => a - b);
  }

  const [pagination, setPagination] = useState({
    pageIndex: currentPage,
    pageSize: pageSize ,
  });
  const [columnVisibility, setColumnVisibility] = useState(colVisibility);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      columnVisibility,
      sorting,
      globalFilter: filtering,
      columnFilters: columnFilters,
    },
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnFiltersChange: setColumnFilters,
  });

  const columnsCount =
    table.getAllColumns().filter((column) => column.getIsVisible()).length -
    table
      .getAllColumns()
      .filter(
        (column) =>
          (column.getSize() !== 0) &&
          column.getIsVisible()
      ).length;

  return (
    <div className="flex flex-col gap-2 overflow-x-hidden">
      <input type="text" value={filtering} onChange={(e) => setFiltering(e.target.value)} />

      <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-md">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map(header => (
                <th 
                  key={header.id} 
                  className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600"
                  style={{
                    width: 
                      header.column.getSize() !== 0
                        ? header.column.getSize()
                        : `${100 / columnsCount}%`,
                    minWidth: 
                      header.column.getSize() !== 0
                        ? header.column.getSize()
                        : `${100 / columnsCount}%`
                  }}
                >
                  {header.column.getCanSort() ? (
                    <Dropdown 
                      className="w-fit"
                      placement="bottom"
                      menu={
                        <Dropdown.Content>
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
                        </Dropdown.Content>
                      }
                    >
                      <div className="flex items-center gap-1 px-2 py-1 cursor-pointer rounded-md hover:bg-slate-200 w-fit">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        {
                          header.column.getIsSorted() ? (
                            {asc: <ArrowUp className="size-4" />, desc: <ArrowDown className="size-4" />}[header.column.getIsSorted() ?? null]
                          ) : (
                            <ArrowUpDown className="size-4" />
                          )
                        }
                      </div>
                    </Dropdown>
                  ) : (
                    header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map(row => (
              <tr key={row.id} className="bg-white hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                    {cell.isPlaceholder
                      ? null
                      : flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={table.getAllColumns().length} className="text-center">
                No results
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isPagination && (
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

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  columnVisibility: PropTypes.array,
  pagination: PropTypes.bool,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.array,
};

export default DataTable;
