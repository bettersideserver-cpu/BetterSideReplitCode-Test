import React from "react";
import { Info } from "lucide-react";

const CpMarketingSupport = () => {
  // Mock Data
  const stats = [
    { label: "Creatives Today", value: "2" },
    { label: "Creatives this Month", value: "24" },
    { label: "Total Creatives", value: "156" },
    { label: "EDMs Sent", value: "8" },
  ];

  const history = [
    { id: 1, date: "Dec 07, 2025", type: "Creative", project: "Lakeside Residences", count: 2 },
    { id: 2, date: "Dec 06, 2025", type: "Creative", project: "Skyline Heights", count: 3 },
    { id: 3, date: "Dec 05, 2025", type: "EDM", project: "EcoValley Villas", count: 1 },
    { id: 4, date: "Dec 04, 2025", type: "Creative", project: "Cyber City Hub", count: 4 },
    { id: 5, date: "Dec 03, 2025", type: "EDM", project: "Lakeside Residences", count: 1 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">Marketing Support</h1>
        <p className="text-white/60">Track the marketing collateral shared with you.</p>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
        <Info className="text-blue-400 shrink-0 mt-0.5" size={20} />
        <p className="text-sm text-blue-200/80 leading-relaxed">
          Actual creative files (images, videos) and EDM HTML templates are shared directly via WhatsApp or Email by your account manager. This page only tracks the volume of support provided.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#0B0F1A] border border-white/5 p-6 rounded-2xl shadow-lg">
            <p className="text-white/60 text-xs uppercase tracking-wider font-medium mb-2">{stat.label}</p>
            <h3 className="text-3xl font-display font-bold text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* History Table */}
      <div className="bg-[#0B0F1A] border border-white/5 rounded-2xl overflow-hidden shadow-lg">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-xl font-bold text-white">Support History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/60 uppercase text-xs font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-mono text-white/60">{item.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold border ${item.type === 'Creative' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 'bg-orange-500/10 text-orange-400 border-orange-500/20'}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-white">{item.project}</td>
                  <td className="px-6 py-4 text-white font-mono">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CpMarketingSupport;
