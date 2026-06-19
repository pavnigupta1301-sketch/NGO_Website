import React, { useState } from 'react';
import { BookOpen, Laptop, Users, HeartPulse, TreePine, ArrowRight, X, Sparkles, Check } from 'lucide-react';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: 'Education Support',
      description: 'Scholarships, school supplies, free textbooks, and daily after-school academic tutoring for children.',
      longDescription: 'Our Education Support program is designed to bridge academic gaps. We identify deserving students from low-income communities and offer them annual scholarships, distribution of learning kits (backpacks, stationery, notebooks), and enroll them in community tutoring centers staffed by passionate local teachers.',
      details: ['120 Community Learning Centers', 'Free annual kits and books', 'Mentorship and college prep support', 'Remedial coaching for board exams'],
      icon: BookOpen,
      color: 'sky',
      bgGlow: 'rgba(2, 132, 199, 0.15)',
      themeColor: '#0284c7',
      accentBg: 'bg-sky-50 text-sky-600',
    },
    {
      id: 2,
      title: 'Digital Literacy',
      description: 'Computer basics, programming tutorials, internet navigation, and software application training.',
      longDescription: 'In today’s digital age, computer knowledge is essential. We establish community digital labs equipped with computers and high-speed internet. Local youth and children learn fundamental software programs, basics of coding, and how to safely leverage internet resources for study and career development.',
      details: ['State-of-the-art computer labs', 'Certified standard curriculum', 'Focus on career readiness and resumes', 'Free access hours for research'],
      icon: Laptop,
      color: 'indigo',
      bgGlow: 'rgba(79, 70, 229, 0.15)',
      themeColor: '#4f46e5',
      accentBg: 'bg-indigo-50 text-indigo-600',
    },
    {
      id: 3,
      title: 'Women Empowerment',
      description: 'Skill development workshops, vocational crafts, financial literacy, and startup micro-grants.',
      longDescription: 'We enable women to achieve complete financial independence. Our training institutes conduct tailoring, stitching, craft-making, and beauty care courses. We also organize self-help groups to foster financial awareness, saving habits, and offer seed funding for micro-enterprises.',
      details: ['Vocational certifications', 'Financial management classes', 'Cooperative market linkages', 'Self-defense workshops'],
      icon: Users,
      color: 'rose',
      bgGlow: 'rgba(225, 29, 72, 0.15)',
      themeColor: '#e11d48',
      accentBg: 'bg-rose-50 text-rose-600',
    },
    {
      id: 4,
      title: 'Health & Nutrition',
      description: 'Mobile health checkup clinics, clean water projects, and nutritional supplement distribution.',
      longDescription: 'Healthy bodies nurture bright minds. We organize regular healthcare camps, dental checkups, and pediatric clinics in underserved communities. Additionally, we address malnutrition by providing monthly food rations and nutrient-rich health mixes to pregnant women and children.',
      details: ['Monthly medical & dental camps', 'Safe drinking water projects', 'Free vital medicines & diagnostics', 'Nutritional guidance seminars'],
      icon: HeartPulse,
      color: 'emerald',
      bgGlow: 'rgba(16, 185, 129, 0.15)',
      themeColor: '#10b981',
      accentBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      id: 5,
      title: 'Environmental Awareness',
      description: 'Tree plantation drives, waste sorting programs, and sustainable lifestyle community training.',
      longDescription: 'We foster ecological responsibility. Our volunteers lead afforestation drives to plant native saplings and clean local waterbodies. We run workshops on composting, rainwater harvesting, and reducing plastic waste to secure a healthier tomorrow.',
      details: ['5000+ native saplings planted yearly', 'Composting and waste sorting loops', 'Community green space maintenance', 'School environmental clubs'],
      icon: TreePine,
      color: 'amber',
      bgGlow: 'rgba(245, 158, 11, 0.15)',
      themeColor: '#f59e0b',
      accentBg: 'bg-amber-50 text-amber-600',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Blur Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">Programs & Services</span>
          </h2>
          <div className="h-1.5 w-24 bg-sky-500 rounded-full mx-auto mt-4"></div>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            We work holistically across multiple social areas to ensure sustainable, long-term impact on the lives of families and communities.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div 
                key={prog.id}
                className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-md card-hover flex flex-col justify-between overflow-hidden"
              >
                {/* Glow Background Effect on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 10% 10%, ${prog.bgGlow}, transparent 70%)` }}
                ></div>

                <div className="relative z-10">
                  {/* Icon Wrapper */}
                  <div className={`inline-flex p-4 rounded-2xl ${prog.accentBg} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  {/* Card Title */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                    {prog.title}
                  </h3>
                  
                  {/* Card Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {prog.description}
                  </p>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="relative z-10 inline-flex items-center space-x-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors w-max group/btn mt-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-scale-up">
            
            {/* Modal Top Color Strip */}
            <div className="h-3 w-full" style={{ backgroundColor: selectedProgram.themeColor }}></div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 p-2 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 rounded-full transition-colors focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8">
              {/* Header Icon + Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-2xl ${selectedProgram.accentBg}`}>
                  <selectedProgram.icon className="h-8 w-8" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <Sparkles className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Active Project</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                    {selectedProgram.title}
                  </h3>
                </div>
              </div>

              {/* Main Description */}
              <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                {selectedProgram.longDescription}
              </p>

              {/* Program Points/Details */}
              <div className="mb-8">
                <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Key Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProgram.details.map((point, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="p-0.5 bg-emerald-100 text-emerald-600 rounded-full mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end space-x-4 border-t border-slate-100 pt-6">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-colors text-sm"
                >
                  Close
                </button>
                <a
                  href="#donate"
                  onClick={() => setSelectedProgram(null)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-md hover:scale-105 transition-transform text-sm text-center"
                >
                  Support Program
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Programs;
