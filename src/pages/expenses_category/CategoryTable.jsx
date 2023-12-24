import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
import { status } from "../../data/status";
import { categoryType, taxIncluded } from "../../data/expenses";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
function ExpensesCategoryTable({ loading, dataHeader, data, currentPage, itemsPerPage }) {
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
          <TableCell dataLabel="CATEGORY" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">{row.category}</span>
          </TableCell>
          <TableCell dataLabel="TYPE" showLabel={true}>
            <span className={`font-medium text-sm text-gray-900 ${categoryType.find(item => item.label === row.type).color} px-2 py-1 rounded-full shadow`}>
            { categoryType.find(item => item.label === row.type).label }
            </span>
          </TableCell>
          <TableCell dataLabel="ACTIONS" showLabel={true}>
            <span className="space-x-1">
              <Link to={`/customers/${row.uid}`} className="bg-black text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm transition-all hover:bg-opacity-80 active:bg-opacity-50">
                Edit
              </Link>
              <Link to={`/customers/${row.uid}`} className="bg-red-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm transition-all hover:bg-opacity-80 active:bg-opacity-50">
                Delete
              </Link>
            </span>
            </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default ExpensesCategoryTable;