import React from "react";
import Navbar from "./../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPhone } from "@fortawesome/free-solid-svg-icons";

function Notifications() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

         {/* Main Content */}
         <div className="mainCard">
          <div className="border border-gray-200 bg-white py-4 px-6 rounded-md">
           <h1 className="text-lg font-semibold text-center">No notifications</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default Notifications;
