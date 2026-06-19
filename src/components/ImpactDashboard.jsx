import React, { useState, useEffect } from 'react';
import { BookOpen, Users, TreePine, Globe, GraduationCap } from 'lucide-react';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    // Calculate increment step based on total duration and interval ticks (say 30 FPS)
    const totalMiliseconds = duration;
    const stepTime = 30; // 30ms per step
    const totalSteps = totalMiliseconds / stepTime;
    const increment = Math.ceil(end / totalSteps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const ImpactDashboard = () => {
  const stats = [
    {
      id: 1,
      target: 10000,
      suffix: '+',
      label: 'Children Educated',
      icon: GraduationCap,
      color: 'from-sky-500 to-blue-600',
      shadowColor: 'shadow-sky-500/20',
    },
    {
      id: 2,
      target: 50000,
      suffix: '+',
      label: 'Books Distributed',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600',
      shadowColor: 'shadow-emerald-500/20',
    },
    {
      id: 3,
      target: 5000,
      suffix: '+',
      label: 'Trees Planted',
      icon: TreePine,
      color: 'from-green-500 to-emerald-600',
      shadowColor: 'shadow-green-500/20',
    },
    {
      id: 4,
      target: 150,
      suffix: '+',
      label: 'Active Volunteers',
      icon: Users,
      color: 'from-amber-500 to-orange-600',
      shadowColor: 'shadow-amber-500/20',
    },
    {
      id: 5,
      target: 50,
      suffix: '+',
      label: 'Communities Reached',
      icon: Globe,
      color: 'from-rose-500 to-pink-600',
      shadowColor: 'shadow-rose-500/20',
    },
  ];

  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Glow Spots */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
            Our Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">
            Real Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">By The Numbers</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto mt-4"></div>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Through the generosity of donors and the hard work of volunteers, we have touched thousands of lives.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 text-center hover:border-slate-600 transition-all duration-300 hover:scale-105"
              >
                {/* Colored Glow on Hover */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating Icon */}
                <div className={`mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} ${stat.shadowColor} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Counter */}
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  <Counter target={stat.target} />
                  <span>{stat.suffix}</span>
                </div>

                {/* Label */}
                <p className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dashboard Graphic Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 inline-flex items-center space-x-2 text-sm sm:text-base bg-slate-800/30 px-6 py-3 rounded-full border border-slate-700/30">
            <span>All stats are audited quarterly by certified community impact analysts.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ImpactDashboard;
