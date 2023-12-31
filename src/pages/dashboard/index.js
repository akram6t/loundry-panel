import React, { useEffect, useState } from "react";
import StatisticWidget from "../../components/Widget/Statistic.jsx";
import DashboardHeader from "../../components/Other/DashboardHeader.jsx";
import ScrolledCard from "../../components/Widget/ScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";
import PieChart from "../../components/Widget/PieChart.jsx";
import Footer from "../../components/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Collections, URL_GET_LIST, URL_GET_ORDERS__STATUS_COUNT } from "../../utils/Constant.js";
import ColorPicker from "../../components/Other/ColorPicker.jsx";
import { useColor } from "react-color-palette";

function Dashboard() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const order_status = useSelector((state) => state.orderstatus.value);
  const [ordersStatusList, setOrdersStatusList] = useState(order_status);

  const get_orders_status_count = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL_GET_ORDERS__STATUS_COUNT);

      if (response.status === 200) {
        // console.log(response.data);
        setLoading(false);
        const { status, data, message } = response.data;
        if (status) {
          console.log(data);
          handle_count_status(data);
          // setOrderStatus([...status]);
          // console.log(orderStatus);
        }
      } else {
        console.error('Error fetching expenses:', response.statusText);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error fetching expenses:', error);
    }
  };
  
    const getOrderStatus = async () => {
      setLoading(true);
      const params = {
        collection: Collections.ORDERS_STATUS,
        sort: JSON.stringify({position: 1}),
      }
      try {
        const response = await axios.get(URL_GET_LIST(params));
  
        if (response.status === 200) {
          setLoading(false);
          const {status, data, message} = response.data;
          if(status){
            // console.log(ordersStatusList);
            // setOrdersStatusList([...data]);
            // console.log(ordersStatusList);
            // get_orders_status_count();
          }
        } else {
          console.error('Error fetching orders status:', response.statusText);
        }
      } catch (error) {
        setLoading(false);
        console.error('Error fetching orders status:', error);
      }
    };


  const handle_count_status = (data) => {
    // console.log(ordersStatus);
    const st = ordersStatusList.map((status) => {
      // Find corresponding entry in statusCount
      const countEntry = data.find((count) => count._id === status.tag);
      
      let obj = {...status};
      // Update count in statuses or set to 0 if not found
      obj.count = countEntry ? countEntry.count : 0;
      return obj;
    });
    console.log(st);
    setOrdersStatusList(st);
  }


  useEffect(() => {
    get_orders_status_count();
    // getOrderStatus();
  }, []);

  const avatar =
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const [sidebarToggle] = useOutletContext();



  return (
    <>
    {/* <ColorPicker color={bg} onChange={(color) => setBg(color)}/> */}
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={avatar}
          user={{ name: "Dashboard" }}
        />

        {/* OS Kredit */}
        <div className="px-2 mx-auto mainCard">
          {/* <h1 className="text-slate-500 pb-3 text-base md:text-lg">
            Pencapaian OS Kredit
          </h1> */}

          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-x-8 gap-y-8">
            {ordersStatusList?.map((item, index) => (
              <ScrolledCard key={index} item={item} />
            ))}
          </div>

          <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div>
        </div>

        {/* Laba */}
        <div className="px-2 mx-auto mainCard">
          <div className="w-full gap-x-10 gap-y-10 flex flex-col-reverse lg:flex-row justify-between  overflow-hidden text-slate-700">
            <StatisticWidget className="flex-1 h-fit bg-white" />
            {/* < className="flex-1 h-fit bg-white" /> */}
            {/* <TodayOrders className="w-[60%] overflow-hidden bg-white border rounded-md" data={ordersData} dataHeader={ordersHeader}/> */}
            {/* <div className="flex-1">Today's Delivery</div> */}
            <PieChart data={ordersStatusList} className="bg-white" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Dashboard;
