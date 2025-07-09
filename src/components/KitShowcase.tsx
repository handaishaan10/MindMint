
import React from 'react';
import { Check, Star, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const KitShowcase = () => {
  const { toast } = useToast();

  const kits = [
    {
      id: 1,
      name: 'Calm Starter Kit',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 127,
      items: ['Lavender Pouch', 'Stress Ball', 'Breathing Guide'],
      description: 'Perfect for beginners seeking stress relief',
      popular: false,
    },
    {
      id: 2,
      name: 'Complete Wellness Kit',
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.9,
      reviews: 203,
      items: ['All Sensory Items', 'Color Therapy Cards', 'Cooling Pack', 'Mindfulness Journal'],
      description: 'Our most comprehensive anxiety relief solution',
      popular: true,
    },
    {
      id: 3,
      name: 'Teen Tranquil Kit',
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.7,
      reviews: 89,
      items: ['Fidget Tools', 'Aromatherapy Set', 'Stress Relief Guide'],
      description: 'Specially curated for teenagers',
      popular: false,
    },
  ];

  const handleAddToCart = (kit: typeof kits[0]) => {
    toast({
      title: "Added to Cart!",
      description: `${kit.name} has been added to your cart.`,
    });
    console.log(`Added ${kit.name} to cart`);
  };

  return (
    <section id="wellness-kits" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Wellness Kits
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Curated collections of sensory tools designed to help you find calm and reduce stress
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {kits.map((kit) => (
            <div 
              key={kit.id} 
              className={`relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                kit.popular ? 'ring-2 ring-green-500 sm:scale-105' : ''
              }`}
            >
              {kit.popular && (
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-xs sm:text-sm text-gray-600">
                    {kit.rating} ({kit.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{kit.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{kit.description}</p>

                <div className="space-y-2 mb-4 sm:mb-6">
                  {kit.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">${kit.price}</span>
                    <span className="text-base sm:text-lg text-gray-500 line-through ml-2">${kit.originalPrice}</span>
                  </div>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs sm:text-sm font-medium">
                    Save ${(kit.originalPrice - kit.price).toFixed(2)}
                  </span>
                </div>

                <button 
                  onClick={() => handleAddToCart(kit)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all duration-200"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
