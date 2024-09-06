import PropTypes from 'prop-types';

export const Table = ({ children, className = "", style = {} }) => {
  return (
    <>
      <div className="relative w-full overflow-auto rounded-md">
        <table className={`w-full text-sm text-left text-gray-500 ${className}`} style={style}>
          {children}
        </table>
      </div>
    </>
  )
}

export const TableHeader = ({ children, className = "", style = {} }) => {
  return (
    <>
      <thead className={`bg-gray-100 text-gray-700 text-sm font-bold ${className}`} style={style}>
        {children}
      </thead>
    </>
  )
}

export const TableHead = ({ children, className = "", style = {} }) => {
  return (
    <>
      <th className={`p-4 bg-gray-100 text-gray-700 font-semibold text-left ${className}`} style={style}>
        {children}
      </th>
    </>
  )
}

export const TableBody = ({ children, className = "", style = {} }) => {
  return (
    <>
      <tbody className={`divide-y divide-gray-200 ${className}`} style={style}>
        {children}
      </tbody>
    </>
  )
}

export const TableCell = ({ children, className = "", style = {} }) => {
  return (
    <>
      <td className={`px-4 py-3 whitespace-nowrap text-gray-600 ${className}`} style={style}>
        {children}
      </td>
    </>
  )
}

export const TableRow = ({ children, className = "", style = {} }) => {
  return (
    <>
      <tr className={`bg-white hover:bg-gray-50 transition-colors duration-300 border-b border-gray-200 ${className}`} style={style}>
        {children}
      </tr>
    </>
  )
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};