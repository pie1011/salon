"use client";
import { useState } from "react";
import TableBody from "@/components/dash-cust-tableBody";
import TableHead from "@/components/dash-cust-tableHead";

interface CustomersProps {
    customerList: any[];
}

export default function Customers({ customerList }: CustomersProps) {

    const [tableData, setTableData] = useState(customerList);

    const columns = [
        { label: "Name", accessor: "name", sortable: true },
        { label: "Email", accessor: "email", sortable: true },
        { label: "Phone", accessor: "phone", sortable: true }
    ]

    const handleSorting = (sortField: string, sortOrder: string): void => {
        console.log(sortField, sortOrder);
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                if (a[sortField] === null) return 1;
                if (b[sortField] === null) return -1;
                if (a[sortField] === null && b[sortField] === null) return 0;
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", { numeric: true }) * (sortOrder === "asc" ? 1 : -1) 
                );
            });
            setTableData(sorted);
        }
    }

    return (
        <table className="table table-auto border w-full text-sm shadow-lg my-5">
            <TableHead {...{ columns, handleSorting }} />
            <TableBody {...{ columns, tableData }} />
        </table>
    );
}
