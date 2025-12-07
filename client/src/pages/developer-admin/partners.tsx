import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "John Doe",
      company: "Apex Realty",
      city: "Chandigarh",
      projects: 3,
      totalLeads: 245
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Sharma Associates",
      city: "Zirakpur",
      projects: 1,
      totalLeads: 210
    },
    {
      id: 3,
      name: "Vikram Singh",
      company: "Bangalore Realtors",
      city: "Bangalore",
      projects: 2,
      totalLeads: 320
    },
    {
      id: 4,
      name: "Robert Wilson",
      company: "Goa Prime",
      city: "Goa",
      projects: 1,
      totalLeads: 150
    },
    {
      id: 5,
      name: "Sarah Smith",
      company: "Dream Homes",
      city: "Mohali",
      projects: 2,
      totalLeads: 85
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-display font-bold mb-2">Channel Partners</h2>
        <p className="text-white/60">All partners working on your projects.</p>
      </div>

      <div className="bg-[#0B0F1A] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-white/60 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">CP Name</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">City</th>
                <th className="px-6 py-4 font-medium">Projects Assigned</th>
                <th className="px-6 py-4 font-medium">Total Leads</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {partners.map((partner) => (
                <tr key={partner.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center font-bold text-xs">
                        {partner.name.charAt(0)}
                      </div>
                      <span className="font-medium">{partner.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/60">{partner.company}</td>
                  <td className="px-6 py-4 text-white/60">{partner.city}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-white/80 border border-white/10">
                      {partner.projects} Projects
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-primary">{partner.totalLeads}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors">
                        <Phone size={16} />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors">
                        <Mail size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Partners;
