
import React from 'react';
// import {useRouter} from 'next/navigation';
import { User, MapPin, Phone, Mail, Edit, LogOut, ShoppingBag, Heart, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';

const Profile = () => {
//   const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Profile Info */}
            <div className="w-full lg:w-1/3 space-y-6">
              <Card className="shadow-md border-gray-200">
                <CardHeader className="pb-4 pt-6 px-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200" />
                      <AvatarFallback className="bg-bandiwala-button text-white text-xl">RK</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-2xl font-bold">Rahul Kumar</CardTitle>
                    <p className="text-gray-500 mt-1">Member since April 2023</p>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-4 w-full"
                    >
                      <Edit size={16} className="mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-bandiwala-button h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Home</p>
                        <p className="text-sm text-gray-500">123 Gulmohar Avenue, Bandra West, Mumbai 400050</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-bandiwala-button h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Work</p>
                        <p className="text-sm text-gray-500">36 Business Park, Andheri East, Mumbai 400069</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-bandiwala-button h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">+91 9876543210</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-bandiwala-button h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">rahul.kumar@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md border-gray-200">
                <CardHeader className="pb-4 pt-6 px-6">
                  <CardTitle className="text-lg font-semibold">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-12 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                        <div>
                          <p className="text-sm font-medium">Visa ending in 4242</p>
                          <p className="text-xs text-gray-500">Expires 04/25</p>
                        </div>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Default</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-12 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
                        <div>
                          <p className="text-sm font-medium">Mastercard ending in 8353</p>
                          <p className="text-xs text-gray-500">Expires 09/26</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      + Add Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Button 
                variant="outline" 
                className="w-full border-red-300 text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </div>
            
            {/* Right Column - Order History & Favorites */}
            <div className="w-full lg:w-2/3">
              <Tabs defaultValue="orders" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="orders" className="text-sm">
                    <ShoppingBag size={16} className="mr-2" />
                    Order History
                  </TabsTrigger>
                  <TabsTrigger value="favorites" className="text-sm">
                    <Heart size={16} className="mr-2" />
                    Favorites
                  </TabsTrigger>
                  <TabsTrigger value="active" className="text-sm">
                    <Clock size={16} className="mr-2" />
                    Active Orders
                  </TabsTrigger>
                </TabsList>
                
                {/* Orders Tab */}
                <TabsContent value="orders" className="space-y-6">
                  <Card className="shadow-sm border-gray-200">
                    <CardContent className="p-0">
                      {[1, 2, 3].map((order) => (
                        <div key={order} className="border-b last:border-0 p-5">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold">Order #{202500 + order}</h3>
                              <p className="text-sm text-gray-500">{order === 1 ? 'Today' : order === 2 ? 'April 5, 2025' : 'March 28, 2025'}</p>
                            </div>
                            <span className={`text-xs px-3 py-1 rounded-full ${
                              order === 1 ? 'bg-green-100 text-green-800' : 
                              order === 2 ? 'bg-blue-100 text-blue-800' : 
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {order === 1 ? 'Delivered' : order === 2 ? 'Processing' : 'Completed'}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-14 h-14 bg-gray-100 rounded overflow-hidden">
                                <img src={`https://images.unsplash.com/photo-155994919${order}006-e582a627`} alt="Food" className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <p className="font-bold">{
                                  order === 1 ? 'Chandni Chowk Chaat Bhandar' : 
                                  order === 2 ? 'Sharma Aunty\'s Kitchen' : 
                                  'Mumbai Masala Street Food'
                                }</p>
                                <p className="text-sm text-gray-500">{order + 1} items • ₹{239 + order * 150}</p>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="hover:bg-gray-200">Details</Button>
                              {order < 3 && (
                                <Button size="sm" variant="secondary" className="bg-gray-200 hover:bg-gray-300">Reorder</Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  
                  <div className="flex justify-center">
                    <Button variant="outline" className="hover:bg-gray-200">View More Orders</Button>
                  </div>
                </TabsContent>
                
                {/* Favorites Tab */}
                <TabsContent value="favorites" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[1, 2, 3, 4].map((item) => (
                      <Card key={item} className="shadow-sm overflow-hidden">
                        <div className="relative h-40">
                          <img 
                            src={`https://images.unsplash.com/photo-1567${620000 + item * 1111}-acc${item}a58f6dd`} 
                            alt="Food" 
                            className="w-full h-full object-cover"
                          />
                          <Button 
                            size="icon" 
                            variant="outline" 
                            className="absolute top-2 right-2 bg-white h-8 w-8 rounded-full"
                          >
                            <Heart size={16} className="fill-bandiwala-button text-bandiwala-button" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">{
                            item === 1 ? 'Butter Chicken Thali' : 
                            item === 2 ? 'Pani Puri Platter' : 
                            item === 3 ? 'Vada Pav Combo' :
                            'Masala Dosa Special'
                          }</h3>
                          <p className="text-sm text-gray-500">{
                            item === 1 ? 'Sharma Aunty\'s Kitchen' : 
                            item === 2 ? 'Mumbai Chaat Center' : 
                            item === 3 ? 'Bombay Street Foods' :
                            'South Indian Delights'
                          }</p>
                          <div className="flex justify-between items-center mt-3">
                            <p className="font-medium">₹{120 + item * 50}</p>
                            <Button size="sm" className='text-white bg-gray-800 hover:bg-gray-600'>Order Again</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Active Orders Tab */}
                <TabsContent value="active" className="space-y-6">
                  <Card className="shadow-sm">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium">Order #2025001</h3>
                          <p className="text-sm text-gray-500">Today at 2:35 PM</p>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                          On the way
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 bg-gray-100 rounded overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1559847844-5315695dadae" alt="Food" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Chandni Chowk Chaat Bhandar</p>
                          <p className="text-sm text-gray-500">3 items • ₹389</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-4">
                        <div className="flex justify-between">
                          <p className="text-sm">Estimated delivery</p>
                          <p className="text-sm font-medium">3:15 PM - 3:30 PM</p>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full">
                          <div className="bg-bandiwala-button h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Order Placed</span>
                          <span>Preparing</span>
                          <span>On the way</span>
                          <span>Delivered</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gray-800 text-white hover:bg-gray-600">Track Order</Button>
                        <Button variant="outline" className="flex-1 hover:bg-gray-200">Contact Delivery Partner</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="text-center text-gray-500 p-4">
                    <p>We'll show your active orders here.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
