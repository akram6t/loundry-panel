import React, { useEffect, useState } from "react";
import Navbar from "./../../../components/Navbar/Index";
import { useOutletContext, useParams } from "react-router-dom";
import Linking from "../../../components/Other/Linking";
import LINKING_DATA from "../../../data/linking_data";
import AddressDetails from "./AddressDetails";
import ServicesTables from "./ServicesTables";

import { useSelector } from 'react-redux';
import { Collections, URL_GET_LIST } from "../../../utils/Constant";
import axios from "axios";
import { formatDate } from "../../../utils/FormatDate";
import formatTime from "../../../utils/FormatTime";
import ProgressBar from "./../../../components/Other/ProgressBar";

function OrderDetails() {
  const [sidebarToggle] = useOutletContext();
  const [ loading, setLoading ] = useState(false);
  const { order_id } = useParams();
  const [ details, setDetails ] = useState(null);

  const [status, setOrderStatus] = useState('');

  const order_status = useSelector((state) => state.orderstatus.value);

  
  const getOrder = async () => {
    setLoading(true);
    const params = {
      collection: Collections.ORDERS,
      filter: JSON.stringify({order_id: order_id}),
    }
    try {
      const response = await axios.get(URL_GET_LIST(params));

      if (response.status === 200) {
        setLoading(false);
        const {status, data, message} = response.data;
        if(status){
          setOrderStatus(data[0].order_status);
          setDetails(data[0]);
          // console.log(data);
        }
      } else {
        console.error('Error fetching order details:', response.statusText);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error fetching order details:', error);
    }
  };


  useEffect(() => {
    getOrder();
  }, []);


  const handleChangeStatus = (value) => {
    // setDateFilter({ ...dateFilter, order_status: value });
  }

  if(details == null){
    return(
      <div className="bg-slate-100 flex items-center justify-center h-screen w-full">
        <ProgressBar/>
      </div>
    );
  }

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="py-5 flex items-center justify-between">
            <span className="flex flex-col gap-y-2">
              <h2 className="font-bold text-3xl">Order Details</h2>
              <Linking data={LINKING_DATA().ORDERS_DETAILS_PAGE} currentPage={order_id} />
            </span>
          </div>

          <div className="w-full flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">

            <div className="flex-1 border bg-white border-gray-200 py-4 px-6 rounded-md">

              <div className="flex items-center justify-between">
                <div className="text-center sm:text-lg font-semibold text-emerald-700">
                  <h3>{details?.order_date && formatDate(details?.order_date)}</h3>
                  <h3>{details?.order_date && formatTime(details?.order_date)}</h3>
                </div>
                <h3 className="hidden sm:block sm:text-xl font-semibold text-emerald-700">{order_id}</h3>
                <select value={details?.order_status && status} onChange={(e) => setOrderStatus(e.target.value)} style={{ backgroundColor: order_status.find(item => item.tag == status).color }} className={`text-sm sm:text-lg text-white placeholder-gray-500 px-4 rounded-lg border border-gray-200 md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1`}>
                  {
                    order_status.map((item, index) => {
                      return (
                        <option className="bg-white text-gray-900" value={item.tag} key={index}>{item.tag}</option>
                      )
                    })
                  }
                </select>
              </div>

              {/* divider */}
              <div className="border border-emerald-100 mt-2"></div>

              <div className="mt-2 text-sm flex item-center justify-between">
                <div className="font-semibold">
                  <h1 className="text-lg text-black font-bold">Pickup Date</h1>
                  <h3><span className="font-medium">Date: </span>{formatDate(details.pickup_date.date)}</h3>
                  <h3><span className="font-medium">Time: </span>{details.pickup_date.time}</h3>
                </div>
                <div className="font-semibold">
                  <h1 className="text-lg text-black font-bold">Delivery Date</h1>
                  <h3><span className="font-medium">Date: </span>{formatDate(details.delivery_date.date)}</h3>
                  <h3><span className="font-medium">Time: </span>{details.delivery_date.time}</h3>
                </div>
              </div>


              {/* divider */}
              <div className="border border-emerald-100 mt-3"></div>

              <div className="mt-2 sm:flex space-y-3 sm:space-y-0 items-center justify-between">
                <AddressDetails  name={'Pickup'} address={details.pickup_address} />
                <AddressDetails  name={'Delivery'} address={details.delivery_address} />
              </div>


              {/* divider */}
              <div className="border border-emerald-100 mt-3 mb-3"></div>
              <ServicesTables data={detailsData} />


            </div>

            {/* right container */}
            <div className="w-full md:w-60 border bg-white border-gray-200 py-4 px-6 rounded-md">

            <div>
                <h1 className="font-semibold text-lg mb-2">Payment Details</h1>
                  <h2 className="flex items-center justify-between">Sub Total: <span className="font-semibold">₹ {detailsData.amount}</span></h2>
                  <h2 className="flex items-center justify-between">Service Fee: <span className="font-semibold">₹ {detailsData.service_fee}</span></h2>
                  {
                    detailsData.addons?.map((item, index) => (
                      <h2 key={index} className="flex items-center justify-between">{item.name}: <span className="font-semibold">₹ {item.price}</span></h2>
                    ))
                  }
                  <h2 className="flex items-center justify-between">Grand Total: <span className="font-semibold">₹ {detailsData.amount + detailsData.service_fee + (detailsData?.addons?.reduce((total, addon) => total + addon.price, 0) || 0)}</span></h2>
                </div>

                
              {/* divider */}
              <div className="border border-emerald-100 mt-3 mb-3"></div>

              <h1 className="text-lg font-semibold mt-2">Payments</h1>

              <div className="mt-4 flex-1"> {/* list */}
                {/* item */}
                <div className="bg-gray-100 border p-2 rounded-md">
                  <h2 className="font-semibold">₹ {32}</h2>
                  <h5>04 feb 2023 [Cash]</h5>
                </div>
                {/* item */}
              </div>

              <div className="space-y-1 mt-3">
                <button className="hover:bg-opacity-80 active:bg-opacity-50 transition-all w-full bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Add Payment
                </button>
                <button className="hover:bg-opacity-80 active:bg-opacity-50 transition-all w-full bg-black text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Print Invoice
                </button>
                <button className="hover:bg-opacity-80 active:bg-opacity-50 transition-all w-full bg-black text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Download Pdf
                </button>

              </div>

            </div>

          </div>


        </div>
      </main>
    </>
  );
}

export default OrderDetails;


const detailsData = {
  "_id": "6572265566b29db63bf03dec",
  "uid": "cC8B1tZcjzTVyTnp07Aj5fDWl0B2",
  "addons":[
    {
      "name": 'Extra care',
      "price": 10
    },
  ],
  "items": [
    {
      "_id": "654483a03dd85806ea9f6a4b",
      "image": "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      "name": "shirt",
      "quantity": 1,
      "gender": "Man",
      "services": [
        {
          "name": "Iron Only",
          "price": 10
        }
      ],
      "shopid": "65442ccd8674edea93aa8587"
    },
    {
      "_id": "654483a03dd85806ea9f6a4c",
      "image": "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      "name": "T-shirt",
      "quantity": 1,
      "gender": "men",
      "services": [
        {
          "name": "Iron Only",
          "price": 10
        }
      ],
      "shopid": "65442ccd8674edea93aa8587"
    }
  ],
  "pickup_date": {
    "date": "2023-12-07T20:07:38.023Z",
    "time": "07 - 08 pm"
  },
  "delivery_date": {
    "date": "2023-12-07T20:07:38.101Z",
    "time": "07 - 08 pm"
  },
  "pickup_address": {
    "_id": "6572060066b29db63bf03de8",
    "uid": "cC8B1tZcjzTVyTnp07Aj5fDWl0B2",
    "name": "Archit Vishvkarma",
    "mobile": "9131265569",
    "pincode": "452006",
    "state": "Madhya Pradesh",
    "city": "Indore",
    "house": "512",
    "area": "01, Chandan Nagar",
    "type": "home",
    "nearby": "Asad kirana dukaan ke pass"
  },
  "delivery_address": {
    "_id": "6572060066b29db63bf03de8",
    "uid": "cC8B1tZcjzTVyTnp07Aj5fDWl0B2",
    "name": "Archit Vishvkarma",
    "mobile": "9131265569",
    "pincode": "452006",
    "state": "Madhya Pradesh",
    "city": "Indore",
    "house": "512",
    "area": "01, Chandan Nagar",
    "type": "home",
    "nearby": "Asad kirana dukaan ke pass"
  },
  "payment_type": "Cash on Delivery",
  "service_fee": 5,
  "order_status": "Confirmed",
  "amount": 20,
  "order_id": "ORD_CC8B3ACRQY",
  "order_date": "2023-12-07T20:08:53.188Z",
  "storeid": "65442ccd8674edea93aa8587",
  "storename": "Golden Award"
}