import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = [
    {
      id: 1,
      name: 'Rohan Sharma',
      role: 'Beneficiary (Scholarship Recipient)',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      content: 'Thanks to the support of the Bright Future Foundation, I received a full scholarship that allowed me to complete my senior secondary school. I am now pursuing my Bachelor of Computer Applications. My dreams are finally coming true.',
      rating: 5,
      tag: 'Beneficiary',
      tagColor: 'bg-emerald-100 text-emerald-700',
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Volunteer (Education Mentor)',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      content: 'Volunteering here for over two years has been a transformative experience. Teaching children digital literacy and seeing their eyes light up when they write their first line of code is something I will cherish forever. The transparency of this NGO is incredible.',
      rating: 5,
      tag: 'Volunteer',
      tagColor: 'bg-sky-100 text-sky-700',
    },
    {
      id: 3,
      name: 'Aanya Verma',
      role: 'Beneficiary (Women Empowerment Center)',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80',
      content: 'I enrolled in the sewing and tailoring course last year. Now, I have set up my own shop in my village, generating a steady income to pay for my children’s school supplies. I feel independent and empowered.',
      rating: 5,
      tag: 'Beneficiary',
      tagColor: 'bg-rose-100 text-rose-700',
    },
    {
      id: 4,
      name: 'Dr. Amit Mehta',
      role: 'Volunteer Doctor (Health Camps)',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
      content: 'Conducting pediatric medical checkups during our weekend camps allows me to give back to society in a meaningful way. BFF handles all organization and medicine supply flawlessly, ensuring the right children get direct, quality care.',
      rating: 5,
      tag: 'Volunteer',
      tagColor: 'bg-amber-100 text-amber-700',
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  // Auto scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-sky-100/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-emerald-100/30 rounded-full blur-2xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-4 py-1.5 rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">Transformation</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-16 shadow-lg">
          
          {/* Quote Icon Background */}
          <div className="absolute top-6 left-6 sm:top-12 sm:left-12 text-slate-200">
            <Quote className="h-16 w-16 stroke-[1.5] opacity-50" />
          </div>

          <div className="relative min-h-[220px] flex flex-col justify-between">
            {/* Story Card Content */}
            <div className="space-y-6">
              
              {/* Star Rating & Tag */}
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${stories[activeIndex].tagColor}`}>
                  {stories[activeIndex].tag}
                </span>
                <div className="flex space-x-1 text-amber-500">
                  {[...Array(stories[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Story Content */}
              <p className="text-slate-700 text-base sm:text-xl font-medium italic leading-relaxed">
                "{stories[activeIndex].content}"
              </p>

              {/* Profile Details */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/60">
                <img
                  src={stories[activeIndex].image}
                  alt={stories[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-sky-500 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    {stories[activeIndex].name}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    {stories[activeIndex].role}
                  </p>
                </div>
              </div>

            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-0 right-0 flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="p-2.5 bg-white hover:bg-slate-100 text-slate-600 rounded-full border border-slate-200 shadow-sm transition-colors focus:outline-none"
                aria-label="Previous story"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 bg-white hover:bg-slate-100 text-slate-600 rounded-full border border-slate-200 shadow-sm transition-colors focus:outline-none"
                aria-label="Next story"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-8 bg-sky-500' : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
