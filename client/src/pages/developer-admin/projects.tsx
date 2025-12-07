import React, { useState } from "react";
import { MapPin, Users, Megaphone, ChevronDown, ChevronUp } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: "Skyline Heights",
      location: "Zirakpur, Punjab",
      cpCount: 42,
      adsRunning: 15,
      totalLeads: 856,
      details: [
        { cpName: "John Doe", company: "Apex Realty", leads: 124, hasAds: true },
        { cpName: "Sarah Smith", company: "Dream Homes", leads: 85, hasAds: true },
        { cpName: "Mike Johnson", company: "City Estates", leads: 42, hasAds: false },
        { cpName: "Priya Sharma", company: "Sharma Associates", leads: 210, hasAds: true },
      ]
    },
    {
      id: 2,
      name: "The Grand Villa",
      location: "North Goa",
      cpCount: 28,
      adsRunning: 8,
      totalLeads: 432,
      details: [
        { cpName: "Robert Wilson", company: "Goa Prime", leads: 150, hasAds: true },
        { cpName: "Anita Desai", company: "Coastal Properties", leads: 95, hasAds: false },
        { cpName: "Raj Malhotra", company: "Luxury Living", leads: 67, hasAds: true },
      ]
    },
    {
      id: 3,
      name: "Tech Park One",
      location: "Whitefield, Bangalore",
      cpCount: 65,
      adsRunning: 24,
      totalLeads: 1240,
      details: [
        { cpName: "Vikram Singh", company: "Bangalore Realtors", leads: 320, hasAds: true },
        { cpName: "Elena Rodriguez", company: "Global Spaces", leads: 180, hasAds: true },
        { cpName: "David Chen", company: "Tech City Homes", leads: 145, hasAds: false },
      ]
    }
  ];

  const toggleExpand = (id: number) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-display font-bold mb-2">Your Projects</h2>
        <p className="text-white/60">Manage your listed projects and view CP performance.</p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#0B0F1A] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
            {/* Project Header Card */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{project.name}</h3>
                <div className="flex items-center text-white/60 text-sm gap-2">
                  <MapPin size={16} className="text-primary" />
                  {project.location}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 md:gap-8">
                <div className="bg-white/5 rounded-xl px-4 py-3 min-w-[120px]">
                  <p className="text-xs text-white/40 uppercase font-bold mb-1">Attached CPs</p>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-accent" />
                    <span className="text-xl font-bold">{project.cpCount}</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl px-4 py-3 min-w-[120px]">
                  <p className="text-xs text-white/40 uppercase font-bold mb-1">Ads Running</p>
                  <div className="flex items-center gap-2">
                    <Megaphone size={16} className="text-purple-400" />
                    <span className="text-xl font-bold">{project.adsRunning}</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl px-4 py-3 min-w-[120px]">
                  <p className="text-xs text-white/40 uppercase font-bold mb-1">Total Leads</p>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-[10px]">↑</span>
                    <span className="text-xl font-bold">{project.totalLeads}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => toggleExpand(project.id)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                  expandedProject === project.id 
                    ? "bg-white text-black" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {expandedProject === project.id ? "Hide Details" : "View Details"}
                {expandedProject === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>

            {/* Expanded Details */}
            {expandedProject === project.id && (
              <div className="border-t border-white/10 bg-black/20 animate-in slide-in-from-top-2 duration-300">
                <div className="p-6">
                  <h4 className="font-bold text-white mb-4">Channel Partners for {project.name}</h4>
                  <div className="overflow-x-auto rounded-xl border border-white/10">
                    <table className="w-full text-left">
                      <thead className="bg-white/5 text-white/60 text-xs uppercase tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-medium">CP Name</th>
                          <th className="px-6 py-4 font-medium">Company</th>
                          <th className="px-6 py-4 font-medium">Leads Generated</th>
                          <th className="px-6 py-4 font-medium">Running Ads?</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 bg-[#0B0F1A]">
                        {project.details.map((cp, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium">{cp.cpName}</td>
                            <td className="px-6 py-4 text-white/60">{cp.company}</td>
                            <td className="px-6 py-4 font-bold">{cp.leads}</td>
                            <td className="px-6 py-4">
                              {cp.hasAds ? (
                                <span className="inline-flex items-center gap-1 text-green-400 text-xs font-bold uppercase">
                                  <span className="w-2 h-2 rounded-full bg-green-400"></span> Yes
                                </span>
                              ) : (
                                <span className="text-white/30 text-xs font-bold uppercase">No</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
