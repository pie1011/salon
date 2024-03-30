type Column = {
  label: string;
  accessor: string;
};

const TableBody = ({
  tableData,
  columns,
}: {
  tableData: any[];
  columns: Column[];
}) => {
  return (
    <tbody>
    {tableData.map((data, index) => {
        for (let i = 0; i < tableData.length; i++) {
            console.log(tableData[i]);
        }
        return (
            <tr key={index} className="bg-white" >
                {columns.map((column) => {
                    return (
                        <td key={column.accessor} id={column.accessor} className="px-3 py-1">
                            {data[column.accessor]}
                        </td>
                    );
                })}
            </tr>
        );
    })}
    </tbody>
  );
};

export default TableBody;
