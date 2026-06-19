import React, { useState } from 'react';
import { IndianRupee, Gift, ShieldCheck, Heart, Sparkles, CheckCircle } from 'lucide-react';

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Fundraising stats
  const fundraisingGoal = 1000000;
  const currentRaised = 745000;
  const percentRaised = Math.round((currentRaised / fundraisingGoal) * 100);

  const presets = [
    { value: 500, label: '₹500', impact: 'Provides educational stationery kits for 2 children.' },
    { value: 1000, label: '₹1000', impact: 'Funds midday meals and nutritional shakes for 1 child for a month.' },
    { value: 2500, label: '₹2500', impact: 'Provides computer training lab access and books for 3 youth.' },
    { value: 5000, label: '₹5000', impact: 'Sponsors formal school education, uniform, and tuition for a child for an entire term.' },
  ];

  const handlePresetSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setShowCustomInput(false);
  };

  const handleCustomSelect = () => {
    setSelectedAmount(null);
    setShowCustomInput(true);
  };

  const handleCustomChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setCustomAmount(value);
    }
  };

  const activeAmount = showCustomInput ? (parseInt(customAmount, 10) || 0) : selectedAmount;

  const getImpactMessage = () => {
    if (showCustomInput) {
      const amt = parseInt(customAmount, 10) || 0;
      if (amt <= 0) return 'Enter an amount to see its impact.';
      if (amt < 500) return `Helps fund classroom utilities and learning modules for children.`;
      if (amt < 1000) return `Provides basic study materials and hygiene kits for children.`;
      if (amt < 2500) return `Feeds and supports children with daily nutritional needs.`;
      if (amt < 5000) return `Supplies education support and computer kits for youth.`;
      return `Generously funds comprehensive educational sponsorships, mentoring, and medical drives.`;
    }
    const matchingPreset = presets.find(p => p.value === selectedAmount);
    return matchingPreset ? matchingPreset.impact : '';
  };

  const handleDonate = (e) => {
    e.preventDefault();
    if (activeAmount && activeAmount > 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessModal(true);
      }, 1500);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setSelectedAmount(1000);
    setCustomAmount('');
    setShowCustomInput(false);
  };

  return (
    <section id="donate" className="py-24 bg-sky-50 relative overflow-hidden">
      
      {/* Decorative Blur Accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-sky-600 uppercase tracking-widest bg-white px-4 py-1.5 rounded-full shadow-sm">
            Make a Difference
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600 font-extrabold">Our Cause</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto mt-4"></div>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Your generous donation fuels our projects. Every rupee directly contributes to educational, health, and conservation programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Progress Bar & Impact Details */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">Fundraising Progress</span>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-extrabold px-3 py-1 rounded-full">{percentRaised}% Achieved</span>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-sky-500 to-emerald-500 h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${percentRaised}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-3 text-sm">
                  <div>
                    <span className="text-slate-400 font-medium">Raised: </span>
                    <strong className="text-slate-800">₹{currentRaised.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Target: </span>
                    <strong className="text-slate-800">₹{fundraisingGoal.toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              {/* Security Statement */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 text-slate-500 text-xs sm:text-sm">
                <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>All transactions are 256-bit SSL encrypted. Donations are eligible for 80G tax benefits.</span>
              </div>
            </div>

            {/* Impact Quote Box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
              {/* Background heart shape */}
              <div className="absolute right-0 bottom-0 text-white/5 translate-x-10 translate-y-10">
                <Heart className="h-44 w-44 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-amber-400 mb-2 flex items-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span>How Your Gift Helps</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                "We believe that no contribution is too small. Giving even a tiny portion can light a lamp of knowledge in a household that has sat in darkness for generations."
              </p>
              <div className="mt-4 text-xs text-slate-400 font-semibold">— Bright Future Advisory Committee</div>
            </div>

          </div>

          {/* Right Column: Donation Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-800">Choose Donation Amount</h3>
              
              {/* Presets Grid */}
              <div className="grid grid-cols-2 gap-4">
                {presets.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => handlePresetSelect(preset.value)}
                    className={`py-4 rounded-2xl font-extrabold border text-lg transition-all duration-300 ${
                      selectedAmount === preset.value && !showCustomInput
                        ? 'bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-500/20'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Custom amount selection toggle button */}
              <button
                onClick={handleCustomSelect}
                className={`w-full py-3.5 rounded-2xl font-bold border text-sm transition-all ${
                  showCustomInput
                    ? 'bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-500/20'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                }`}
              >
                Custom Amount (INR)
              </button>

              {/* Custom Amount Input Field */}
              {showCustomInput && (
                <div className="relative animate-scale-up">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold flex items-center">
                    <IndianRupee className="h-4.5 w-4.5" />
                  </div>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder="Enter amount (e.g. 1500)"
                    className="w-full pl-10 pr-4 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 text-slate-800 font-semibold"
                  />
                </div>
              )}

              {/* Impact Callout */}
              {activeAmount > 0 && (
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 text-sm leading-relaxed flex items-start space-x-2 animate-fade-in">
                  <Gift className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>{getImpactMessage()}</span>
                </div>
              )}

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                disabled={isSubmitting || !activeAmount || activeAmount <= 0}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-2xl shadow-lg shadow-orange-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Heart className="h-5 w-5 fill-current" />
                    <span>Donate ₹{(activeAmount || 0).toLocaleString()} Now</span>
                  </>
                )}
              </button>

            </div>
          </div>

        </div>

      </div>

      {/* Donation Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-100 p-8 text-center animate-scale-up">
            
            <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-full shadow-inner mb-6">
              <CheckCircle className="h-16 w-16" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              Donation Successful!
            </h3>
            
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Thank you for donating <strong className="text-slate-800">₹{(activeAmount || 0).toLocaleString()}</strong> to the Bright Future Foundation! Your contribution will fund our social-impact services. A tax receipt (80G) and transaction summary have been sent to your email.
            </p>

            <button
              onClick={handleCloseModal}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-850 text-white font-bold rounded-2xl transition-colors text-sm"
            >
              Continue
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Donation;
