import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

const Search = ({ placeholder = "", setSearchValue }) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    setSearchValue(debouncedValue); 
  }, [debouncedValue, setSearchValue]);

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
  setSearchValue: PropTypes.func.isRequired,
};

export default Search;
