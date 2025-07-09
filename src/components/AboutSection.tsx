
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
    <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About MindMint
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mental health shouldn't be a luxury. We believe every teenager deserves access to 
            effective, affordable tools for managing stress and anxiety. That's why we created 
            MindMint - to make wellness accessible, simple, and engaging.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We recognized that 1 out of every 3 teenagers is battling anxiety or stress, 
                yet mental health resources remain inaccessible to many. Through our personalized 
                sensory-based wellness kits, we're making mental wellness fun, affordable, and effective.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each product is carefully selected based on proven sensory therapy techniques, 
                designed to provide immediate relief and long-term coping strategies for stress management.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🧠💚</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Evidence-Based Approach</h4>
              <p className="text-gray-600">
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
