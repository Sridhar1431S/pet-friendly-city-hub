
import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import VolunteerForm from '../components/VolunteerForm';
import ImpactStories from '../components/ImpactStories';
import PetCarousel from '../components/PetCarousel';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation />
      <Hero />
      <ImpactStories />
      <PetCarousel />
      <VolunteerForm />
      <Footer />
    </div>
  );
};

export default Index;
