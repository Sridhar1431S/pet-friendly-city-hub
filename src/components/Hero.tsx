
import React from 'react';
import { ArrowRight, Heart, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300/30 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-300/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-green-300/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight">
            Making Cities<br />
            <span className="inline-block animate-pulse">Paw-some!</span> 🐾✨
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the techie tapori movement transforming urban spaces into pet paradise! 
            Every street dog deserves love, every pet parent deserves support. 🐶💻
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
              Join the Movement
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-lg">
              Volunteer Now
            </button>
            
            <button className="text-gray-700 hover:text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 underline decoration-wavy decoration-purple-400">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg">
              <Heart className="mx-auto mb-3 text-red-500" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">2,500+</h3>
              <p className="text-gray-600">Pets Rescued & Adopted 🏠</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg">
              <Users className="mx-auto mb-3 text-blue-500" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">10,000+</h3>
              <p className="text-gray-600">Active Volunteers 🙋‍♀️</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg">
              <MapPin className="mx-auto mb-3 text-green-500" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Pet-Friendly Cities 🌆</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
