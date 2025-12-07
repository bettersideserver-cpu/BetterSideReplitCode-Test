import React, { useState } from "react";
import { Search, Filter, Download, MessageSquare, Phone } from "lucide-react";

const CpLeads = () => {
  // Mock Data
  const allLeads = [
    { id: 1, name: "Rahul Sharma", phone: "+91 98765 43210", project: "Lakeside Residences", source: "Meta Ads", date: "Dec 07, 2025", status: "New" },
    { id: 2, name: "Priya Singh", phone: "+91 98765 12345", project: "Skyline Heights", source: "Organic", date: "Dec 07, 2025", status: "Called - No Answer" },
    { id: 3, name: "Amit Verma", phone: "+91 99887 77665", project: "EcoValley Villas", source: "BetterSide IPX", date: "Dec 07, 2025", status: "Called - Interested" },
    { id: 4, name: "Sneha Gupta", phone: "+91 88776 65544", project: "Lakeside Residences", source: "Meta Ads", date: "Dec 06, 2025", status: "Follow-up" },
    { id: 5, name: "Vikram Malhotra", phone: "+91 77665 54433", project: "Cyber City Hub", source: "Referral", date: "Dec 06, 2025", status: "Called - Not Interested" },
    { id: 6, name: "Anjali Desai", phone: "+91 66554 43322", project: "Lakeside Residences", source: "Meta Ads", date: "Dec 05, 2025", status: "New" },
    { id: 7, name: "Rohan Mehta", phone: "+91 55443 32211", project: "Skyline Heights", source: "BetterSide IPX", date: "Dec 05, 2025", status: "Called - Interested" },
    { id: 8, name: "Kavita Reddy", phone: "+91 44332 21100", project: "EcoValley Villas", source: "Organic", date: "Dec 04, 2025", status: "Follow-up" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [projectFilter, setProjectFilter] = useState("All");

  const filteredLeads = allLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || lead.phone.includes(searchTerm);
    const matchesProject = projectFilter === "All" || lead.project === projectFilter;
    return matchesSearch && matchesProject;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">My Leads</h1>
          <p className="text-white/60">Manage and track all your potential clients.</p>
        </div>
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium">
          <Download size={16} /> Export CSV
        </button>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-[#0B0F1A] border border-white/5 p-4 rounded-xl flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or phone..." 
            className="w-full bg-[#050816] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-4">
          <div className="relative min-w-[180px]">
            <select 
              className="w-full bg-[#050816] border border-white/10 rounded-lg pl-4 pr-10 py-2.5 text-white appearance-none focus:outline-none focus:border-primary cursor-pointer"
              value={projectFilter}
              onChange={(e) => setProjectFilter(e.target.value)}
            >
              <option value="All">All Projects</option>
              <option value="Lakeside Residences">Lakeside Residences</option>
              <option value="Skyline Heights">Skyline Heights</option>
              <option value="EcoValley Villas">EcoValley Villas</option>
              <option value="Cyber City Hub">Cyber City Hub</option>
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
          </div>
          
          <div className="relative min-w-[160px]">
             <select className="w-full bg-[#050816] border border-white/10 rounded-lg pl-4 pr-10 py-2.5 text-white appearance-none focus:outline-none focus:border-primary cursor-pointer">
              <option>All Status</option>
              <option>New</option>
              <option>Interested</option>
              <option>Follow-up</option>
            </select>
             <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0B0F1A] border border-white/5 rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/60 uppercase text-xs font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Source</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                  <td className="px-6 py-4 text-white/80">{lead.phone}</td>
                  <td className="px-6 py-4 text-white/80">{lead.project}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded bg-white/5 text-xs text-white/70 border border-white/10">
                      {lead.source}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white/60 text-xs font-mono">{lead.date}</td>
                  <td className="px-6 py-4">
                    <select 
                      className="bg-[#050816] border border-white/10 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-primary w-full max-w-[160px]"
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
                    <button className="p-2 hover:bg-white/10 rounded-full text-white/60 hover:text-blue-400 transition-colors" title="View Notes">
                      <MessageSquare size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-white/40">
                    No leads found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CpLeads;
