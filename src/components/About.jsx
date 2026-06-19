import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-4 py-1.5 rounded-full">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">Foundation</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Inspiring Story */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">
              Our Journey of Sparking Hope and Bringing Joy
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              Founded in 2018, **Bright Future Foundation** started with a small group of passionate volunteers teaching under a tree in a rural community in India. We saw that lack of access to educational resources, digital tools, and healthcare created immense disparities for children.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              Today, we have scaled our efforts to cover over 50 rural and suburban communities. By integrating education with health support, digital literacy, and women empowerment programs, we create a sustainable ecosystem where entire families thrive.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-sky-50 border border-sky-100">
                <Heart className="h-6 w-6 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Transparency</h4>
                  <p className="text-xs text-slate-500 mt-0.5">100% of donations reach beneficiaries directly.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <Award className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Recognitions</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Awarded best community impact NGO 2024.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Vision Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-50 to-white border border-sky-100 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-sky-500 text-white rounded-2xl shadow-md shadow-sky-500/20">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To provide quality education, life skills, resources, and growth opportunities to underprivileged children, allowing them to escape the cycle of poverty.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-emerald-500 text-white rounded-2xl shadow-md shadow-emerald-500/20">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To create an inclusive society where every child and individual, regardless of their background, can learn, grow, and achieve their full potential.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
