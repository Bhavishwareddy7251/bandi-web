'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Scroller from "@/components/dishes/scroller";
import Catalog from "@/components/dishes/catalog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Dishes() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-bandiwala-yellow to-bandiwala-brown flex flex-col justify-center items-center w-full p-20 space-y-5">
        <h1 className="text-bandiwala-white text-3xl sm:text-2xl text-shadow-lg text-center">Explore More Dishes from Bandiwala</h1>
        <p className="w-2/3 text-center text-bandiwala-white lg:text-xl text-shadow-sm">Street soul meets sizzling spice. Get a taste of our full spread -- handcrafted dishes inspired by India's most loved street stalls, reimagined with bold flavors and modern twist.</p>
        <div className="space-x-5 grid grid-cols-2">
          <Button className="bg-bandiwala-white text-bandiwala-orange py-8 px-10 text-md font-bold hover:bg-bandiwala-buttonHover hover:text-white">Our Picks</Button>
          <Button className="bg-bandiwala-white text-bandiwala-orange py-8 px-10 text-md font-bold hover:bg-bandiwala-buttonHover hover:text-white">Order Now</Button>
        </div>
        
        {/* Search Bar */}
        <div className="w-full max-w-2xl mt-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for dishes, cuisines, or vendors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 pl-12 rounded-full border-2 border-white bg-white/90 backdrop-blur-sm 
              focus:outline-none focus:border-bandiwala-orange text-gray-800 placeholder-gray-500"
            />
            <Search className="absolute left-4 text-gray-500" size={20} />
          </div>
        </div>
      </div>
      <Scroller />
      <Catalog searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}