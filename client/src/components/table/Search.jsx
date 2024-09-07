import PropTypes from 'prop-types';

const Search = ({ placeholder = "", value, setValue }) => {
  return (
    <input 
      type="search"
      placeholder={placeholder} 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Search;
