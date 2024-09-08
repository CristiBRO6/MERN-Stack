import PropTypes from 'prop-types';
import { flexRender } from '@tanstack/react-table';

import { TableCell, TableRow } from './Table';

const DataTableHeader = ({ table }) => {
  return (
    <>
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
          <TableCell colSpan={table.getAllColumns().length} className="py-10">
            <span className="flex justify-center text-center font-semibold text-base">No results</span>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

DataTableHeader.propTypes = {
  table: PropTypes.object.isRequired,
};

export default DataTableHeader;