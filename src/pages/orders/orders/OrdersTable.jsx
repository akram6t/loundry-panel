import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../../../components/Datatables/Table";
import TableCell from "../../../components/Datatables/TableCell";
import { formatDate } from "../../../utils/FormatDate";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";

function OrdersTable({ loading, dataHeader, data, handleDelete, currentPage, itemsPerPage, ordersStatus }) {
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
          <TableCell dataLabel="ORDER INFO" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">
              {/* { */}
                {/* // row.orderinfo.map((val, index) => ( */}
                  <p key={index}>Order id: <span className="font-bold">{row.order_id}</span></p>
                  <p key={index}>Order date: <span className="font-bold">{formatDate(row.order_date)}</span></p>
                  <p key={index}>Delivery date: <span className="font-bold">{formatDate(row.delivery_date.date)}</span></p>
                {/* )) */}
              {/* } */}
            </span>
          </TableCell>
          <TableCell dataLabel="CUSTOMER" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">{row.pickup_address.name}</span>
          </TableCell>
          <TableCell dataLabel="AMOUNT" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">₹ {row.amount}</span>
          </TableCell>
          <TableCell dataLabel="PAYMENT" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">
              {/* { */}
                {/* // row.payment.map((val, index) => ( */}
                  <p key={index}>Total amount:<span className="ml-2 font-bold">₹ {row.amount + row.service_fee + (row.addons?.reduce((total, item) => total + item.price, 0) || 0)}</span></p>
                  <p key={index}>Paid amount:<span className="ml-2 font-bold">₹ {row.paid || 0}</span></p>
                {/* // )) */}
              {/* } */}
            </span>
          </TableCell>
          <TableCell dataLabel="ORDER STATUS" showLabel={true}>
            <span style={{ backgroundColor: ordersStatus?.find(item => item.tag === row.order_status) ? ordersStatus?.find(item => item.tag === row.order_status).color : '#929292' }} className={`rounded-full py-1 px-3 text-xs font-semibold text-white`}>
              {row.order_status}
            </span>
          </TableCell>
          <TableCell dataLabel="ACTIONS" showLabel={true}>
            <span className="space-x-1">
              <Link to={`/orders/${row.order_id}`} className="bg-black text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                View
              </Link>

              <Link to={'/user'} className="text-white bg-yellow-600 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                Print
              </Link>
            </span>
            </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default OrdersTable;
