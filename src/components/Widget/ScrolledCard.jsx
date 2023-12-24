import React from "react";
import ProgressBar from "../Other/ProgressBar";

const url = 'https://loundryapp.akram.pw/';

function ScrolledCard({ item, ...props }) {
  return (
    <div style={{ backgroundColor: item.color }} className={`rounded-md text-sm flex-shrink-0 md:flex-shrink px-4 py-5 w-full text-slate-50 flex flex-row items-center justify-between`}>
      <div className="font-semibold">
        <h1 className="pb-3 text-3xl">{item.count != null ? item.count : '...'}</h1>
        <p>{item.tag} Orders</p>
      </div>
      <div>
        <img className="w-12 h-12 opacity-40" 
          src={url + item.icon}/>
      </div>
    </div>
  );
}

export default ScrolledCard;
