import bhaji from '@/assets/images/bhaji.jpg';
import FoodCard from '../FoodCard';

interface CatalogProps {
  searchQuery: string;
}

export default function Catalog({ searchQuery }: CatalogProps) {
  const dishes = [
    {
      id: 1,
      name: "Pani Puri Platter",
      image: bhaji,
      vendor: "Ali's Street Food Corner",
      price: 149,
      rating: 4.8,
      reviewCount: 120,
      category: "Street Food"
    },
    {
      id: 2,
      name: "Home Style Butter Chicken",
      image: bhaji,
      vendor: "Maya's Home Kitchen",
      price: 299,
      rating: 4.9,
      reviewCount: 98,
      category: "Home Food"
    },
    {
      id: 3,
      name: "Hakka Noodles Special",
      image: bhaji,
      vendor: "Street Wok Masters",
      price: 179,
      rating: 4.7,
      reviewCount: 86,
      category: "Street Food"
    },
    {
      id: 4,
      name: "Hyderabadi Chicken Biryani",
      image: bhaji,
      vendor: "Biryani House",
      price: 249,
      rating: 4.9,
      reviewCount: 156,
      category: "Home Food"
    },
    {
      id: 5,
      name: "Mumbai Vada Pav",
      image: bhaji,
      vendor: "Ali's Street Food Corner",
      price: 89,
      rating: 4.6,
      reviewCount: 75,
      category: "Street Food"
    },
    {
      id: 6,
      name: "Home-style Dal Makhani",
      image: bhaji,
      vendor: "Maya's Home Kitchen",
      price: 199,
      rating: 4.8,
      reviewCount: 64,
      category: "Home Food"
    },
  ];

  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dish.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dish.vendor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="section-container">
      {filteredDishes.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No dishes found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => (
            <div key={dish.id}>
              <FoodCard {...dish} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}