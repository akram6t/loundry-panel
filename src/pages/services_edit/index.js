import React, { useState } from "react";
import Navbar from "./../../components/Navbar/Index";
import { routes } from "../../utils/Constant";
import { useOutletContext, Link, useParams } from "react-router-dom";
import Linking from "../../components/Other/Linking";
import LINKING_DATA from "../../data/linking_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPlus, faRemove, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { status } from "../../data/status";
import { genders, servicesTypesData } from "../../data/services";
import { order_status } from "../../data/order_status";

function ServicesEdit() {
    const [sidebarToggle] = useOutletContext();
    const { id } = useParams();

    return (
        <>
            <main className="h-full">
                <Navbar toggle={sidebarToggle} />

                {/* Main Content */}
                <div className="mainCard">
                    <div className="py-5 flex items-center justify-between">
                        <span className="flex flex-col space-y-2">
                            <h2 className="font-bold text-3xl">Edit Service</h2>
                            <Linking data={LINKING_DATA().SERVICES_TYPE_PAGE} currentPage={id} />
                        </span>
                    </div>

                    {/* user details */}
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <h2 className="bg-emerald-600 text-white p-2">Service Details</h2>
                        <div className="p-3 items-center grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-4">


                            {/* input start */}
                            <div className="">
                                <label className="font-bold text-sm text-gray-600">
                                    Icon
                                </label>
                                <div className="flex mt-2">
                                    <img className="w-12 h-12" src={'https://loundryapp.akram.pw/icons/washonly.png'}></img>
                                    <button className="m-3 mb-5 hover:bg-opacity-80 active:bg-opacity-60 transition-all bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                                        Choose
                                    </button>
                                </div>
                            </div>
                            {/* input end */}
                            {/* input start */}
                            <div className="">
                                <label className="font-bold text-sm text-gray-600">
                                    Service Name
                                </label>
                                <input
                                    value={'LoundryApp'}
                                    type="text"
                                    className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Enter Name"
                                />
                            </div>
                            {/* input end */}

                            {/* input start */}
                            <div className="">
                                <label className="font-bold text-sm text-gray-600">
                                    Gender
                                </label>

                                <select className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1">
                                    {
                                        genders.map((item, index) => {
                                            return (<option value={item}>{item}</option>)
                                        })
                                    }
                                </select>
                            </div>
                            {/* input end */}
                            {/* input start */}
                            <div className="">
                                <label className="font-bold text-sm text-gray-600">
                                    Status
                                </label>

                                <select className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1">
                                    {
                                        status.map((item, index) => {
                                            return (<option value={item.label}>{item.label}</option>)
                                        })
                                    }
                                </select>
                            </div>
                            {/* input end */}


                        </div>
                    </div>
                    {/* end user details */}

                    <div className="h-3"></div>


                    {/* user details */}
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <h2 className="bg-emerald-600 text-white p-2">Service Types</h2>
                        <div className="p-3 items-center gap-x-4 gap-y-4">

                            <div className="rounded-md p-2 font-medium flex item-center bg-emerald-600 text-white">
                                <h2 className="flex-1">Service Type</h2>
                                <h2 className="flex-1">Service Price</h2>
                            </div>
                            {
                                [1, 2, 3].map(item => {
                                    return (
                                        <div className="flex item-center space-x-3 space-y-2 mt-1 border-b pb-2">
                                            <select className="flex-1 text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1">
                                                {
                                                    servicesTypesData.map((item, index) => {
                                                        return (<option value={item.name}>{item.name}</option>)
                                                    })
                                                }
                                            </select>
                                            <input type="number" value={0} className="flex-1 text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" />
                                            <button className="m-3 mb-5 hover:bg-opacity-80 active:bg-opacity-60 transition-all bg-red-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                                                <FontAwesomeIcon icon={faRemove} />
                                            </button>
                                        </div>
                                    )
                                })
                            }

                            <div className="mt-2 flex items-center justify-end">
                                <button className="hover:bg-opacity-80 active:bg-opacity-60 transition-all bg-black text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                                    <FontAwesomeIcon icon={faPlus} /> Add Service Type
                                </button>
                            </div>

                        </div>


                        <button className="m-3 mb-5 hover:bg-opacity-80 active:bg-opacity-60 transition-all bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                            Update
                        </button>
                    </div>
                    {/* end user details */}



                </div>
            </main>
        </>
    );
}

export default ServicesEdit;