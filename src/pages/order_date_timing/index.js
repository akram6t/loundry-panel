import React, { useEffect, useState } from "react";
import Navbar from "./../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import Paginate from "../../components/Datatables/Paginate";
import Linking from "../../components/Other/Linking";
import LINKINGDATA from "../../data/linking_data";
import EntryOptions from "../../components/Other/EntryOptions";
import SearchTable from "../../components/Other/SearchTable";
import TimingTable from "./TimingTable";
import { orderTimingHeader, ordersDateData, ordersTimingData } from "../../data/date_time";
import Date from "./Date";
import { Collections, DATE_ACC_DESC, URL_GET_LIST } from "../../utils/Constant";
import axios from "axios";
import { useSelector } from 'react-redux';

function OrderDateTime() {
  const [ordersTimingList, setOrdersTimingList] = useState([]);
  const [sidebarToggle] = useOutletContext();
  const [loading, setLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const getOrderTiming = async () => {
    setLoading(true);
    const params = {
      collection: Collections.ORDERS_TIMING,
      sort: JSON.stringify({date: DATE_ACC_DESC.ACCENDING}),
    }
    try {
      const response = await axios.get(URL_GET_LIST(params));

      if (response.status === 200) {
        console.log(response.data);
        setLoading(false);
        const {status, data, message} = response.data;
        if(status){
          setOrdersTimingList([...data]);
        }
      } else {
        console.error('Error fetching timing:', response.statusText);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error fetching timing:', error);
    }
  };


  useEffect(() => {
    getOrderTiming();
  }, []);

  const filteredData = ordersTimingList.filter(item =>
    item.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">

          {/* TopBar Start */}
          <div className="py-5 flex items-center justify-between">
            <div className="flex flex-col gap-y-2">
              <h2 className="font-bold text-3xl">Date & Time</h2>
              <Linking currentPage="Date & Time" data={LINKINGDATA().ADDONS} />
            </div>
          </div>
          {/* Topbar End */}

          <Date />

          <div className="h-5"></div>

          <div className="flex justify-end mb-3 pr-5">
            <button className="bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-md">
              + Add New
            </button>
          </div>
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            {/* FilterBar Start */}
            <div className="flex items-center justify-between pb-3">
              <EntryOptions onChange={(value) => setItemsPerPage(value)} />
              <div className="flex flex-wrap items-center justify-end gap-y-2 md:flex md:items-center md:gap-x-4">
                <SearchTable searchTerm={searchTerm} handleSearch={(e) => handleSearch(e)} />
                {/* <FilterDropDown filter={dateFilter} setFilter={(value) => setDateFilter(value)}/> */}
              </div>
            </div>
            {/* Filterbar End */}

            <TimingTable
              loading={loading}
              dataHeader={orderTimingHeader}
              data={paginatedData}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
            <Paginate rows={paginatedData} setPage={(page) => handlePageChange(page)} currentPage={currentPage} itemsPerPage={itemsPerPage} totalPage={totalPages} loading={loading} listLength={filteredData.length} />
          </div>
        </div>
      </main>
    </>
  );
}

export default OrderDateTime;