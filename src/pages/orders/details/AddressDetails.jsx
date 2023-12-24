// src/AddressDetails.js
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AddressDetails = ({ address, name, latLon }) => {
  return (
    <div className='text-sm'>
      <p className="text-lg font-semibold mb-2">{name} Address
      {
        !latLon ? <a className='ml-1 underline text-emerald-500' target="_blank" href="https://maps.google.com"> <FontAwesomeIcon icon={faMapMarker} /> maps</a> : null       
      }
      </p>
      <p className='font-semibold'>{address.name} <span className='bg-gray-100 text-sm py-1 px-2 rounded-full shadow'>{address.type.toUpperCase()}</span> </p>
      <p>{address.house}, {address.area}</p>
      <p>{address.city}, {address.state}</p>
      <p>{address.pincode}</p>
      <p>+91-{address.mobile}</p>
    </div>
  );
};

export default AddressDetails;
