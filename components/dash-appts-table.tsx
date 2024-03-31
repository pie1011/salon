"use client";
import { useState } from "react";
import TableBody from "@/components/dash-appts-tableBody";
import TableHead from "@/components/dash-appts-tableHead";
import { useSortableTable } from "@/lib/hooks/useSortableTable";


interface AppointmentsProps {
    appointmentList: any[];
}

export default function Appointments({ appointmentList }: AppointmentsProps) {

    const [tableData, handleSorting] = useSortableTable(appointmentList);

    const columns = [
        { label: "Date", accessor: "date", sortable: true },
        { label: "Customer", accessor: "customerName", sortable: true },
        { label: "Service", accessor: "services", sortable: true },
        { label: "Stylist", accessor: "stylistEmail", sortable: true },
        { label: "Confirmed", accessor: "confirmed", sortable: true }
    ]

    return (
        <table className="table table-auto border w-full text-sm shadow-lg">
            <TableHead {...{ columns, handleSorting }} />
            <TableBody {...{ columns, tableData }} />
        </table>
    );
}
