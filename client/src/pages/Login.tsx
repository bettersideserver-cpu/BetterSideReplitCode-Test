import React, { useState } from "react";
import { useLocation } from "wouter";
import { User, Building, Briefcase } from "lucide-react";
import logoIcon from "@assets/generated_images/simple_abstract_logo_icon.png";
import heroBg from "@assets/generated_images/futuristic_luxury_skyscraper_at_twilight.png";

const Login = () => {
  const [role, setRole] = useState("Home Buyer");
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login
    let userRole = "buyer";
    if (role === "Channel Partner") userRole = "cp";
    if (role === "Developer") userRole = "developer";
    
    localStorage.setItem("userRole", userRole);
    
    // Redirect
    if (userRole === "cp") {
      setLocation("/cp-dashboard");
    } else {
      setLocation("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-transparent"></div>
      </div>

      <div className="w-full max-w-md m-auto bg-[#0B0F1A]/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col items-center mb-8">
          <img src={logoIcon} alt="BetterSide" className="w-12 h-12 mb-4 object-contain" />
          <h1 className="text-3xl font-display font-bold text-white">Welcome Back</h1>
          <p className="text-white/60">Sign in to continue to BetterSide</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-3">Who are you?</label>
            <div className="grid grid-cols-1 gap-3">
              {[
                { id: "Home Buyer", icon: User, desc: "Explore immersive projects" },
                { id: "Channel Partner", icon: Briefcase, desc: "Manage leads & ads" },
                { id: "Developer", icon: Building, desc: "List & manage projects" }
              ].map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setRole(item.id)}
                  className={`
                    cursor-pointer border rounded-xl p-4 flex items-center gap-4 transition-all duration-200
                    ${role === item.id 
                      ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(0,87,255,0.2)]" 
                      : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  <div className={`p-2 rounded-lg ${role === item.id ? "bg-primary text-white" : "bg-white/10 text-white/60"}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{item.id}</p>
                    <p className="text-xs opacity-70">{item.desc}</p>
                  </div>
                  <div className={`ml-auto w-4 h-4 rounded-full border flex items-center justify-center ${role === item.id ? "border-primary" : "border-white/20"}`}>
                    {role === item.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all transform hover:scale-[1.02]"
          >
            Login as {role}
          </button>
          
          <p className="text-center text-xs text-white/40 mt-6">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
