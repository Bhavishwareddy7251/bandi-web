'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';

interface FoodCardProps {
  id: string;
  name: string;
  vendor: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  description?: string;
  category?: string;
}

export default function FoodCard(props: FoodCardProps) {
  const router = useRouter();
  const { addItem } = useCart();

  const handleNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/items/${props.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      description: props.description,
      category: props.category,
      vendor: props.vendor
    });
  };

  return <Card key={props.id} className="overflow-hidden card-hover border-gray-300" onClick={handleNavigate}>
    <div className="relative h-48">
      <Image
        src={props.image}
        alt={props.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full text-xs font-bold text-bandiwala-red">
        {props.category}
      </div>
    </div>
    <CardContent className="p-4">
      <h3 className="font-semibold text-lg">{props.name}</h3>
      <p className="text-gray-500 text-sm">{props.vendor}</p>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{props.rating}</span>
          <span className="text-xs text-gray-500 ml-1">({props.reviewCount} reviews)</span>
        </div>

        <p className="font-semibold">₹{props.price}</p>
      </div>

      <button
        className="mt-4 w-full bg-bandiwala-orange hover:bg-bandiwala-red text-white rounded-full py-2 font-medium transition-colors flex items-center justify-center"
        onClick={handleAddToCart}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add to Cart
      </button>
    </CardContent>
  </Card>
}