import { Bell, Search, Sun } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import { getInitials } from '../../utils/formatters';

export default function Header() {
  const { business } = useAppStore();

  return (
    <header className="h-16 glass border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-20">
      {/* Search */}
      <div className="relative max-w-md w-full">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Search bookings, clients, resources..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500/30 transition-all"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
          ⌘K
        </kbd>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Weather badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
          <Sun size={14} className="text-sand-400" />
          <span className="text-xs text-slate-300">28°C · Sunny</span>
        </div>

        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
          <Bell size={16} />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-accent-500 border-2 border-surface-800 flex items-center justify-center text-[8px] font-bold text-white">
            3
          </span>
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2 pl-3 border-l border-white/10">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-tropical-500 flex items-center justify-center text-white text-xs font-bold">
            {getInitials(business.name)}
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-white leading-tight">{business.name}</p>
            <p className="text-[10px] text-slate-500">{business.location}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
