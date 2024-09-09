import PropTypes from 'prop-types';
import { flexRender } from '@tanstack/react-table';

import { TableCell, TableRow } from './Table';
import Spinner from '../ui/Spinner';

const DataTableHeader = ({ table, loading = true }) => {
  const numberOfRows = table.getRowModel().rows.length;
  const columns = table.getAllColumns().length;

  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-white/75 z-10">
          <Spinner color="black" size="xl" />
        </div>
      )}
      
      {!loading && numberOfRows > 0 ? (
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
          <TableCell colSpan={columns} className="h-[160px]">
            <span className="flex justify-center text-center font-semibold text-base">
              No Data
            </span>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

DataTableHeader.propTypes = {
  table: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

export default DataTableHeader;
