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
        { label: "Date", accessor: "date" },
        { label: "Customer", accessor: "customerName" },
        { label: "Service", accessor: "services" },
        { label: "Stylist", accessor: "stylistEmail" },
        { label: "Confirmed", accessor: "confirmed" }
    ]

    return (
        <table className="table table-auto border w-full text-sm shadow-lg">
            <TableHead columns={columns} />
            <TableBody columns={columns} tableData={tableData} />
        </table>
    );
}
