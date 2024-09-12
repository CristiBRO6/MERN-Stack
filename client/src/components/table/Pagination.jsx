import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import Button from '../ui/Button';

const Pagination = ({ table, pagination, pageSizeOptions }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        {pageSizeOptions.length ? (
          <Select defaultValue="">
            <SelectTrigger className="min-w-20 w-auto max-w-20">
              <SelectValue placeholder={pageSizeOptions[0].toString()} />
            </SelectTrigger>
            <SelectContent className="min-w-20 w-auto max-w-20">
              {pageSizeOptions.map((option, index) => (
                  <SelectItem 
                    key={index} 
                    value={option.toString()}
                    onClick={() => table.setPageSize(Number(option))}
                  >
                    {option.toString()}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        ) : (<div></div>)}
        <div className="flex items-center gap-2">
          <div className="font-medium text-sm">Page {pagination.pageIndex + 1} of {table.getPageCount()} pages</div>

          <Button type="icon" color="transparent" icon={ChevronsLeft} onClick={() => table.firstPage()} bordered disabled={!table.getCanPreviousPage()} />
          <Button type="icon" color="transparent" icon={ChevronLeft} onClick={() => table.previousPage()} bordered disabled={!table.getCanPreviousPage()} />
          <Button type="icon" color="transparent" icon={ChevronRight} onClick={() => table.nextPage()} bordered disabled={!table.getCanNextPage()} />
          <Button type="icon" color="transparent" icon={ChevronsRight} onClick={() => table.lastPage()} bordered  disabled={!table.getCanNextPage()} />
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