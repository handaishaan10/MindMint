
import React from 'react';
import { Users, Heart, Target, Award } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Teens Helped' },
    { icon: Heart, value: '95%', label: 'Satisfaction Rate' },
    { icon: Target, value: '1 in 3', label: 'Teens With Anxiety' },
    { icon: Award, value: '4.9★', label: 'Average Rating' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About MindMint
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Mental health shouldn't be a luxury. We believe every teenager deserves access to 
            effective, affordable tools for managing stress and anxiety. That's why we created 
            MindMint - to make wellness accessible, simple, and engaging.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6">
                We recognized that 1 out of every 3 teenagers is battling anxiety or stress, 
                yet mental health resources remain inaccessible to many. Through our personalized 
                sensory-based wellness kits, we're making mental wellness fun, affordable, and effective.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each product is carefully selected based on proven sensory therapy techniques, 
                designed to provide immediate relief and long-term coping strategies for stress management.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠💚</div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Evidence-Based Approach</h4>
              <p className="text-sm sm:text-base text-gray-600">
                Our products are based on sensory integration therapy and mindfulness practices 
                proven to reduce anxiety and stress in teenagers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
