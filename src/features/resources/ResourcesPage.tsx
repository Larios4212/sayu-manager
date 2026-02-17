import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import PageWrapper from '../../components/ui/PageWrapper';
import { useAppStore } from '../../store/appStore';
import { RESOURCE_STATUS_CONFIG, RESOURCE_CATEGORY_CONFIG } from '../../utils/constants';
import { useDebounce } from '../../hooks';
import type { ResourceStatus, ResourceCategory } from '../../utils/types';

const statusIcons: Record<string, typeof CheckCircle> = {
  available: CheckCircle,
  'in-use': AlertTriangle,
  maintenance: Wrench,
  retired: XCircle,
};

export default function ResourcesPage() {
  const { resources, updateResource } = useAppStore();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<ResourceStatus | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<ResourceCategory | 'all'>('all');
  const debouncedSearch = useDebounce(search, 200);

  const filtered = resources.filter((r) => {
    if (statusFilter !== 'all' && r.status !== statusFilter) return false;
    if (categoryFilter !== 'all' && r.category !== categoryFilter) return false;
    if (debouncedSearch) {
      return r.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    }
    return true;
  });

  const statusCounts = resources.reduce<Record<string, number>>((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <PageWrapper
      title="Resources"
      subtitle={`${resources.length} total items · ${statusCounts['available'] || 0} available`}
    >
      {/* Status overview cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.entries(RESOURCE_STATUS_CONFIG).map(([key, cfg]) => {
          const Icon = statusIcons[key] || CheckCircle;
          return (
            <motion.button
              key={key}
              whileTap={{ scale: 0.97 }}
              onClick={() => setStatusFilter(statusFilter === key ? 'all' : key as ResourceStatus)}
              className={`p-4 rounded-xl border transition-all ${
                statusFilter === key
                  ? `${cfg.bgClass} border-current/20`
                  : 'bg-white/[0.02] border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon size={16} style={{ color: cfg.color }} />
                <span className="text-xs font-medium" style={{ color: cfg.color }}>{cfg.label}</span>
              </div>
              <p className="text-2xl font-bold text-white">{statusCounts[key] || 0}</p>
            </motion.button>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
              categoryFilter === 'all' ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20' : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10'
            }`}
          >
            All
          </button>
          {Object.entries(RESOURCE_CATEGORY_CONFIG).map(([key, cfg]) => (
            <button
              key={key}
              onClick={() => setCategoryFilter(categoryFilter === key ? 'all' : key as ResourceCategory)}
              className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                categoryFilter === key ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20' : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10'
              }`}
            >
              {cfg.emoji} {cfg.label}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r, i) => {
          const statusCfg = RESOURCE_STATUS_CONFIG[r.status];
          const catCfg = RESOURCE_CATEGORY_CONFIG[r.category];
          const Icon = statusIcons[r.status] || CheckCircle;

          return (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="glass border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all group"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{catCfg?.emoji}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{r.name}</h3>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{catCfg?.label}</p>
                  </div>
                </div>
                <span className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium ${statusCfg?.bgClass} ${statusCfg?.textClass}`}>
                  <Icon size={10} />
                  {statusCfg?.label}
                </span>
              </div>

              {/* Condition bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="text-slate-500">Condition</span>
                  <span className={`font-medium ${r.condition > 70 ? 'text-tropical-400' : r.condition > 40 ? 'text-amber-400' : 'text-red-400'}`}>
                    {r.condition}%
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${r.condition}%` }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    className={`h-full rounded-full ${
                      r.condition > 70 ? 'bg-tropical-500' : r.condition > 40 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                  />
                </div>
              </div>

              {/* Notes */}
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{r.notes}</p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                <span className="text-[10px] text-slate-500">
                  Last check: {r.lastMaintenance}
                </span>
                {r.status === 'available' && (
                  <button
                    onClick={() => updateResource(r.id, { status: 'in-use' })}
                    className="text-[10px] text-brand-400 hover:text-brand-300 font-medium"
                  >
                    Assign →
                  </button>
                )}
                {r.status === 'in-use' && (
                  <button
                    onClick={() => updateResource(r.id, { status: 'available' })}
                    className="text-[10px] text-tropical-400 hover:text-tropical-300 font-medium"
                  >
                    Return →
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-sm text-slate-500">No resources match your filters</p>
        </div>
      )}
    </PageWrapper>
  );
}
