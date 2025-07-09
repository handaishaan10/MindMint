
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-medium">Making Mental Wellness Accessible</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Stress Relief Made
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent block">
              Simple & Playful
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            1 in 3 teenagers battle anxiety and stress. MindMint makes mental wellness accessible through 
            personalized sensory-based wellness kits designed to help you relax, unwind, and feel better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              <span>Shop Wellness Kits</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-medium hover:bg-green-50 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="relative">
          <div className="bg-gradient-to-r from-green-200 to-blue-200 rounded-3xl p-8 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🟣</span>
                </div>
                <p className="text-sm text-gray-700">Squishy Balls</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌿</span>
                </div>
                <p className="text-sm text-gray-700">Lavender Pouches</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <p className="text-sm text-gray-700">Color Therapy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">❄️</span>
                </div>
                <p className="text-sm text-gray-700">Cooling Packs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
