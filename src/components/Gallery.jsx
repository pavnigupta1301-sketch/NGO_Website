import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Education', 'Healthcare', 'Environment', 'Community'];

  const galleryItems = [
    {
      id: 0,
      title: 'Active Classroom Session',
      category: 'Education',
      image: '/images/gallery_education.png',
      description: 'Underprivileged children studying math and language concepts at our center.',
    },
    {
      id: 1,
      title: 'Skill Training Workshop',
      category: 'Community',
      image: '/images/gallery_women.png',
      description: 'Empowering local women through skill building and financial independence.',
    },
    {
      id: 2,
      title: 'Pediatric Health Screening',
      category: 'Healthcare',
      image: '/images/gallery_health.png',
      description: 'Free medical and nutrition checkup camp in a rural village.',
    },
    {
      id: 3,
      title: 'Volunteers Planting Saplings',
      category: 'Environment',
      image: '/images/gallery_trees.png',
      description: 'Our environment team hosting a community tree plantation drive.',
    },
    {
      id: 4,
      title: 'Interactive Learning with Tech',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
      description: 'Children learning the basics of computing and typing in a smart lab.',
    },
    {
      id: 5,
      title: 'Clean Water Infrastructure',
      category: 'Healthcare',
      categoryFallback: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
      description: 'Installing sustainable water filtration systems in communities.',
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-4 py-1.5 rounded-full">
            Our Work in Action
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Photo <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">Gallery</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto mt-4"></div>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Glimpses of our ongoing programs, smiling children, community campaigns, and volunteers in action.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-500/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md transition-all duration-300 hover:shadow-xl relative"
            >
              {/* Image Container with Zoom */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white scale-75 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-sky-600 text-xs font-bold rounded-full shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Caption */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex flex-col justify-between p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white py-2 max-w-7xl mx-auto w-full">
            <div className="flex items-center space-x-2">
              <ImageIcon className="h-5 w-5 text-emerald-400" />
              <span className="font-semibold text-sm">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Image & Navigation */}
          <div className="relative flex items-center justify-center flex-grow max-w-5xl mx-auto w-full py-4">
            
            {/* Left navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Main Image */}
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Right navigation */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Bar / Description */}
          <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 text-white text-center max-w-3xl mx-auto w-full mb-4">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              {filteredItems[lightboxIndex].category}
            </span>
            <h3 className="text-xl font-bold mt-1">
              {filteredItems[lightboxIndex].title}
            </h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              {filteredItems[lightboxIndex].description}
            </p>
          </div>

        </div>
      )}

    </section>
  );
};

export default Gallery;
