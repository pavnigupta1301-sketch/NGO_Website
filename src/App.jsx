import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import ImpactDashboard from './components/ImpactDashboard';
import SuccessStories from './components/SuccessStories';
import Gallery from './components/Gallery';
import VolunteerForm from './components/VolunteerForm';
import Donation from './components/Donation';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Sticky Navigation Bar */}
      <Navbar />
      
      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* About Us Section */}
        <About />
        
        {/* Programs & Services Section */}
        <Programs />
        
        {/* AI Impact Dashboard Section */}
        <ImpactDashboard />
        
        {/* Success Stories Section */}
        <SuccessStories />
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Volunteer Registration Section */}
        <VolunteerForm />
        
        {/* Donation Section */}
        <Donation />
        
        {/* Blog & News Section */}
        <Blog />
        
        {/* Contact Us Section */}
        <Contact />
      </main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
