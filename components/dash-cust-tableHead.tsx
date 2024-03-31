import { useState } from "react";

type Column = {
    label: string;
    accessor: string;
    sortable: boolean;
};

const TableHead = ({ columns, handleSorting }: { columns: Column[], handleSorting: (accessor: string, sortOrder: string) => void }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor: string) => {
        const sortOrder: string = accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };
    const headStyle = "cursor-pointer bg-gray-100 border text-left px-4 py-4";
    const up = "bold after:content-['_▲']";
    const down = "bold after:content-['_▼']";
    const defaultStyle = "text-gray-500";
    return (
        <thead>
            <tr>
                <th className="bg-gray-100 border text-xl text-left px-8 py-4" colSpan={columns.length}>
                    Customers
                </th>
            </tr>
            <tr>
                {columns.map(({ label, accessor, sortable }) => {
                    const cl = sortable 
                        ? sortField === accessor && order === "asc" 
                            ? up
                            : sortField === accessor && order === "desc"
                            ? down
                            : defaultStyle
                        : "";
                        return (
                            <th 
                                key={accessor} 
                                onClick={ sortable ? () => handleSortingChange(accessor) : () => {} } 
                                className={` ${cl} ${headStyle}`}>
                                {label}
                            </th>
                        );
                        })}
            </tr>
        </thead>
    );
};

export default TableHead;
