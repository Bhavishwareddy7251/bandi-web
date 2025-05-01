'use client'
import React, { useState } from 'react';
import {Clock,Star,MapPin,CircleCheckBig} from 'lucide-react'
import Image from 'next/image';
import bandi from '@/assets/images/chat_bandi.png';

function Profile() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-[#fff5e2b7] h-[300px] rounded-b-[150px] flex justify-around'>
      <div className='flex flex-col mt-4 gap-2'>
        <div className='flex items-center justify-between gap-32'>
          <h2 className='text-[35px] text-black m-0'>Lorem Ipsum</h2>
          <div className='bg-[#279400] text-white w-20 h-[25px] text-center rounded-lg pt-1 flex items-baseline justify-evenly'>
            <span className="self-center">4.5</span>
            <Star fill="#fff" size={18} className="text-white ml-1 text-sm" />
          </div>
        </div>

        <h3 className='text-[18px] text-[#8f8989] font-extralight flex items-center m-0'>
          <MapPin className="text-orange-500 mr-2" />
          Lorem ipsum dolor sit amet
        </h3>

        <h3 className='flex self-start flex-row text-[18px] text-[#8f8989] font-extralight m-0'>Hygiene Rating: <div className="flex flex-row"><Star fill="gold" color="gold"/><Star fill="gold" color="gold"/><Star fill="gold" color="gold"/></div></h3>

        <div className='flex self-start gap-4 items-center justify-center'>
          <p className="bg-green-600 px-10 py-2 rounded-lg text-white">Open</p>
          <p className='text-[14px] text-[#8f8989] m-0'>10 A.M to 10 P.M</p>
        </div>

        <div className='mt-2 flex gap-5 pb-4 border-b-[1.5px] border-[#ccc]'>
          <label className='flex items-center gap-2 text-[16px] text-[#333]'>
            <CircleCheckBig className="text-sm text-green-600" />
            Pickup
          </label>
          <label className='flex items-center gap-2 text-[16px] text-[#333]'>
            <CircleCheckBig className="text-sm text-green-600" />
            Delivery
          </label>
        </div>

        <div className='flex items-center gap-4'>
          <Clock className="text-[#555]" />
          <p className='m-0'>15 - 20 mins - 1.5km</p>
        </div>
      </div>

      {/* <div>
        <img src={bandi} alt="bandi" className='w-[200px] object-cover mt-7' />
      </div> */}

      <div>
        <Image
            src={bandi} 
            alt="Bandi Image"
            className="w-[200px] object-cover mt-7"
          />
      </div>
    </div>
  );
}

export default Profile;