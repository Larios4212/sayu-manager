import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Package,
  Lightbulb,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Logo from '../ui/Logo';
import { useAppStore } from '../../store/appStore';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/calendar', icon: CalendarDays, label: 'Calendar' },
  { to: '/clients', icon: Users, label: 'Clients' },
  { to: '/resources', icon: Package, label: 'Resources' },
  { to: '/insights', icon: Lightbulb, label: 'Insights' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  const { sidebarOpen, toggleSidebar, business } = useAppStore();

  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarOpen ? 240 : 72 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 h-screen z-30 glass border-r border-white/5 flex flex-col"
    >
      {/* Logo */}
      <div className="h-16 flex items-center gap-3 px-4 border-b border-white/5">
        <Logo size={32} />
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="overflow-hidden"
          >
            <h1 className="text-sm font-bold text-white truncate leading-tight">{business.name}</h1>
            <p className="text-[10px] text-brand-400 font-medium uppercase tracking-wider">SayuManager</p>
          </motion.div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative ${
                isActive
                  ? 'bg-brand-500/15 text-brand-400'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-brand-500/15 border border-brand-500/20"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <Icon size={20} className="relative z-10 shrink-0" />
                {sidebarOpen && (
                  <span className="relative z-10 truncate">{label}</span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Toggle */}
      <div className="p-3 border-t border-white/5">
        <button
          onClick={toggleSidebar}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-xs"
        >
          {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          {sidebarOpen && <span>Collapse</span>}
        </button>
      </div>
    </motion.aside>
  );
}
