import PropTypes from 'prop-types';
import { useState } from 'react';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';

import { Table, TableHeader, TableBody} from './table/Table'
import DataTableHeader from './table/DataTableHeader';
import DataTableBody from './table/DataTableBody';


import Search from './table/Search';
import Filter from './table/Filter';
import Pagination from './table/Pagination';

import { ROLES } from '../constants';

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
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: paginationState,
      columnVisibility,
      sorting,
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
    onColumnFiltersChange: setColumnFilters,
  });

  const columnsCount =
    table.getAllColumns().filter((column) => column.getIsVisible()).length -
    table
      .getAllColumns()
      .filter(
        (column) =>
          ("actions" === column.id) &&
          column.getIsVisible()
      ).length;

  return (
    <div className="flex flex-col gap-2">
      <Search placeholder="Search by name..." setColumnFilters={setColumnFilters} columns={["name"]} />
      <Filter columnFilters={columnFilters} setColumnFilters={setColumnFilters} columnId={table.getColumn('role').id} statuses={ROLES} />

      <Table>
        <TableHeader>
          <DataTableHeader table={table} columnsCount={columnsCount} />
        </TableHeader>
        <TableBody>
          <DataTableBody table={table} />
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