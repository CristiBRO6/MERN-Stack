import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';

import { Table, TableHeader, TableBody } from './table/Table';
import DataTableHeader from './table/DataTableHeader';
import DataTableBody from './table/DataTableBody';

import Search from './table/Search';
import Filter from './table/Filter';
import Pagination from './table/Pagination';

const DataTable = ({
  columns,
  data,
  loading = false,
  columnVisibility: initialColumnVisibility = {},
  paginationOptions = { pagination: false, currentPage: 0, pageSize: 10, pageSizeOptions: [10, 25, 50, 100] },
  searchOptions = { search: false, placeholder: "", columns: [] },
  filterOptions = { filter: false, filters: [ { title: "", column: "", statuses: [] } ] },
}) => {
  const [filteredData, setFilteredData] = useState(data);

  const { pagination, currentPage, pageSize, pageSizeOptions } = paginationOptions;

  const [paginationState, setPaginationState] = useState({ pageIndex: currentPage, pageSize: pageSize });
  const [columnVisibility, setColumnVisibility] = useState(initialColumnVisibility);
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (isLoading) setIsLoading(false);
  }, [paginationState, columnFilters, sorting, isLoading]);

  useEffect(() => {
    const newFilteredData = data.filter(item => {
      const passesColumnFilters = columnFilters.every(filter => {
        const { id, value } = filter;

        if (Array.isArray(value) && value.length > 0) {
          return value.includes(item[id]);
        }

        return true;
      });

      return passesColumnFilters;
    });

    setFilteredData(newFilteredData);
  }, [data, columnFilters]);

  useEffect(() => {
    const newFilteredData = data.filter(item => {
      if (!searchOptions.search) return true;
      if (!searchValue) return true;
  
      return searchOptions.columns.some(column =>
        item[column]?.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  
    setFilteredData(newFilteredData);
  }, [data, searchValue, searchOptions]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      pagination: paginationState,
      columnVisibility,
      sorting,
      columnFilters,
      rowSelection,
    },
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: (updater) => {
      setIsLoading(true);
      setPaginationState(updater);
    },
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: (updater) => {
      setIsLoading(true);
      setSorting(updater);
    },
    onColumnFiltersChange: (updater) => {
      setIsLoading(true);
      setColumnFilters(updater);
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    manualFiltering: true,
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {searchOptions.search ? (
          <Search
            placeholder={searchOptions.placeholder}
            setSearchValue={setSearchValue}
          />
        ) : null}

        {filterOptions.filter &&
          filterOptions.filters.map((filter, index) => (
            <Filter
              key={index}
              title={filter.title}
              column={filter.column}
              statuses={filter.statuses}
              columnFilters={columnFilters}
              setColumnFilters={setColumnFilters}
            />
          ))}
      </div>

      <Table>
        <TableHeader>
          <DataTableHeader table={table} />
        </TableHeader>
        <TableBody>
          <DataTableBody table={table} loading={isLoading} />
        </TableBody>
      </Table>

      {pagination && (
        <Pagination
          table={table}
          pagination={paginationState}
          pageSizeOptions={
            pageSizeOptions.includes(pageSize) 
              ? pageSizeOptions 
              : [...pageSizeOptions, pageSize].sort((a, b) => a - b)
          }
        />
      )}

      {Object.keys(rowSelection).length ? (
        <div className="w-[400px] absolute bottom-10 left-1/2 -translate-x-1/2 p-4 bg-white shadow-lg">
          {Object.keys(rowSelection).length} selected
        </div>
      ) : null}
    </div>
  );
};

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  columnVisibility: PropTypes.object,
  paginationOptions: PropTypes.shape({
    pagination: PropTypes.bool,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  }),
  searchOptions: PropTypes.shape({
    search: PropTypes.bool,
    placeholder: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.string),
  }),
  filterOptions: PropTypes.shape({
    filter: PropTypes.bool,
    filters: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        column: PropTypes.string,
        statuses: PropTypes.array,
      })
    ),
  }),
};

export default DataTable;
