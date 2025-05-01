import React from 'react';
import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import { Button } from '../ui/button';

function NavigationSearch() {
  return (
    <div className="flex flex-row pb-8 border-b border-gray-300 mt-10 justify-between">
      <Tabs defaultValue="orders" className="flex justify-between items-center px-5">
          <TabsList className="flex justify-between items-center px-5">
            <TabsTrigger value="orders" className="text-sm data-[state=active]:border-bandiwala-orange data-[state=active]:border-b-2">
              <p className="text-gray-500 text-lg">Recommended</p>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="text-sm data-[state=active]:border-bandiwala-orange data-[state=active]:border-b-2">
              <p className="text-gray-500 text-lg">Snacks</p>
            </TabsTrigger>
            <TabsTrigger value="active" className="text-sm data-[state=active]:border-bandiwala-orange data-[state=active]:border-b-2">
              <p className="text-gray-500 text-lg">Chat & Pani Puri</p>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      <div className="flex flex-row justify-between items-center px-5">
        <div className="flex gap-5 list-none">
          <Button className="text-black font-bold text-lg">Photos</Button>
          <Button className="text-black font-bold text-lg">Reviews</Button>
        </div>
      </div>
    </div>
  );
}

export default NavigationSearch;