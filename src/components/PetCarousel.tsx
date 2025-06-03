
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, MapPin } from 'lucide-react';

const PetCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const pets = [
    {
      id: 1,
      name: "Bruno",
      type: "Golden Retriever Mix",
      age: "2 years",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop",
      personality: "Playful, Loyal, Gentle 🎾",
      story: "Found abandoned, now looking for a loving family!"
    },
    {
      id: 2,
      name: "Whiskers",
      type: "Persian Cat",
      age: "1 year",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=300&fit=crop",
      personality: "Calm, Affectionate, Smart 🧠",
      story: "Rescued kitten who loves cuddles and sunny spots!"
    },
    {
      id: 3,
      name: "Rocky",
      type: "Indie Street Dog",
      age: "3 years",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop",
      personality: "Brave, Protective, Loving 🛡️",
      story: "Street smart survivor ready for his forever home!"
    },
    {
      id: 4,
      name: "Mimi",
      type: "Labrador Mix",
      age: "4 years",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&h=300&fit=crop",
      personality: "Energetic, Friendly, Social 🌟",
      story: "Loves kids and other pets. Perfect family dog!"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pets.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pets.length) % pets.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Meet Your Future BFF! 🐕🐱
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            These adorable souls are waiting for their forever homes. Swipe to fall in love! 💕
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {pets.map((pet) => (
                <div key={pet.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-xl shadow-lg mx-4 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img 
                          src={pet.image} 
                          alt={pet.name}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-3xl font-bold text-gray-800">{pet.name}</h3>
                          <Heart className="text-red-500 hover:fill-current cursor-pointer hover:scale-110 transition-all duration-300" size={28} />
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          <p className="text-lg text-gray-700"><strong>Type:</strong> {pet.type}</p>
                          <p className="text-lg text-gray-700"><strong>Age:</strong> {pet.age}</p>
                          <div className="flex items-center text-lg text-gray-700">
                            <MapPin size={18} className="mr-2" />
                            {pet.location}
                          </div>
                          <p className="text-lg text-gray-700"><strong>Personality:</strong> {pet.personality}</p>
                        </div>
                        
                        <p className="text-gray-600 italic mb-6">"{pet.story}"</p>
                        
                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                          Adopt {pet.name} 💝
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {pets.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCarousel;
