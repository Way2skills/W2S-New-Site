import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Code, Palette, ShoppingCart, Monitor } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'it-solutions' | 'skill-development'>('home');
  const [isVisible, setIsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

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

  return (
    <div className="font-['Poppins'] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-blue-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
              Way2Skills
            </h1>
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