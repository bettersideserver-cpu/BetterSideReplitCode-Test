import React, { useState } from "react";
import { useLocation } from "wouter";
import { User, Building, Briefcase, ArrowLeft } from "lucide-react";
import logoIcon from "@assets/generated_images/simple_abstract_logo_icon.png";
import heroBg from "@assets/generated_images/futuristic_luxury_skyscraper_at_twilight.png";

const Login = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [role, setRole] = useState<"Home Buyer / Investor" | "Channel Partner" | "Developer" | null>(null);
  const [, setLocation] = useLocation();

  // Form States
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    companyName: "", // For CP & Developer
    contactPerson: "", // For Developer
    gstNumber: "", // For Developer
    reraNumber: "", // For Developer
    isReraRegistered: false, // For Developer
    docLink: "", // For Developer
    budget: "", // For Buyer
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleRoleSelect = (selectedRole: "Home Buyer / Investor" | "Channel Partner" | "Developer") => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    let userRole = "buyer";
    let userName = formData.fullName;

    if (role === "Channel Partner") {
      userRole = "cp";
      localStorage.setItem("userCompany", formData.companyName);
      localStorage.setItem("userPhone", formData.phone);
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("userCity", formData.city);
    } else if (role === "Developer") {
      userRole = "developer";
      userName = formData.contactPerson || formData.fullName; // Use contact person for dev
    }

    localStorage.setItem("userRole", userRole);
    localStorage.setItem("userName", userName);
    
    // Redirect
    if (userRole === "cp") {
      setLocation("/cp-dashboard");
    } else if (userRole === "developer") {
      setLocation("/developer-dashboard");
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

      <div className="w-full max-w-lg m-auto bg-[#0B0F1A]/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col items-center mb-8">
          <img src={logoIcon} alt="BetterSide" className="w-12 h-12 mb-4 object-contain" />
          <h1 className="text-3xl font-display font-bold text-white">
            {step === 1 ? "Welcome Back" : `Join as ${role}`}
          </h1>
          <p className="text-white/60">
            {step === 1 ? "Sign in to continue to BetterSide" : "Please fill in your details"}
          </p>
        </div>

        {step === 1 ? (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">Who are you?</label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { id: "Home Buyer / Investor", icon: User, desc: "Explore immersive projects" },
                  { id: "Channel Partner", icon: Briefcase, desc: "Manage leads & ads" },
                  { id: "Developer", icon: Building, desc: "List & manage projects" }
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleRoleSelect(item.id as any)}
                    className="cursor-pointer border border-white/10 rounded-xl p-4 flex items-center gap-4 transition-all duration-200 bg-white/5 hover:bg-white/10 hover:text-white text-white/60 group"
                  >
                    <div className="p-2 rounded-lg bg-white/10 text-white/60 group-hover:text-white transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-white">{item.id}</p>
                      <p className="text-xs opacity-70">{item.desc}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary">
                         <div className="w-0 h-0 rounded-full bg-primary transition-all group-hover:w-3 group-hover:h-3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <button 
              type="button" 
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-white/60 hover:text-white text-sm mb-4"
            >
              <ArrowLeft size={16} /> Back
            </button>

            {/* Common Fields */}
            {role !== "Developer" && (
              <div>
                 <label className="block text-xs font-bold text-white/60 uppercase mb-1">Full Name</label>
                 <input 
                   name="fullName"
                   required
                   value={formData.fullName}
                   onChange={handleInputChange}
                   className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                   placeholder="John Doe"
                 />
              </div>
            )}

            {/* Role Specific Fields */}
            {role === "Channel Partner" && (
              <>
                <div>
                   <label className="block text-xs font-bold text-white/60 uppercase mb-1">Company / Firm Name</label>
                   <input 
                     name="companyName"
                     required
                     value={formData.companyName}
                     onChange={handleInputChange}
                     className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                     placeholder="Apex Realty"
                   />
                </div>
              </>
            )}

             {role === "Developer" && (
              <>
                <div>
                   <label className="block text-xs font-bold text-white/60 uppercase mb-1">Developer / Group Name</label>
                   <input 
                     name="companyName"
                     required
                     value={formData.companyName}
                     onChange={handleInputChange}
                     className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                     placeholder="Prestige Group"
                   />
                </div>
                 <div>
                   <label className="block text-xs font-bold text-white/60 uppercase mb-1">Contact Person Name</label>
                   <input 
                     name="contactPerson"
                     required
                     value={formData.contactPerson}
                     onChange={handleInputChange}
                     className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                     placeholder="Jane Smith"
                   />
                </div>
              </>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                 <label className="block text-xs font-bold text-white/60 uppercase mb-1">Phone</label>
                 <input 
                   name="phone"
                   required
                   value={formData.phone}
                   onChange={handleInputChange}
                   className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                   placeholder="+91 98765..."
                 />
              </div>
              <div>
                 <label className="block text-xs font-bold text-white/60 uppercase mb-1">Email</label>
                 <input 
                   name="email"
                   type="email"
                   required
                   value={formData.email}
                   onChange={handleInputChange}
                   className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                   placeholder="john@example.com"
                 />
              </div>
            </div>

            <div>
               <label className="block text-xs font-bold text-white/60 uppercase mb-1">City</label>
               <input 
                 name="city"
                 required
                 value={formData.city}
                 onChange={handleInputChange}
                 className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                 placeholder="Mumbai"
               />
            </div>

            {role === "Home Buyer / Investor" && (
              <div>
                 <label className="block text-xs font-bold text-white/60 uppercase mb-1">Budget (Optional)</label>
                 <input 
                   name="budget"
                   value={formData.budget}
                   onChange={handleInputChange}
                   className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                   placeholder="e.g. 1 Cr - 2 Cr"
                 />
              </div>
            )}

            {role === "Developer" && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/60 uppercase mb-1">GST Number</label>
                    <input 
                      name="gstNumber"
                      required
                      value={formData.gstNumber}
                      onChange={handleInputChange}
                      className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                      placeholder="22AAAAA0000A1Z5"
                    />
                  </div>
                   <div>
                    <label className="block text-xs font-bold text-white/60 uppercase mb-1">RERA No.</label>
                    <input 
                      name="reraNumber"
                      required
                      value={formData.reraNumber}
                      onChange={handleInputChange}
                      className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                      placeholder="P51800000000"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <input 
                    type="checkbox"
                    id="isReraRegistered"
                    name="isReraRegistered"
                    checked={formData.isReraRegistered}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-white/10 bg-[#050816] text-primary focus:ring-primary"
                  />
                  <label htmlFor="isReraRegistered" className="text-sm text-white/80">I confirm that I am RERA Registered</label>
                </div>

                 <div>
                   <label className="block text-xs font-bold text-white/60 uppercase mb-1">Document Link (Optional)</label>
                   <input 
                     name="docLink"
                     value={formData.docLink}
                     onChange={handleInputChange}
                     className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                     placeholder="Google Drive / Dropbox Link"
                   />
                </div>
              </>
            )}

            <button 
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all transform hover:scale-[1.02] mt-6"
            >
              Complete Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
