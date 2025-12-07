import React from "react";
import { Link } from "wouter";
import { ArrowUpRight, Phone, MessageSquare, Clock, PlusCircle } from "lucide-react";

const CpDashboard = () => {
  // Mock Data
  const stats = [
    { label: "Today's Leads", value: "12", trend: "+2", color: "bg-blue-500/20 text-blue-400" },
    { label: "Total Leads", value: "843", trend: "+15%", color: "bg-orange-500/20 text-orange-400" },
    { label: "Active Projects", value: "8", trend: "Running", color: "bg-emerald-500/20 text-emerald-400" },
    { label: "Ads in Progress", value: "3", trend: "Reviewing", color: "bg-purple-500/20 text-purple-400" },
  ];

  const todayLeads = [
    { id: 1, name: "Rahul Sharma", phone: "+91 98765 43210", project: "Lakeside Residences", source: "Meta Ads", time: "10:30 AM", status: "New" },
    { id: 2, name: "Priya Singh", phone: "+91 98765 12345", project: "Skyline Heights", source: "Organic", time: "11:15 AM", status: "Called - No Answer" },
    { id: 3, name: "Amit Verma", phone: "+91 99887 77665", project: "EcoValley Villas", source: "BetterSide IPX", time: "12:45 PM", status: "Called - Interested" },
    { id: 4, name: "Sneha Gupta", phone: "+91 88776 65544", project: "Lakeside Residences", source: "Meta Ads", time: "02:20 PM", status: "New" },
    { id: 5, name: "Vikram Malhotra", phone: "+91 77665 54433", project: "Cyber City Hub", source: "Referral", time: "03:10 PM", status: "Follow-up" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">Welcome back, John!</h1>
        <p className="text-white/60">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#0B0F1A] border border-white/5 p-6 rounded-2xl shadow-lg hover:border-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <p className="text-white/60 text-sm font-medium">{stat.label}</p>
              <div className={`px-2 py-1 rounded text-xs font-bold ${stat.color}`}>
                {stat.trend}
              </div>
            </div>
            <h3 className="text-4xl font-display font-bold text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Today's Leads */}
      <div className="bg-[#0B0F1A] border border-white/5 rounded-2xl overflow-hidden shadow-lg">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Today's Leads</h2>
          <Link href="/cp-dashboard/leads">
            <span className="text-sm text-primary hover:text-primary/80 cursor-pointer font-medium flex items-center gap-1">
              View All <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/60 uppercase text-xs font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Source</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {todayLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                  <td className="px-6 py-4 text-white/80">{lead.phone}</td>
                  <td className="px-6 py-4 text-white/80">{lead.project}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded bg-white/5 text-xs text-white/70 border border-white/10">
                      {lead.source}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white/60 text-xs font-mono">{lead.time}</td>
                  <td className="px-6 py-4">
                    <select 
                      className="bg-[#050816] border border-white/10 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-primary"
                      defaultValue={lead.status}
                    >
                      <option>New</option>
                      <option>Called – No Answer</option>
                      <option>Called – Interested</option>
                      <option>Called – Not Interested</option>
                      <option>Follow-up</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-white/10 rounded-full text-white/60 hover:text-green-400 transition-colors" title="Call">
                        <Phone size={16} />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-full text-white/60 hover:text-blue-400 transition-colors" title="Notes">
                        <MessageSquare size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Need more qualified leads?</h3>
          <p className="text-white/70 max-w-xl">
            Launch targeted ad campaigns with BetterSide's marketing experts. We handle the creative, targeting, and optimization.
          </p>
        </div>
        <Link href="/cp-dashboard/ads">
          <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all transform hover:scale-105 flex items-center gap-2 whitespace-nowrap">
            <PlusCircle size={20} />
            Run Ads with BetterSide
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CpDashboard;
