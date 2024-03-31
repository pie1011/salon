"use client";
import { useState } from "react";
import TableBody from "@/components/dash-appts-tableBody";
import TableHead from "@/components/dash-appts-tableHead";

interface AppointmentsProps {
    appointmentList: any[];
}

export default function Appointments({ appointmentList }: AppointmentsProps) {

    const [tableData, setTableData] = useState(appointmentList);

    const columns = [
        { label: "Date", accessor: "date", sortable: true },
        { label: "Customer", accessor: "customerName", sortable: true },
        { label: "Service", accessor: "services", sortable: true },
        { label: "Stylist", accessor: "stylistEmail", sortable: true },
        { label: "Confirmed", accessor: "confirmed", sortable: true }
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
        <table className="table table-auto border w-full text-sm shadow-lg">
            <TableHead {...{ columns, handleSorting }} />
            <TableBody {...{ columns, tableData }} />
        </table>
    );
}
