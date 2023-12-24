import React from "react";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
function ReportTable({ loading, dataHeader, data, currentPage, itemsPerPage }) {
  return (
    <Datatables loading={loading} dataHeader={dataHeader}>
      {data?.map((row, index) => (
        <tr
          key={index}
          className={`${index % 2 === 0 ? '' : 'bg-gray-100'} border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5`}
        >
          <TableCell dataLabel="S NO." showLabel={true}>
            <span className="font-medium text-sm text-gray-900">
              {(currentPage - 1) * itemsPerPage + index + 1}
            </span>
          </TableCell>
          <TableCell dataLabel="DATE" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">{row.date}</span>
          </TableCell>
          <TableCell dataLabel="CUSTOMER" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">{row.name}</span>
          </TableCell>
          <TableCell dataLabel="AMOUNT" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">₹ {row.amount}</span>
          </TableCell>
          <TableCell dataLabel="STATUS" showLabel={true}>
          <span style={{ backgroundColor: row.status.color }} className={`rounded-full py-1 px-3 text-xs font-semibold text-white`}>
              {row.status.status}
            </span>
          </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default ReportTable;
