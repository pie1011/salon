"use client";
import { useState } from "react";
import TableBody from "@/components/dash-cust-tableBody";
import TableHead from "@/components/dash-cust-tableHead";
import { useSortableTable } from "@/lib/hooks/useSortableTable";

interface CustomersProps {
    customerList: any[];
}

export default function Customers({ customerList }: CustomersProps) {

    const [tableData, handleSorting] = useSortableTable(customerList);

    const columns = [
        { label: "Name", accessor: "name", sortable: true },
        { label: "Email", accessor: "email", sortable: true },
        { label: "Phone", accessor: "phone", sortable: true }
    ]

    return (
        <table className="table table-auto border w-full text-sm shadow-lg my-5">
            <TableHead {...{ columns, handleSorting }} />
            <TableBody {...{ columns, tableData }} />
        </table>
    );
}
