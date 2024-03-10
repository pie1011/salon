type Column = {
    label: string;
    accessor: string;
};

const TableHead = ({ columns }: { columns: Column[] }) => {
    return (
        <thead>
            <tr>
                {columns.map(({ label, accessor }) => (
                    <th key={accessor} className="bg-gray-100 border text-left px-8 py-4">
                        {label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
