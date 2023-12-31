import React, { useState } from "react";
import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
import { status } from "../../data/status";
import { taxIncluded } from "../../data/expenses";
import { formatDate } from "../../utils/FormatDate";
import DeleteModal from "../../components/Other/models/ModelDelete";
import { ImageItentifier } from "../../utils/ImageIdentifier";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
function BannerTable({ edit, onRefresh, collection, loading, dataHeader, data, currentPage, itemsPerPage }) {
  const [modalVisible, setModalVisible] = useState({ status: false });

  const deleteData = (id, title) => {
    if (id) {
      setModalVisible(
        {
          id: id,
          title: title,
          status: true,
          collection: collection
        }
      )
    }
  };
  return (
    <>
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
          <TableCell dataLabel="AMOUNT" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">
            <img src={ImageItentifier(row.image)} className="w-34 h-20 object-contain"/>
            </span>
          </TableCell>
          <TableCell dataLabel="TAX INCLUDED?" showLabel={true}>
            <span className={`font-medium text-sm text-gray-900 ${status.find(item => item.label === row.status).color} px-2 py-1 rounded-full shadow`}>
            { status.find(item => item.label === row.status).label }
            </span>
          </TableCell>
          <TableCell dataLabel="ACTIONS" showLabel={true}>
            <span className="space-x-1">
              <button onClick={() => edit(row)} className="bg-black text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm transition-all hover:bg-opacity-80 active:bg-opacity-50">
                Edit
              </button>
              <button
                  onClick={() => deleteData(row._id, 'banner')}
                  className="bg-red-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm transition-all hover:bg-opacity-80 active:bg-opacity-50"
                >
                  Delete
                </button>

            </span>
            </TableCell>
        </tr>
      ))}
    </Datatables>
    <DeleteModal
        onRefresh={() => onRefresh()}
        isModalVisible={modalVisible}
        setModalVisibility={(obj) => setModalVisible(obj)}
      />
    </>
  );
}

export default BannerTable;
