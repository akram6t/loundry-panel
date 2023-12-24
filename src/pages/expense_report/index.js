import React, { useEffect, useState } from "react";
import Navbar from "./../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import Paginate from "../../components/Datatables/Paginate";
import { expenseReportHeader, expenseReportData } from './../../data/expense_report';
import Linking from "../../components/Other/Linking";
import LINKINGDATA from "../../data/linking_data";
import EntryOptions from "../../components/Other/EntryOptions";
import SearchTable from "../../components/Other/SearchTable";
import { DateInInput } from "../../utils/DateInInput";
import ExpenseReportTable from "./ExpenseReportTable";

function ExpenseReport() {
    const [expenseReportList, setExpenseReportList] = useState(expenseReportData);
    const [sidebarToggle] = useOutletContext();
    const [loading, setLoading] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [ dateFilter, setDateFilter ] = useState({
        start: DateInInput(new Date()),
        end: DateInInput(new Date()),
    });

    const filteredData = expenseReportList.filter(item =>
        item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

    useEffect(() => {
        // get data
    }, [dateFilter]);

    return (
        <>
            <main className="h-full">
                <Navbar toggle={sidebarToggle} />

                {/* Main Content */}
                <div className="mainCard">

                    {/* TopBar Start */}
                    <div className="py-5 flex items-center justify-between">
                        <div className="flex flex-col gap-y-2">
                            <h2 className="font-bold text-3xl">Expense Report</h2>
                            <Linking currentPage="Expense Report" data={LINKINGDATA().ORDERS_PAGE} />
                        </div>
                    </div>
                    {/* Topbar End */}

                    {/* Report Picker */}
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <h2 className="bg-emerald-600 text-white p-2">Expense Details</h2>
                        <div className="p-3 items-center grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-x-4 gap-y-4">
                            <div className="">
                                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                                    Start Date <span className="text-red-600 text-md">*</span>
                                </label>
                                <input
                                value={dateFilter.start}
                                    id="defaultInput"
                                    type="date"
                                    onChange={(e) => setDateFilter({...dateFilter, start: e.target.value})}
                                    name="defaultInput"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Default Input"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                                    End Date <span className="text-red-600 text-md">*</span>
                                </label>
                                <input
                                    id="defaultInput"
                                    value={dateFilter.end}
                                    onChange={(e) => setDateFilter({...dateFilter, end: e.target.value})}
                                    type="date"
                                    name="defaultInput"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Default Input"
                                />
                            </div>
                        </div>
                    </div>
                    {/*End Report Picker */}

                    <div className="mt-5 border w-full border-gray-200 bg-white py-4 px-6 rounded-md">

                        {/* FilterBar Start */}
                        <div className="flex items-center justify-between pb-3">
                            <EntryOptions onChange={(value) => setItemsPerPage(value)} />
                            <div className="flex flex-wrap items-center justify-end gap-y-2 md:flex md:items-center md:gap-x-4">
                                <SearchTable searchTerm={searchTerm} handleSearch={(e) => handleSearch(e)} />
                                {/* <FilterDropDown filter={dateFilter} setFilter={(value) => setDateFilter(value)}/> */}
                            </div>
                        </div>
                        {/* Filterbar End */}

                        <ExpenseReportTable
                            loading={loading}
                            dataHeader={expenseReportHeader}
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

export default ExpenseReport;