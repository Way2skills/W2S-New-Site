import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Code, Palette, ShoppingCart, Monitor, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'it-solutions' | 'skill-development' | 'offers'>('home');
  const [isVisible, setIsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [showPosterModal, setShowPosterModal] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setContactVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Digital Marketing Services',
      description: 'Boost your online presence with our comprehensive digital marketing strategies',
      icon: Monitor,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Website Design Services',
      description: 'Custom, responsive websites that convert visitors into customers',
      icon: Code,
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'White Label Solutions for E-commerce',
      description: 'Complete e-commerce solutions ready to launch under your brand',
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const courses = [
    {
      name: 'Java',
      price: '₹4,000',
      description: 'Master object-oriented programming with Java',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 'delay-100'
    },
    {
      name: 'Python',
      price: '₹3,500',
      description: 'Learn the most versatile programming language',
      gradient: 'from-cyan-500 to-teal-500',
      delay: 'delay-200'
    },
    {
      name: 'Full Stack Development',
      price: '₹25,000',
      description: 'Complete web development from frontend to backend',
      gradient: 'from-teal-500 to-green-500',
      delay: 'delay-300'
    },
    {
      name: 'J2EE',
      price: '₹15,000',
      description: 'Enterprise Java development framework',
      gradient: 'from-green-500 to-emerald-500',
      delay: 'delay-400'
    },
    {
      name: 'Photoshop',
      price: '₹4,000',
      description: 'Professional photo editing and design skills',
      gradient: 'from-emerald-500 to-blue-500',
      delay: 'delay-500'
    }
  ];

  const renderHome = () => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-800 bg-clip-text text-transparent mb-6 animate-fade-in">
          Welcome to Way2Skills
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Your gateway to professional IT solutions and skill development
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full">
        <button
          onClick={() => setActiveSection('it-solutions')}
          className={`group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-12 py-8 rounded-2xl text-xl md:text-2xl font-semibold shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/50 hover:shadow-2xl animate-bounce-in ${isVisible ? 'animate-delay-300' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          <span className="relative z-10">IT Solutions</span>
          <div className="absolute inset-0 ring-4 ring-blue-300/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        </button>

        <button
          onClick={() => setActiveSection('skill-development')}
          className={`group relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-12 py-8 rounded-2xl text-xl md:text-2xl font-semibold shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 hover:shadow-2xl animate-bounce-in ${isVisible ? 'animate-delay-500' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          <span className="relative z-10">Skill Development</span>
          <div className="absolute inset-0 ring-4 ring-purple-300/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        </button>
      </div>
    </div>
  );

  const renderITSolutions = () => (
    <div className="min-h-screen py-20 px-4 animate-slide-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <button
            onClick={() => setActiveSection('home')}
            className="mb-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 shadow-lg"
          >
            ← Back to Home
          </button>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent mb-6">
            IT Solutions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive technology solutions to elevate your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 border border-gray-100 animate-card-appear`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSkillDevelopment = () => (
    <div className="min-h-screen py-20 px-4 animate-slide-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <button
            onClick={() => setActiveSection('home')}
            className="mb-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 shadow-lg"
          >
            ← Back to Home
          </button>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent mb-6">
            Skill Development
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transform your career with our professional courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 animate-fade-up ${course.delay}`}
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${course.gradient} rounded-t-3xl`}></div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {course.name}
                </h3>
                <div className={`text-3xl font-bold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent mb-3`}>
                  {course.price}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>
              
              <button className={`w-full py-3 bg-gradient-to-r ${course.gradient} text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                Enroll Now
              </button>
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`absolute inset-0 ring-2 ring-blue-300/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOffers = () => (
    <div className="min-h-screen py-20 px-4 animate-slide-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <button
            onClick={() => setActiveSection('home')}
            className="mb-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 shadow-lg"
          >
            ← Back to Home
          </button>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent mb-6">
            Special Offers
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't miss out on our exclusive deals and promotions
          </p>
        </div>

        <div className="flex justify-center">
          <div className="group relative bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 max-w-md w-full text-center animate-bounce-in">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
              <span className="text-3xl">🎉</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
              Exclusive Offer!
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Click here to discover amazing deals and special promotions just for you!
            </p>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('View Offers Now button clicked - redirecting to: https://way2skills-vijayadas-bdbu.bolt.host');
                const url = 'https://way2skills-vijayadas-bdbu.bolt.host';
                try {
                  window.open(url, '_blank', 'noopener,noreferrer');
                } catch (error) {
                  console.error('Failed to open URL:', error);
                  // Fallback: try direct navigation
                  window.location.href = url;
                }
              }}
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-orange-600 hover:to-red-700 cursor-pointer"
            >
              View Offers Now!
            </button>
            
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Backup redirect button */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Having trouble with the button above?</p>
          <a
            href="https://way2skills-vijayadas-bdbu.bolt.host"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🔗 Direct Link to Offers
          </a>
        </div>
      </div>
    </div>
  );

  const handlePosterClick = () => {
    setShowPosterModal(false);
    window.open('https://way2skills-vijayadas-bdbu.bolt.host', '_blank');
  };

  return (
    <div className="font-['Poppins'] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      {/* Poster Modal */}
      {showPosterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-3xl p-8 max-w-2xl w-full mx-auto shadow-2xl animate-fade-in">
            <button
              onClick={() => setShowPosterModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <X className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent mb-4">
                Welcome to Way2Skills!
              </h2>
              <p className="text-gray-600 text-lg">
                Click on the poster below to explore our amazing opportunities
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group" onClick={handlePosterClick}>
              <img 
                src="poster.jpg" 
                alt="Way2Skills Poster" 
                className="w-full h-auto max-h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-blue-600 font-semibold shadow-lg cursor-pointer hover:bg-white hover:scale-105 transition-all duration-300">
                  Click to Explore!
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-blue-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/logo.png" 
                alt="Way2Skills Logo" 
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
                Way2Skills
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === 'home' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveSection('it-solutions')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === 'it-solutions' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                IT Solutions
              </button>
              <button
                onClick={() => setActiveSection('skill-development')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === 'skill-development' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => setActiveSection('offers')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === 'offers' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Offers 🎉
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSei_CH2aXgyrBdLUykt0XcKYm8kymphbNep5B1Flf9c5Qepzg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative overflow-hidden">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'it-solutions' && renderITSolutions()}
        {activeSection === 'skill-development' && renderSkillDevelopment()}
        {activeSection === 'offers' && renderOffers()}
      </main>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 transition-all duration-1000 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get In Touch
          </h2>
          
          <div className={`mb-12 transition-all duration-1000 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSei_CH2aXgyrBdLUykt0XcKYm8kymphbNep5B1Flf9c5Qepzg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-rotate-1"
            >
              <Mail className="w-6 h-6 mr-3" />
              Contact Us Form
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`flex flex-col items-center p-6 rounded-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-500 transform hover:scale-105 ${contactVisible ? 'animate-slide-in-left' : ''}`}>
              <Phone className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+91 8610093520</p>
            </div>
            
            <div className={`flex flex-col items-center p-6 rounded-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-500 transform hover:scale-105 ${contactVisible ? 'animate-slide-in-up' : ''}`}>
              <MapPin className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-blue-100">Namakkal</p>
            </div>
            
            <div className={`flex flex-col items-center p-6 rounded-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-500 transform hover:scale-105 ${contactVisible ? 'animate-slide-in-right' : ''}`}>
              <Mail className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">way2skills.learn@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Way2Skills. All rights reserved. | Empowering skills, Enabling success.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
