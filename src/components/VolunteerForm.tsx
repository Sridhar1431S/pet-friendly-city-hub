
import React, { useState } from 'react';
import { Send, User, Mail, Phone, MapPin, Heart } from 'lucide-react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    role: '',
    experience: '',
    motivation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer Form Submitted:', formData);
    alert('Thank you for joining the movement! We\'ll contact you soon. 🐾');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      role: '',
      experience: '',
      motivation: ''
    });
  };

  const roles = [
    'Pet Rescue & Care',
    'Adoption Coordinator',
    'Community Outreach',
    'Social Media Manager',
    'Event Organizer',
    'Foster Parent',
    'Veterinary Support',
    'Transport Helper'
  ];

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Join the Pack! 🚀🐾
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to make a difference? Fill out this form and become part of our amazing volunteer family! 
            Every skill counts, every heart matters. 💪❤️
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your City"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                />
              </div>
            </div>

            <div className="relative">
              <Heart className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300 appearance-none bg-white"
              >
                <option value="">Select Your Preferred Role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>

            <div>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300 appearance-none bg-white"
              >
                <option value="">Previous Experience with Pets?</option>
                <option value="none">No previous experience (but lots of love!)</option>
                <option value="basic">Basic (pet owner/casual volunteer)</option>
                <option value="intermediate">Intermediate (regular volunteer/multiple pets)</option>
                <option value="advanced">Advanced (professional/rescue experience)</option>
              </select>
            </div>

            <div>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="What motivates you to join this movement? Tell us your story! 📝"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              Join the Movement
              <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              By joining, you agree to our mission of making cities more pet-friendly! 
              We promise to use your data responsibly. 🤝✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
