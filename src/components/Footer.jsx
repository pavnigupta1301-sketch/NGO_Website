import React, { useState } from 'react';
import { Heart, Send, CheckCircle, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address.');
    } else {
      setError('');
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact Dashboard', href: '#impact' },
    { name: 'Photo Gallery', href: '#gallery' },
  ];

  const programLinks = [
    { name: 'Education Support', href: '#programs' },
    { name: 'Digital Literacy', href: '#programs' },
    { name: 'Women Empowerment', href: '#programs' },
    { name: 'Health & Nutrition', href: '#programs' },
    { name: 'Environmental Care', href: '#programs' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Col 1: About Foundation */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-sky-500 to-emerald-500 p-2 rounded-xl text-white">
                <Heart className="h-5 w-5 fill-current" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Bright Future <span className="text-emerald-500">Foundation</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              A registered non-profit organization dedicated to fostering positive growth through kids education, women vocational skills, healthcare support, and tree planting across India.
            </p>
            {/* Social Handles */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2.5 bg-slate-800 hover:bg-sky-600 hover:text-white rounded-xl transition-all duration-300 text-slate-400" aria-label="Facebook">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-slate-800 hover:bg-sky-500 hover:text-white rounded-xl transition-all duration-300 text-slate-400" aria-label="Twitter">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-slate-800 hover:bg-pink-600 hover:text-white rounded-xl transition-all duration-300 text-slate-400" aria-label="Instagram">
                <svg className="h-4.5 w-4.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-slate-800 hover:bg-sky-700 hover:text-white rounded-xl transition-all duration-300 text-slate-400" aria-label="LinkedIn">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-sky-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Programs</h4>
            <ul className="space-y-3 text-sm">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-emerald-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Newsletter Subscription</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Subscribe to our monthly newsletter to stay updated on our drives, milestones, and volunteer meets.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 text-white text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                {error && <p className="text-rose-400 text-xs font-bold pl-1">{error}</p>}
              </form>
            ) : (
              <div className="p-4 bg-emerald-950/40 border border-emerald-900/50 rounded-xl text-emerald-400 text-sm flex items-center space-x-2 animate-scale-up">
                <CheckCircle className="h-5 w-5 shrink-0" />
                <span>Subscribed successfully! Thank you.</span>
              </div>
            )}
          </div>

        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} Bright Future Foundation. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:underline hover:text-slate-400">Terms of Use</a>
            <a href="#" className="hover:underline hover:text-slate-400">CSR Registration</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
