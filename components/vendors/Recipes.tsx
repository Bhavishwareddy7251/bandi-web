import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import image from '@/assets/images/image.png'; // Make sure your image is in the 'public' directory or properly imported

function Recipes() {
  return (
    <div className="flex justify-between items-start p-10 rounded-lg shadow-lg bg-white max-w-screen-lg mx-auto my-5">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">Veg Fried Rice</h2>

        <div className="flex">
          <Star fill="gold" color="gold" className="text-xl"/>
          <Star fill="gold" color="gold" className="text-xl"/>
          <Star fill="gold" color="gold" className="text-xl"/>
          <Star fill="gold" color="gold" className="text-xl"/>
          <Star fill="gold" color="gold" className="text-xl"/>
        </div>

        <p className="font-bold mt-2">70/-</p>

        <p className="mt-5 leading-relaxed text-gray-800 max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Vestibulum et pellentesque viverra leo odio aenean mauris non.
          Morbi lacus et sed proin mauris pellentesque eget non. Sodales dictum vitae suspendisse condimentum est eu neque.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <Image
          src={image}
          alt="Veg Fried Rice"
          width={150} // Define a width
          height={150} // Define a height
          className="rounded-lg mt-4"
        />
        <button className="bg-orange-500 text-white font-bold py-2 px-8 rounded-lg cursor-pointer">Add</button>
      </div>
    </div>
  );
}

export default Recipes;