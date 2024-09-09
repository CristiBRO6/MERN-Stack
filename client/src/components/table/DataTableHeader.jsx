import PropTypes from 'prop-types';
import { flexRender } from '@tanstack/react-table';

import { TableHead, TableRow } from './Table';
import Sort from './Sort';

const DataTableHeader = ({ table }) => {
  const columnsCount = table
    .getAllColumns()
    .filter((column) => column.getIsVisible())
    .filter(
      (column) => column.id !== 'select' && column.id !== 'actions'
    ).length;

  return (
    <>
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
    </>
  )
}

DataTableHeader.propTypes = {
  table: PropTypes.object.isRequired,
};

export default DataTableHeader;