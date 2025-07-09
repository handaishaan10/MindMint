
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Lavender Stress Relief Pouch',
      price: 12.99,
      category: 'Aromatherapy',
      image: '🌿',
      description: 'Natural lavender scent for instant calm',
      inStock: true,
    },
    {
      id: 2,
      name: 'Rainbow Squishy Stress Ball',
      price: 8.99,
      category: 'Fidget Tools',
      image: '🟣',
      description: 'Colorful stress ball for anxiety relief',
      inStock: true,
    },
    {
      id: 3,
      name: 'Color Therapy Cards Set',
      price: 15.99,
      category: 'Color Therapy',
      image: '🎨',
      description: 'Guided color meditation cards',
      inStock: true,
    },
    {
      id: 4,
      name: 'Cooling Gel Pack',
      price: 9.99,
      category: 'Cooling Therapy',
      image: '❄️',
      description: 'Soothing cooling relief for tension',
      inStock: false,
    },
    {
      id: 5,
      name: 'Mindfulness Fidget Cube',
      price: 11.99,
      category: 'Fidget Tools',
      image: '🔲',
      description: 'Six-sided fidget for focus and calm',
      inStock: true,
    },
    {
      id: 6,
      name: 'Essential Oil Roll-On',
      price: 13.99,
      category: 'Aromatherapy',
      image: '🫧',
      description: 'Portable aromatherapy for on-the-go',
      inStock: true,
    },
  ];

  const categories = ['All', 'Aromatherapy', 'Fidget Tools', 'Color Therapy', 'Cooling Therapy'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Individual Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Build your own wellness collection with our carefully selected sensory tools
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-square bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl">
                {product.image}
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-green-600 font-medium">{product.category}</span>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">${product.price}</span>
                  <button 
                    disabled={!product.inStock}
                    className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                      product.inStock 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    <span className="sm:hidden">{product.inStock ? 'Add' : 'Out'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
