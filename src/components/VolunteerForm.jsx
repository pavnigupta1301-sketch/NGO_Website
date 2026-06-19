import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, ListCollapse, MessageSquare, CheckCircle, HeartHandshake } from 'lucide-react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    interestArea: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const interestAreas = [
    { value: 'education', label: 'Education & Tutoring' },
    { value: 'women', label: 'Women Empowerment Workshops' },
    { value: 'digital', label: 'Digital Literacy & Tech Training' },
    { value: 'health', label: 'Health Camps & Medical Camps' },
    { value: 'environment', label: 'Tree Plantation & Cleanliness Drives' },
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/\s+/g, ''))) {
      tempErrors.phone = 'Please enter a valid phone number (10-12 digits)';
    }
    
    if (!formData.city.trim()) tempErrors.city = 'City is required';
    if (!formData.interestArea) tempErrors.interestArea = 'Please select an area of interest';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear field error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      interestArea: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="volunteer" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-4 py-1.5 rounded-full">
            Join Our Mission
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">Volunteer</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto mt-4"></div>
          <p className="text-slate-600 mt-4 text-sm sm:text-base">
            Your time and skills can change a child's life. Sign up below to join our active team of volunteers.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-slate-50 border border-slate-100 shadow-xl rounded-3xl p-8 sm:p-12">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <User className="h-4 w-4 text-sky-600 mr-1.5" /> Full Name <span className="text-rose-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`px-4 py-3.5 bg-white border rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                      errors.fullName ? 'border-rose-400 ring-rose-400/10 ring-2' : 'border-slate-200'
                    }`}
                  />
                  {errors.fullName && <p className="text-rose-500 text-xs font-bold mt-1.5">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <Mail className="h-4 w-4 text-sky-600 mr-1.5" /> Email Address <span className="text-rose-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`px-4 py-3.5 bg-white border rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                      errors.email ? 'border-rose-400 ring-rose-400/10 ring-2' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <p className="text-rose-500 text-xs font-bold mt-1.5">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <Phone className="h-4 w-4 text-sky-600 mr-1.5" /> Phone Number <span className="text-rose-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., 9876543210"
                    className={`px-4 py-3.5 bg-white border rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                      errors.phone ? 'border-rose-400 ring-rose-400/10 ring-2' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && <p className="text-rose-500 text-xs font-bold mt-1.5">{errors.phone}</p>}
                </div>

                {/* City */}
                <div className="flex flex-col">
                  <label htmlFor="city" className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <MapPin className="h-4 w-4 text-sky-600 mr-1.5" /> City <span className="text-rose-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your current city"
                    className={`px-4 py-3.5 bg-white border rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                      errors.city ? 'border-rose-400 ring-rose-400/10 ring-2' : 'border-slate-200'
                    }`}
                  />
                  {errors.city && <p className="text-rose-500 text-xs font-bold mt-1.5">{errors.city}</p>}
                </div>
              </div>

              {/* Area of Interest */}
              <div className="flex flex-col">
                <label htmlFor="interestArea" className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                  <ListCollapse className="h-4 w-4 text-sky-600 mr-1.5" /> Area of Interest <span className="text-rose-500 ml-0.5">*</span>
                </label>
                <div className="relative">
                  <select
                    id="interestArea"
                    name="interestArea"
                    value={formData.interestArea}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 bg-white border rounded-2xl text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                      errors.interestArea ? 'border-rose-400 ring-rose-400/10 ring-2' : 'border-slate-200'
                    }`}
                  >
                    <option value="">Select a program...</option>
                    {interestAreas.map((item) => (
                      <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
                {errors.interestArea && <p className="text-rose-500 text-xs font-bold mt-1.5">{errors.interestArea}</p>}
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                  <MessageSquare className="h-4 w-4 text-sky-600 mr-1.5" /> Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about yourself or ask a question..."
                  rows="4"
                  className="px-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-extrabold rounded-2xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <HeartHandshake className="h-5 w-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>

            </form>
          ) : (
            // Success State
            <div className="text-center py-8 space-y-6 animate-scale-up">
              <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-full shadow-inner mb-2">
                <CheckCircle className="h-16 w-16" />
              </div>
              
              <h3 className="text-3xl font-extrabold text-slate-900">
                Application Received!
              </h3>
              
              <p className="text-slate-600 text-base max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{formData.fullName}</strong>, for stepping forward! A coordinator from our **{interestAreas.find(a => a.value === formData.interestArea)?.label}** team will email you at <strong className="text-slate-800">{formData.email}</strong> within 48 hours to schedule your onboarding.
              </p>

              <div className="pt-6">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-2xl transition-all"
                >
                  Register Another Volunteer
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default VolunteerForm;
