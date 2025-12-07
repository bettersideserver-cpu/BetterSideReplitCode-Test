import React from "react";
import { Send, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const CpRunAds = () => {
  // Mock Data
  const adRequests = [
    { id: 1, project: "Lakeside Residences", objective: "Lead Generation", budget: "₹50,000", duration: "15 Days", status: "Running", stats: { impressions: "12.5K", clicks: "450", leads: "32" } },
    { id: 2, project: "Skyline Heights", objective: "Awareness", budget: "₹25,000", duration: "7 Days", status: "In Discussion", stats: { impressions: "-", clicks: "-", leads: "-" } },
    { id: 3, project: "EcoValley Villas", objective: "Site Visits", budget: "₹75,000", duration: "30 Days", status: "Completed", stats: { impressions: "45K", clicks: "1.2K", leads: "85" } },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Running": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "In Discussion": return "text-orange-400 bg-orange-500/10 border-orange-500/20";
      case "Completed": return "text-blue-400 bg-blue-500/10 border-blue-500/20";
      default: return "text-white/60 bg-white/5 border-white/10";
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">Run Ads with BetterSide</h1>
        <p className="text-white/60">Submit a request to launch targeted campaigns for your projects.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Request Form */}
        <div className="lg:col-span-1">
          <div className="bg-[#0B0F1A] border border-white/5 p-6 rounded-2xl shadow-lg sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6">New Ad Request</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">Select Project</label>
                <select className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                  <option>Lakeside Residences</option>
                  <option>Skyline Heights</option>
                  <option>EcoValley Villas</option>
                  <option>Cyber City Hub</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">Target City / Area</label>
                <input 
                  type="text" 
                  placeholder="e.g. Mohali, South Delhi" 
                  className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">Budget (INR)</label>
                  <input 
                    type="number" 
                    placeholder="50000" 
                    className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">Duration (Days)</label>
                  <input 
                    type="number" 
                    placeholder="15" 
                    className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">Campaign Objective</label>
                <div className="grid grid-cols-3 gap-2">
                  {["Leads", "Awareness", "Visits"].map((obj) => (
                    <label key={obj} className="cursor-pointer">
                      <input type="radio" name="objective" className="peer hidden" />
                      <div className="text-center py-2 rounded-lg border border-white/10 bg-[#050816] text-white/60 text-sm peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:text-white transition-all">
                        {obj}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">Additional Notes</label>
                <textarea 
                  rows={3}
                  placeholder="Any specific targeting or requirements..."
                  className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-4">
                <Send size={18} />
                Submit Ad Request
              </button>
            </form>
          </div>
        </div>

        {/* Request History */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-white">Your Ad Requests</h2>
          
          <div className="space-y-4">
            {adRequests.map((req) => (
              <div key={req.id} className="bg-[#0B0F1A] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white">{req.project}</h3>
                    <p className="text-white/60 text-sm">{req.objective} • {req.budget} • {req.duration}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border w-fit ${getStatusColor(req.status)}`}>
                    {req.status}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-1">Impressions</p>
                    <p className="text-xl font-mono font-bold text-white">{req.stats.impressions}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-1">Clicks</p>
                    <p className="text-xl font-mono font-bold text-white">{req.stats.clicks}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-1">Leads Generated</p>
                    <p className="text-xl font-mono font-bold text-primary">{req.stats.leads}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CpRunAds;
