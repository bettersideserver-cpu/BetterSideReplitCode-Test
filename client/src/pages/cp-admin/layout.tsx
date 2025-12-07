import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Users, 
  Megaphone, 
  BarChart3, 
  UserCircle, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import logoIcon from "@assets/generated_images/simple_abstract_logo_icon.png";

interface CpAdminLayoutProps {
  children: React.ReactNode;
}

const CpAdminLayout = ({ children }: CpAdminLayoutProps) => {
  const [location, setLocation] = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Access Control Check
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "cp") {
      setLocation("/"); // Redirect to home if not CP
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setLocation("/");
  };

  const navigation = [
    { name: "Dashboard", href: "/cp-dashboard", icon: LayoutDashboard },
    { name: "Leads", href: "/cp-dashboard/leads", icon: Users },
    { name: "Run Ads", href: "/cp-dashboard/ads", icon: Megaphone },
    { name: "Marketing Support", href: "/cp-dashboard/marketing", icon: BarChart3 },
    { name: "Profile", href: "/cp-dashboard/profile", icon: UserCircle },
  ];

  const isActive = (path: string) => {
    if (path === "/cp-dashboard" && location === "/cp-dashboard") return true;
    if (path !== "/cp-dashboard" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:sticky top-0 left-0 h-screen w-64 bg-[#0B0F1A] border-r border-white/10 z-50
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <img src={logoIcon} alt="BetterSide" className="w-8 h-8 object-contain" />
            <span className="text-xl font-display font-bold tracking-tight">CP Panel</span>
            <button 
              className="md:hidden ml-auto text-white/60"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link key={item.name} href={item.href}>
                  <div 
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group
                      ${active 
                        ? "bg-primary text-white shadow-[0_0_15px_rgba(0,87,255,0.3)]" 
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                      }
                    `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon size={20} className={active ? "text-white" : "group-hover:text-primary transition-colors"} />
                    <span className="font-medium text-sm">{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* User Profile / Logout */}
          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 px-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">John Doe</p>
                <p className="text-xs text-white/40 truncate">Apex Realty</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden h-16 border-b border-white/10 flex items-center px-6 bg-[#0B0F1A]">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} className="text-white" />
          </button>
          <span className="ml-4 font-bold">CP Dashboard</span>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-8 lg:p-10 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default CpAdminLayout;
