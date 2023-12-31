import { faBars, faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Routes } from "react-router-dom";
import { routes } from './../../utils/Constant';

function Index({ toggle }) {
  const avatar =
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  return (
    <>
      <header className="">
        <div className="shadow-sm">
          <div className="relative flex w-full items-center px-5 py-2.5">
            <div className="flex-1">
              <p className="block md:hidden cursor-pointer">
                <FontAwesomeIcon icon={faBars} onClick={toggle} />
              </p>
            </div>
            <div className="">
              <ul className="flex flex-row space-x-4 items-center">
                <Link to={routes.MESSAGES}>
                  <span className="h-9 w-9 cursor-pointer text-gray-600">
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                </Link>
                <Link to={routes.NOTIFICATIONS}>
                  <span className="h-9 w-9 cursor-pointer text-gray-600">
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                </Link>
                <Link to={routes.GENERAL_SETTINGS}>
                  <span>
                    <img
                      className="rounded-full h-9 w-9 border cursor-pointer"
                      src={avatar}
                      alt="Avatar"
                    />
                  </span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Index;
