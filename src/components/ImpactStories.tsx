
import React from 'react';
import { Quote, Star } from 'lucide-react';

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      name: "Priya Sharma",
      city: "Mumbai",
      story: "Thanks to PawCity, my rescue pup Bruno found his forever home! The volunteer network here is incredible. 🐕❤️",
      image: "https://images.unsplash.com/photo-1494790108755-2616c179d7c9?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Arjun Patel",
      city: "Bangalore",
      story: "From street dog to therapy dog - Moti's journey inspired our entire tech community to volunteer! 🚀🐾",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Neha Gupta",
      city: "Delhi",
      story: "Our neighborhood transformed! 15 strays adopted, 3 feeding stations setup. PawCity made it possible! 🌟",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Real Stories, Real Impact 📖✨
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Every tail has a tale! Here are some paw-some success stories from our amazing community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <Quote className="absolute top-4 right-4 text-purple-200" size={32} />
              
              <div className="flex items-center mb-4">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-purple-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{story.name}</h4>
                  <p className="text-sm text-gray-600">{story.city}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              <p className="text-gray-700 italic mb-4">"{story.story}"</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
