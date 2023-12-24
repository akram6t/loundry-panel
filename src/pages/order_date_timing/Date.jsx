import React from 'react'
import { ordersDateData } from '../../data/date_time'

const Date = () => {
  return (
     <div className="bg-white shadow rounded-lg overflow-hidden">
     <h2 className="bg-emerald-600 text-white p-2">Order Pickup & Drop Date</h2>
     <div className="p-3 items-center grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-4">

       {/* input start */}
       <div className="">
         <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
           Pickup Start Day
           <span className='ml-1 text-red-500'>*</span>
         </label>
         <select
           className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1">
            {
                ordersDateData?.map(item => {
                    let label = item === 0 ? 'Today' : item;
                    label = item === 1 ? 'Tomorrow' : label
                    return(
                        <option value={item}>{label}</option>
                    )
                })
            }
         </select>
       </div>
       {/* input end */}

       {/* input start */}
       <div className="relative">
         <label htmlFor="defaultInput" className="font-bold text-sm text-gray-600">
           Delivery Start Day
        <span className='ml-1 text-red-500'>*</span>
         </label>
         <select
           className="text-md placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1">
            {
                ordersDateData?.map(item => {
                    let label = item === 0 ? 'Today' : item;
                    label = item === 1 ? 'Tomorrow' : label
                    return(
                        <option value={item}>{label}</option>
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
  )
}

export default Date