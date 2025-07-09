
import React from 'react';
import { Check, Star, ShoppingCart } from 'lucide-react';

export const KitShowcase = () => {
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

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wellness Kits
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated collections of sensory tools designed to help you find calm and reduce stress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit) => (
            <div 
              key={kit.id} 
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                kit.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
            >
              {kit.popular && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {kit.rating} ({kit.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{kit.name}</h3>
                <p className="text-gray-600 mb-4">{kit.description}</p>

                <div className="space-y-2 mb-6">
                  {kit.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">${kit.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">${kit.originalPrice}</span>
                  </div>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                    Save ${(kit.originalPrice - kit.price).toFixed(2)}
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all duration-200">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
