import React from 'react';
import { ArrowRight, Gift, UserPlus } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark & Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero_bg.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-start z-10">
        
        {/* NGO Tag/Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 animate-fade-in">
          <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
          <span className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Rebuilding Lives, Inspiring Hope
          </span>
        </div>

        {/* Headings */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight max-w-3xl mb-6">
          Bright Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-300">
            Foundation
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl font-medium text-slate-200 mb-4 max-w-2xl">
          "Empowering Children Through Education and Opportunity"
        </p>
        
        <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
          We work towards transforming the lives of underprivileged children, empowering women, and fostering green, sustainable community growth across India.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#donate"
            className="glow-btn flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-xl shadow-orange-500/30 hover:scale-105 transition-all duration-300"
          >
            <Gift className="h-5 w-5" />
            <span>Donate Now</span>
          </a>
          <a
            href="#volunteer"
            className="flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold rounded-2xl hover:scale-105 transition-all duration-300"
          >
            <UserPlus className="h-5 w-5" />
            <span>Become a Volunteer</span>
          </a>
        </div>

        {/* Quick Stats Badges for Visual Interest */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-3xl">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">10k+</p>
            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-semibold mt-1">Children Supported</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400">50+</p>
            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-semibold mt-1">Villages Reached</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-sky-400">150+</p>
            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-semibold mt-1">Active Volunteers</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
