import PropTypes from 'prop-types';

const Search = ({ placeholder = "", setColumnFilters, columns }) => {
  const onFilterChange = (value) => {
    setColumnFilters(
      columns.map((id) => ({
        id,
        value,
      }))
    );
  };

  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={(e) => onFilterChange(e.target.value)}
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
