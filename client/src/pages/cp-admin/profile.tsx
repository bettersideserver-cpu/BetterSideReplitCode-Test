import React from "react";
import { User, Mail, Phone, Building, MapPin } from "lucide-react";

const CpProfile = () => {
  return (
    <div className="max-w-3xl space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">My Profile</h1>
        <p className="text-white/60">Manage your account details and preferences.</p>
      </div>

      <div className="bg-[#0B0F1A] border border-white/5 rounded-2xl overflow-hidden shadow-lg">
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 border-b border-white/5"></div>
        
        <div className="px-8 pb-8">
          {/* Avatar */}
          <div className="relative -mt-16 mb-6">
            <div className="w-32 h-32 rounded-full bg-[#050816] p-2 inline-block">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                JD
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider font-bold block mb-1">Full Name</label>
                <div className="flex items-center gap-3 text-lg font-medium text-white">
                  <User size={20} className="text-primary" />
                  John Doe
                </div>
              </div>
              
              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider font-bold block mb-1">Email Address</label>
                <div className="flex items-center gap-3 text-lg font-medium text-white">
                  <Mail size={20} className="text-primary" />
                  john.doe@apexrealty.com
                </div>
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider font-bold block mb-1">Phone Number</label>
                <div className="flex items-center gap-3 text-lg font-medium text-white">
                  <Phone size={20} className="text-primary" />
                  +91 98765 43210
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider font-bold block mb-1">Company Name</label>
                <div className="flex items-center gap-3 text-lg font-medium text-white">
                  <Building size={20} className="text-accent" />
                  Apex Realty Solutions Pvt Ltd
                </div>
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider font-bold block mb-1">Location</label>
                <div className="flex items-center gap-3 text-lg font-medium text-white">
                  <MapPin size={20} className="text-accent" />
                  Sector 82, Mohali, Punjab
                </div>
              </div>

              <div className="pt-4">
                <div className="px-4 py-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/80 text-sm">
                  Profile editing is currently disabled. Please contact support to update your details.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CpProfile;
