'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ItemDetail() {
  const params = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const item = {
    id: params.id as string,
    name: "Sample Item",
    price: 199,
    description: "Sample description",
    image: "/path/to/default-image.jpg", // Use a real default image path
    category: "Street Food",
    vendor: "Sample Vendor"
  };

  const handleAddToCart = () => {
    addItem({
      ...item,
      quantity,
    });
  };

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-2xl font-bold">₹{item.price}</p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  <Minus size={20} />
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  <Plus size={20} />
                </button>
              </div>
              
              <Button 
                className="bg-bandiwala-orange hover:bg-bandiwala-red text-white px-8"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
