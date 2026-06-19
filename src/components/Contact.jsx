import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Your Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Please type a message';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSending(true);
      setTimeout(() => {
        setSending(false);
        setIsSent(true);
      }, 1500);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setIsSent(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative patterns */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">Our Team</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto mt-4"></div>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Have questions about our projects, partnerships, or donations? Contact us using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Bright Future HQ</h3>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                Feel free to visit our central office or reach out directly via email or call. We are available Mon-Sat from 9:00 AM to 6:00 PM.
              </p>

              {/* Detail Items */}
              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Office Address</h4>
                    <p className="text-slate-500 text-sm mt-0.5">
                      45, Innovation Hub, Sector 62, Noida, Uttar Pradesh, 201301, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Email Address</h4>
                    <p className="text-slate-500 text-sm mt-0.5">
                      info@brightfuture.org.in
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Phone Number</h4>
                    <p className="text-slate-500 text-sm mt-0.5">
                      +91 120 4567890 / +91 98765 43210
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg h-56 relative bg-slate-200 mt-6 lg:mt-0">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562143712399!2d77.35967667630076!3d28.61291157567406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce544eb1c469f%3A0x7d6f51fef06df0df!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718816223405!5m2!1sen!2sin"
                className="w-full h-full border-none"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-8 sm:p-10">
              
              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                        <User className="h-4 w-4 text-sky-600 mr-1.5" /> Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={`px-4 py-3.5 bg-slate-50 border rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                          errors.name ? 'border-rose-400 ring-rose-400/10 ring-2' : 'border-slate-200'
                        }`}
                      />
                      {errors.name && <p className="text-rose-500 text-xs font-bold mt-1.5">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                        <Mail className="h-4 w-4 text-sky-600 mr-1.5" /> Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`px-4 py-3.5 bg-slate-50 border rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                          errors.email ? 'border-rose-400 ring-rose-400/10 ring-2' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <p className="text-rose-500 text-xs font-bold mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                      <MessageSquare className="h-4 w-4 text-sky-600 mr-1.5" /> Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Feedback / Collaboration / Inquiry"
                      className={`px-4 py-3.5 bg-slate-50 border rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                        errors.subject ? 'border-rose-400 ring-rose-400/10 ring-2' : 'border-slate-200'
                      }`}
                    />
                    {errors.subject && <p className="text-rose-500 text-xs font-bold mt-1.5">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                      <MessageSquare className="h-4 w-4 text-sky-600 mr-1.5" /> Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message details..."
                      rows="5"
                      className={`px-4 py-3.5 bg-slate-50 border rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none ${
                        errors.message ? 'border-rose-400 ring-rose-400/10 ring-2' : 'border-slate-200'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-rose-500 text-xs font-bold mt-1.5">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-extrabold rounded-2xl shadow-lg shadow-sky-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {sending ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              ) : (
                // Success State
                <div className="text-center py-12 space-y-6 animate-scale-up">
                  <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-full shadow-inner mb-2">
                    <CheckCircle className="h-16 w-16" />
                  </div>
                  
                  <h3 className="text-3xl font-extrabold text-slate-900">
                    Message Sent!
                  </h3>
                  
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>, for reaching out. We have logged your request and a coordinator will reply to <strong className="text-slate-800">{formData.email}</strong> shortly.
                  </p>

                  <div className="pt-6">
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-2xl transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
