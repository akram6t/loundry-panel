import React, { useEffect, useState } from "react";
import Navbar from "./../../components/Navbar/Index";
import { Collections, URL_GET_LIST, routes } from "../../utils/Constant";
import { useOutletContext, Link, useParams } from "react-router-dom";
import Linking from "../../components/Other/Linking";
import LINKING_DATA from "../../data/linking_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { status } from "../../data/status";
import { useSelector }  from 'react-redux';
import axios from "axios";
import AppIndicator from "../../components/Other/AppIndicator";
import { ImageItentifier } from "../../utils/ImageIdentifier";

function GeneralSettings() {
  const [sidebarToggle] = useOutletContext();
  const [loading, setLoading] = useState(false);
  const order_status = useSelector((state) => state.orderstatus.value);
  const [ store, setStore ] = useState(null);

  const getStore = async () => {
    setLoading(true);
    const params = {
      collection: Collections.STORE,
      limit: 1
    }
    try {
      const response = await axios.get(URL_GET_LIST(params));

      if (response.status === 200) {
        setLoading(false);
        const {status, data, message} = response.data;
        if(status){
          setStore(data[0]);
          // console.log(data);
        }
      } else {
        console.error('Error fetching general details:', response.statusText);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error fetching general details:', error);
    }
  };


  useEffect(() => {
    getStore();
  }, []);

  const handleChangeValue = (name, value) => {

    if(name.includes('delivery_partner:')){
      let n = name.replace('delivery_partner:', '');
      setStore({
        ...store,
        delivery_partner:{
          [n]: value
        }
      })

      return;
    }

    if(name === 'latitude' || name === 'longitude'){
      setStore({
        ...store,
        latlon: {
          ...store.latlon,
          [name]: value
        }
      });
      return;
    }

    setStore({
      ...store,
      [name]: value
    });

  }


  if(store == null){
    return(
      <AppIndicator/>
    );
  }

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="py-5 flex items-center justify-between">
            <span className="flex flex-col space-y-2">
              <h2 className="font-bold text-3xl">General Settings</h2>
              <Linking data={LINKING_DATA().CUSTOMER_PAGE} currentPage={'General Settings'} />
            </span>
          </div>

          {/* user details */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <h2 className="bg-emerald-600 text-white p-2">General Details</h2>
            <div className="p-3 items-center grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-4">


              {/* input start */}
              <div className="">
                <label className="font-bold text-sm text-gray-600">
                  App Logo
                </label>
                <div className="mt-2 flex">
                  <img className="w-20 h-20" src={ImageItentifier(store?.logo)}></img>
                  <button className="m-3 mb-5 hover:bg-opacity-80 active:bg-opacity-60 transition-all bg-black text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                    Change
                  </button>
                </div>
              </div>
              {/* input end */}
              {/* input start */}
              <div className="">
                <label className="font-bold text-sm text-gray-600">
                  Application Name
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>
                <input
                  value={store?.name}
                  onChange={(e) => handleChangeValue('name', e.target.value)}
                  type="text"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Name"
                />
              </div>
              {/* input end */}

              {/* input start */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Email
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>
                <input
                    value={store?.email}
                    onChange={(e) => handleChangeValue('email', e.target.value)}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="loundry@gmail.com"
                />
              </div>
              {/* input end */}
              {/* input start */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Phone Number
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>

                <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                  {/* <FontAwesomeIcon icon={faPhoneI} />  */}
                  <span className="text-gray-600">+91 </span>
                </div>
                <input
                value={store?.phone_number}
                onChange={(e) => handleChangeValue('phone_number', e.target.value)}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-md placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Phone Number"
                />
              </div>
              {/* input end */}
              {/* input start */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Whatsapp Number
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>

                <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                  {/* <FontAwesomeIcon icon={faPhoneI} />  */}
                  <span className="text-gray-600">+91 </span>
                </div>
                <input
                value={store?.whatsapp_number}
                onChange={(e) => handleChangeValue('whatsapp_number', e.target.value)}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-md placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Phone Number"
                />
              </div>
              {/* input end */}
              {/* input start */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Address
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>
                <input
                    value={store?.address}
                    onChange={(e) => handleChangeValue('address', e.target.value)}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Address"
                />
              </div>
              {/* input end */}
              {/* input start */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Latitude
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>
                <input
                  value={store?.latlon?.latitude}
                  onChange={(e) => handleChangeValue('latitude', e.target.value)}
                  id="inputWithIcon"
                  type="number"
                  name="inputWithIcon"
                  placeholder="Enter latitude"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                />
              </div>
              {/* input end */}
              {/* input start */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Longitude
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>
                <input
                  value={store?.latlon?.longitude}
                  onChange={(e) => handleChangeValue('longitude', e.target.value)}
                  id="inputWithIcon"
                  type="number"
                  name="inputWithIcon"
                  placeholder="Enter longitude"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                />
              </div>
                                    {/* input start */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Service Fee
                  <span className="text-red-600 ml-2">*</span>
                </label>

                <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                  {/* <FontAwesomeIcon icon={faPhoneI} />  */}
                  <span className="font-bold text-gray-600">₹</span>
                </div>
                <input
                value={store?.service_fee}
                onChange={(e) => handleChangeValue('service_fee', e.target.value)}
                  id="inputWithIcon"
                  type="number"
                  name="inputWithIcon"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-md placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Phone Number"
                />
              </div>
              {/* input end */}
              {/* input end */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Maximum Distance in (K.M.)
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>
                <input
                    value={store?.distance}
                    onChange={(e) => handleChangeValue('distance', e.target.value)}
                  id="inputWithIcon"
                  type="number"
                  name="inputWithIcon"
                  placeholder="Distance between customer to store"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                />
              </div>
              {/* input end */}
               {/* input start */}
       <div className="">
         <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
           <div>
            <h5>Order cancelled from </h5>
            <h5>{order_status[0]?.tag} to
              <span className='ml-1 text-red-500'>*</span>
           </h5>
           </div>
         </label>
         <select
           className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1">
             <option value={-1}>Not Cancellable</option>
            {
                order_status?.map((item, index) => {
                    return(
                        <option value={index}>{item.tag}</option>
                    )
                })
            }
         </select>
       </div>
       {/* input end */}

            </div>


            <button className="m-3 mb-5 hover:bg-opacity-80 active:bg-opacity-60 transition-all bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
              Update
            </button>
          </div>
          {/* end user details */}



          <div className="h-5"></div>


          {/* user details */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <h2 className="bg-emerald-600 text-white p-2">Delivery Partner</h2>
            <div className="p-3 items-center grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-4">


              {/* input start */}
              <div className="">
                <label className="font-bold text-sm text-gray-600">
                  Delivery Partners Name
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>
                <input
                  id="defaultInput"
                  value={store?.delivery_partner?.name}
                  onChange={(e) => handleChangeValue('delivery_partner:name', e.target.value)}
                  type="text"
                  name="defaultInput"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Name"
                />
              </div>
              {/* input end */}

              {/* input start */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Title
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>
                <input
                  value={store?.delivery_partner?.title}
                  onChange={(e) => handleChangeValue('delivery_partner:title', e.target.value)}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Title"
                />
              </div>
              {/* input end */}
              {/* input start */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Phone Number
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>

                <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                  {/* <FontAwesomeIcon icon={faPhoneI} />  */}
                  <span>+91 </span>
                </div>
                <input
                  id="inputWithIcon"
                  value={store?.delivery_partner?.phone_number}
                  onChange={(e) => handleChangeValue('delivery_partner:phone_number', e.target.value)}
                  type="text"
                  name="inputWithIcon"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-md placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Phone Number"
                />
              </div>
              {/* input end */}
              {/* input start */}
              <div className="relative">
                <label className="font-bold text-sm text-gray-600">
                  Whatsapp Number
                  <span className="text-red-600 font-bold ml-2">*</span>
                </label>

                <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                  {/* <FontAwesomeIcon icon={faPhoneI} />  */}
                  <span>+91 </span>
                </div>
                <input
                value={store?.delivery_partner?.whatsapp_number}
                onChange={(e) => handleChangeValue('delivery_partner:whatsapp_number', e.target.value)}
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-md placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Enter Phone Number"
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

export default GeneralSettings;