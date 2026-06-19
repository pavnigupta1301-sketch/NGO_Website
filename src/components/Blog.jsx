import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, Heart, MessageCircle } from 'lucide-react';

const Blog = () => {
  const [activePost, setActivePost] = useState(null);

  const posts = [
    {
      id: 1,
      title: 'The Importance of Primary Education',
      excerpt: 'Why quality primary education remains the single most effective tool for breaking multi-generational poverty in India.',
      content: 'Access to quality primary education is a fundamental human right, yet millions of children in India still lack this basic necessity. Primary education does more than teach reading and writing; it develops critical thinking, builds self-confidence, and opens doors to future opportunities. Studies show that every additional year of primary school increases a child’s future earning potential by 10-20%. At Bright Future Foundation, we focus on interactive, activity-based learning in rural communities, making sure that kids stay in school, enjoy learning, and construct a path to a better future.',
      image: '/images/blog_education.png',
      date: 'June 18, 2026',
      readTime: '5 min read',
      author: 'Anjali Sharma',
      authorTitle: 'Director of Education Programs',
      category: 'Education Support',
      tagColor: 'bg-sky-50 text-sky-600',
    },
    {
      id: 2,
      title: 'Women Empowerment: Success Stories',
      excerpt: 'How vocations and financial literacy workshops are turning rural women into confident village micro-entrepreneurs.',
      content: 'Empowering a woman doesn’t just help her—it uplifts her entire family and village. In our empowerment centers, women learn tailoring, candle making, and computer basics. More importantly, they learn about saving accounts, credit, and cooperative businesses. This year, over 120 women launched their own cottage ventures, leading to improved children enrollment rates and superior healthcare access. These micro-entrepreneurs are proving that financial self-reliance is the cornerstone of sustainable social reform.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop&q=80',
      date: 'May 24, 2026',
      readTime: '6 min read',
      author: 'Rina Deshmukh',
      authorTitle: 'Vocational Trainer, Women Center',
      category: 'Empowerment',
      tagColor: 'bg-rose-50 text-rose-600',
    },
    {
      id: 3,
      title: 'Building Sustainable Communities',
      excerpt: 'Connecting clean water filtration loops with afforestation drives to foster long-term village growth.',
      content: 'True community development is ecological, social, and economic. Our holistic village development model links hygiene campaigns, tree plantation drives, and solar power installations. By teaching families composting and native afforestation, we restore soil health while safeguarding local aquifers. Through partnerships with local panchayats, we have introduced zero-waste models in five districts, proving that environmental care and livelihood development can work hand in hand.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
      date: 'April 12, 2026',
      readTime: '4 min read',
      author: 'Vikram Singh',
      authorTitle: 'Head of Green Initiatives',
      category: 'Environment',
      tagColor: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-4 py-1.5 rounded-full">
            News & Updates
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Latest From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">Blog</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto mt-4"></div>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Stay updated with our latest activities, field stories, opinion pieces, and project reviews.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md card-hover flex flex-col justify-between"
            >
              <div>
                {/* Post Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${post.tagColor}`}>
                    {post.category}
                  </span>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center space-x-4 text-xs text-slate-400 font-semibold mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors mb-3 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                <button
                  onClick={() => setActivePost(post)}
                  className="inline-flex items-center space-x-1 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Blog Detail Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-scale-up max-h-[90vh] flex flex-col">
            
            {/* Top Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 p-2 bg-slate-900/40 text-white hover:bg-slate-900/60 rounded-full transition-colors focus:outline-none z-10"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Scrollable Container */}
            <div className="overflow-y-auto flex-grow">
              {/* Header Image */}
              <div className="aspect-[21/9] w-full overflow-hidden relative">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-8 text-white">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/25`}>
                    {activePost.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 max-w-2xl leading-tight">
                    {activePost.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 space-y-6">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-semibold border-b border-slate-100 pb-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5 text-sky-500" />
                    Published: {activePost.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5 text-sky-500" />
                    Read Time: {activePost.readTime}
                  </span>
                </div>

                {/* Article Text */}
                <div className="prose max-w-none text-slate-600 leading-relaxed text-sm sm:text-base space-y-4">
                  <p className="font-semibold text-slate-700 italic">
                    {activePost.excerpt}
                  </p>
                  <p>
                    {activePost.content}
                  </p>
                  <p>
                    Through our grassroots work, we see these changes taking shape every single day. The dedication of our community mobilizers and the trust built with rural panchayats has made these milestones achievable. However, the path forward is long, and we need your constant hand-holding to extend our reach.
                  </p>
                </div>

                {/* Author Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                    {activePost.author.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{activePost.author}</h4>
                    <p className="text-slate-500 text-xs">{activePost.authorTitle}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-slate-500">
                <button className="flex items-center space-x-1 hover:text-rose-500 transition-colors text-xs font-bold">
                  <Heart className="h-4 w-4 fill-none" />
                  <span>Support (24)</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-sky-500 transition-colors text-xs font-bold">
                  <MessageCircle className="h-4 w-4" />
                  <span>Share (12)</span>
                </button>
              </div>
              <button
                onClick={() => setActivePost(null)}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Blog;
