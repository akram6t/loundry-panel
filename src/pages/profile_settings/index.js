import React, { useState } from "react";
import Navbar from "./../../components/Navbar/Index";
import { routes } from "../../utils/Constant";
import { useOutletContext, Link, useParams } from "react-router-dom";
import Linking from "../../components/Other/Linking";
import LINKING_DATA from "../../data/linking_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { status } from "../../data/status";

function ProfileSettings() {
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
              <h2 className="font-bold text-3xl">Profile Settings</h2>
              <Linking data={LINKING_DATA().CUSTOMER_PAGE} currentPage={'Profile Settings'} />
            </span>
          </div>

          {/* user details */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <h2 className="bg-emerald-600 text-white p-2">Admin Details</h2>
            <div className="p-3 items-center grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-4">

              
              {/* input start */}
              <div className="">
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  Admin Name
                </label>
                <input
                  value={'Site Name'}
                  id="defaultInput"
                  type="text"
                  name="defaultInput"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Name"
                />
              </div>
              {/* input end */}

              {/* input start */}
              <div className="relative">
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  Admin Email
                </label>
                <input
                //   value={'user1234'}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Email Name"
                />
              </div>
              {/* input end */}
                {/* input start */}
                <div className="relative">
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  Username
                </label>
                <input
                //   value={'user1234'}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Name"
                />
              </div>
              {/* input end */}

            </div>

                          
            <button className="m-3 mb-5 hover:bg-opacity-80 active:bg-opacity-60 transition-all bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                Update
            </button>
          </div>
          {/* end user details */}

                   
            {/* user details */}
            <div className="bg-white shadow rounded-lg overflow-hidden mt-5">
            <h2 className="bg-emerald-600 text-white p-2">Change Password</h2>
            <div className="p-3 items-center grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-4">

              {/* input start */}
              <div className="">
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  Current Password
                </label>
                <input
                //   value={'comeingame72@gmail.com'}
                  id="defaultInput"
                  type="text"
                  name="defaultInput"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Current Password"
                />
              </div>
              {/* input end */}

              {/* input start */}
              <div className="relative">
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  New Password
                </label>
                <input
                //   value={'user1234'}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="New Password"
                />
              </div>
              {/* input end */}
                {/* input start */}
                <div className="relative">
                <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
                  Confirm Password
                </label>
                <input
                //   value={'user1234'}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Confirm Password"
                />
              </div>
              {/* input end */}
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

export default ProfileSettings;