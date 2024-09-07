import PropTypes from 'prop-types';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { useState } from 'react';

import Sort from './table/Sort';
import Search from './table/Search';
import Pagination from './table/Pagination';

import { Table, TableHeader, TableBody, TableCell, TableHead, TableRow, } from './table/Table'

const DataTable = ({ columns, data, columnVisibility: colVisibility, paginationOptions = {} }) => {
  const {
    pagination = false,
    currentPage = 0,
    pageSize = 10,
    pageSizeOptions = [],
  } = paginationOptions;

  if (pageSizeOptions.length && !pageSizeOptions.some(item => item === pageSize)) {
    pageSizeOptions.push(pageSize);
    pageSizeOptions.sort((a, b) => a - b);
  }

  const [paginationState, setPaginationState] = useState({
    pageIndex: currentPage,
    pageSize: pageSize,
  });
  const [columnVisibility, setColumnVisibility] = useState(colVisibility);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: paginationState,
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
    onPaginationChange: setPaginationState,
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
          column.getSize() !== 0 &&
          column.getIsVisible()
      ).length;

  return (
    <div className="flex flex-col gap-2">
      <Search placeholder="Search..." value={filtering} setValue={setFiltering} />

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead
                  key={header.id}
                  style={{
                    width:
                      header.column.getSize() !== 0
                        ? header.column.getSize()
                        : `${100 / columnsCount}%`,
                    minWidth:
                      header.column.getSize() !== 0
                        ? header.column.getSize()
                        : `${100 / columnsCount}%`,
                  }}
                >
                  {!header.isPlaceholder && (
                    header.column.getCanSort() ? (
                      <Sort header={header} className="-mx-3">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </Sort>
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {!cell.isPlaceholder && flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={table.getAllColumns().length}>
                <span className="font-semibold text-base">No results</span>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {pagination && <Pagination table={table} pagination={paginationState} pageSizeOptions={pageSizeOptions} />}
    </div>
  );
};

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  columnVisibility: PropTypes.object,
  paginationOptions: PropTypes.shape({
    pagination: PropTypes.bool,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  }),
};

export default DataTable;