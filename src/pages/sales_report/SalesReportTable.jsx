import React from "react";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
function SalesReportTable({ loading, dataHeader, data, currentPage, itemsPerPage }) {
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
          <TableCell dataLabel="ORDER" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">{row.order}</span>
          </TableCell>
          <TableCell dataLabel="CUSTOMER" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">{row.customer}</span>
          </TableCell>
          <TableCell dataLabel="SUB TOTAL" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">₹ {row.sub_total}</span>
          </TableCell>
          <TableCell dataLabel="ADDON TOTAL" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">₹ {row.addon_total}</span>
          </TableCell>
          <TableCell dataLabel="DISCOUNT" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">₹ {row.discount}</span>
          </TableCell>
          {/* <TableCell dataLabel="TAX AMOUNT" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">₹ {row.tax_amount}</span>
          </TableCell> */}
          <TableCell dataLabel="GROSS TOTAL" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">₹ {row.gross_total}</span>
          </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default SalesReportTable;
