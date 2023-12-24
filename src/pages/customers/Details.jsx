import React, { useState } from "react";
import Navbar from "./../../components/Navbar/Index";
import { routes } from "../../utils/Constant";
import { useOutletContext, Link, useParams } from "react-router-dom";
import Linking from "../../components/Other/Linking";
import LINKING_DATA from "../../data/linking_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { status } from "../../data/status";

function CustomerDetails() {
  const [sidebarToggle] = useOutletContext();
  const { uid } = useParams();

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="py-5 flex items-center justify-between">
            <span className="flex flex-col space-y-2">
              <h2 className="font-bold text-3xl">Customer Details</h2>
              <Linking data={LINKING_DATA().CUSTOMER_DETAILS_PAGE} currentPage={'Akram Khan'} />
            </span>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <h2 className="bg-emerald-600 text-white p-2">Orders Details</h2>
            <div className="p-3 items-center grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-4">


              <div className="">
                <img src="https://picsum.photos/200/200" className="mx-auto shadow w-24 h-24 rounded-full"></img>
              </div>

              {/* input start */}
              <div className="">
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  Email
                </label>
                <input disabled
                  value={'comeingame72@gmail.com'}
                  id="defaultInput"
                  type="text"
                  name="defaultInput"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Customer Name"
                />
              </div>
              {/* input end */}

              {/* input start */}
              <div className="relative">
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  Password
                </label>

                {/* <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                  {/* <FontAwesomeIcon icon={faPhoneI} />  */}
                {/* <span>+91 </span> */}
                {/* </div>  */}
                <input disabled
                  value={'user1234'}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Phone Number"
                />
              </div>
              {/* input end */}

              {/* input start */}
              <div className="">
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  Customer Name <span className="text-red-600 text-md">*</span>
                </label>
                <input
                  // value={dateFilter.start}
                  id="defaultInput"
                  type="text"
                  // onChange={(e) => setDateFilter({...dateFilter, start: e.target.value})}
                  name="defaultInput"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Customer Name"
                />
              </div>
              {/* input end */}

              {/* input start */}
              <div className="relative">
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  Phone Number
                  <span className="text-red-600 text-md">*</span>
                </label>

                <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                  {/* <FontAwesomeIcon icon={faPhoneI} />  */}
                  <span>+91 </span>
                </div>
                <input
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-md placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Phone Number"
                />
              </div>
              {/* input end */}

              {/* input status start */}
              <div>
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  Status <span className="text-red-600 text-md">*</span>
                </label>
                <select className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1">
                  {
                    status.map((item, index) => (
                      <option key={index} value={item.label}>{item.label}</option>
                    ))
                  }
                </select>
              </div>
              {/* input status end */}

            </div>

                          
            <button className="m-3 mb-5 hover:bg-opacity-80 active:bg-opacity-60 transition-all bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
              <FontAwesomeIcon className="mr-2" icon={faSave}/> Update
            </button>


          </div>


        </div>
      </main>
    </>
  );
}

export default CustomerDetails;