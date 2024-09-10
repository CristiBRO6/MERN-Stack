import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}

const Search = ({ placeholder = "", setColumnFilters, columns }) => {
  const [value, setValue] = useState('');
  
  const onFilterChange = (value) => {
    setColumnFilters(
      columns.map((id) => ({
        id,
        value,
      }))
    );
  };

  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    onFilterChange(value);
  }, [debouncedValue]);

  return (
    <input
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="p-2 border rounded-md"
    />
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  setColumnFilters: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
};

export default Search;
