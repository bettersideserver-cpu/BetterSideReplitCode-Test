import React, { useRef, useState } from "react";
import { Link } from "wouter";
import { Play, ChevronRight, Menu, X, User } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_luxury_skyscraper_at_twilight.png";
import logoIcon from "@assets/generated_images/simple_abstract_logo_icon.png";
import project1 from "@assets/generated_images/luxury_apartment_interior_evening.png";
import project2 from "@assets/generated_images/modern_villa_exterior_night.png";
import project3 from "@assets/generated_images/commercial_office_lobby_futuristic.png";
import featuredBg from "@assets/generated_images/aerial_view_luxury_community.png";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logoIcon} alt="BetterSide Logo" className="w-10 h-10 object-contain" />
        <span className="text-2xl font-display font-bold tracking-tight text-white hidden sm:block">
          BetterSide
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {["For Developers", "For Channel Partners", "For Home Buyers", "About"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-wide"
          >
            {item}
          </a>
        ))}
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300">
          <User size={16} />
          Login
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#050816] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
          {["For Developers", "For Channel Partners", "For Home Buyers", "About"].map((item) => (
            <a key={item} href="#" className="text-white/80 hover:text-white py-2 text-lg">
              {item}
            </a>
          ))}
          <button className="w-full mt-4 py-3 rounded-full bg-primary text-white font-bold">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent z-10" /> {/* Bottom Fade */}
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover animate-in fade-in duration-1000 scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-20">
        <span className="inline-block mb-4 text-accent font-bold tracking-widest text-xs uppercase animate-in slide-in-from-bottom-4 fade-in duration-700 delay-100">
          Immersive Project Experience (IPX)
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-6 max-w-4xl animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200">
          Experience Real Estate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            Before It’s Built.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300">
          BetterSide helps you explore trusted pre-launch and under-construction projects in full immersive 3D, right from your browser.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-400">
          <button className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,87,255,0.4)]">
            Explore IPX Projects
          </button>
          <button className="px-8 py-4 rounded-full border border-white/30 text-white font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
            Talk to Our Team
          </button>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 flex gap-3 z-30">
        <div className="w-12 h-1 bg-white rounded-full" />
        <div className="w-2 h-1 bg-white/30 rounded-full" />
        <div className="w-2 h-1 bg-white/30 rounded-full" />
      </div>
    </section>
  );
};

interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  badge: string;
  badgeColor?: "blue" | "orange";
}

const ProjectCard = ({ image, title, desc, badge, badgeColor = "blue" }: ProjectCardProps) => (
  <div className="group relative min-w-[300px] md:min-w-[400px] h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    {/* Badge */}
    <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-white ${badgeColor === 'orange' ? 'bg-accent' : 'bg-primary'}`}>
      {badge}
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
      <h3 className="text-2xl font-display font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70 text-sm font-medium mb-4">{desc}</p>
      
      <div className="flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
        View Project <ChevronRight size={16} />
      </div>
    </div>
  </div>
);

const DiscoverProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      image: project1,
      title: "Skyline Heights, Zirakpur",
      desc: "Luxury 3 & 4 BHK • Trusted Developer",
      badge: "Best Seller",
      badgeColor: "blue" as const
    },
    {
      image: project2,
      title: "The Grand Villa, Goa",
      desc: "Sea-facing 5 BHK Villas • Pre-Launch",
      badge: "New Launch",
      badgeColor: "orange" as const
    },
    {
      image: project3,
      title: "Tech Park One, Bangalore",
      desc: "Premium Commercial Spaces • Ready to Move",
      badge: "Featured",
      badgeColor: "blue" as const
    },
    {
      image: project1, // reusing for demo
      title: "Lakeside Residences",
      desc: "Waterfront Living • 2 & 3 BHK",
      badge: "Pre-Launch",
      badgeColor: "orange" as const
    },
    {
      image: project2, // reusing for demo
      title: "Urban Towers",
      desc: "Modern City Living • Smart Homes",
      badge: "Popular",
      badgeColor: "blue" as const
    }
  ];

  return (
    <section className="py-24 bg-[#050816] relative overflow-hidden">
      <div className="px-6 md:px-12 max-w-[1920px] mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">
          DISCOVER OUR PROJECT WORLDS
        </h2>
        <p className="text-white/60 text-lg">Handpicked IPX experiences from trusted developers.</p>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-12 snap-x snap-mandatory hide-scrollbar"
        ref={scrollRef}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, idx) => (
          <div key={idx} className="snap-start">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

const FeaturedVideoSection = () => {
  return (
    <section className="py-24 bg-[#050816] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden group shadow-2xl shadow-primary/10 border border-white/5">
          {/* Background */}
          <img 
            src={featuredBg} 
            alt="Featured Project" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button className="w-24 h-24 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 shadow-[0_0_40px_rgba(0,87,255,0.6)]">
              <Play size={40} fill="currentColor" className="ml-2" />
            </button>
          </div>

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Lakeside Residences</h2>
            <p className="text-white/80 text-lg mb-0">Full immersive tour of Lakeside Residences, pre-launch in Mohali.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg min-w-[240px]">
              View Full IPX Experience
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 min-w-[240px]">
              Connect with a Partner
            </button>
          </div>
          <p className="text-white/40 text-sm font-medium tracking-wide">
            Powered by BetterSide — only verified developers listed.
          </p>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-accent selection:text-white">
      <Navbar />
      <HeroSection />
      <DiscoverProjectsSection />
      <FeaturedVideoSection />
    </div>
  );
};

export default HomePage;
