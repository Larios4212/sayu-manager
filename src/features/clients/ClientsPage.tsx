import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Mail,
  Phone,
  Star,
  ChevronDown,
  DollarSign,
  CalendarDays,
} from 'lucide-react';
import PageWrapper from '../../components/ui/PageWrapper';
import Modal from '../../components/ui/Modal';
import { useAppStore } from '../../store/appStore';
import { CLIENT_TIER_CONFIG } from '../../utils/constants';
import { formatCurrency, formatRelativeTime, getInitials } from '../../utils/formatters';
import { useDebounce } from '../../hooks';
import type { Client, ClientTier } from '../../utils/types';

const tierOrder: ClientTier[] = ['vip', 'frequent', 'regular', 'new'];

export default function ClientsPage() {
  const { clients, openModal, modalData } = useAppStore();
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState<ClientTier | 'all'>('all');
  const debouncedSearch = useDebounce(search, 200);

  const filtered = clients
    .filter((c) => {
      if (tierFilter !== 'all' && c.tier !== tierFilter) return false;
      if (debouncedSearch) {
        const q = debouncedSearch.toLowerCase();
        return c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
      }
      return true;
    })
    .sort((a, b) => tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier));

  const selectedClient = modalData as Client | null;

  return (
    <PageWrapper
      title="Clients"
      subtitle={`${clients.length} total clients · ${clients.filter((c) => c.tier === 'vip').length} VIPs`}
      actions={
        <button className="btn-accent flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium">
          <Plus size={16} /> Add Client
        </button>
      }
    >
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setTierFilter('all')}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
              tierFilter === 'all' ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20' : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10'
            }`}
          >
            All
          </button>
          {tierOrder.map((t) => {
            const cfg = CLIENT_TIER_CONFIG[t];
            return (
              <button
                key={t}
                onClick={() => setTierFilter(t)}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  tierFilter === t ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20' : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10'
                }`}
              >
                {cfg.emoji} {cfg.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clients Table */}
      <div className="glass border border-white/5 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left text-[10px] uppercase tracking-wider text-slate-500 font-medium px-5 py-3">Client</th>
                <th className="text-left text-[10px] uppercase tracking-wider text-slate-500 font-medium px-5 py-3">Tier</th>
                <th className="text-left text-[10px] uppercase tracking-wider text-slate-500 font-medium px-5 py-3">Bookings</th>
                <th className="text-left text-[10px] uppercase tracking-wider text-slate-500 font-medium px-5 py-3">Total Spent</th>
                <th className="text-left text-[10px] uppercase tracking-wider text-slate-500 font-medium px-5 py-3">Last Visit</th>
                <th className="text-right text-[10px] uppercase tracking-wider text-slate-500 font-medium px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => {
                const tierCfg = CLIENT_TIER_CONFIG[c.tier];
                return (
                  <motion.tr
                    key={c.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors cursor-pointer"
                    onClick={() => openModal('client-detail', c)}
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500/30 to-tropical-500/30 flex items-center justify-center text-white text-xs font-bold">
                          {getInitials(c.name)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{c.name}</p>
                          <p className="text-xs text-slate-500">{c.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${tierCfg.badgeClass}`}>
                        {tierCfg.emoji} {tierCfg.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-slate-300">{c.totalBookings}</td>
                    <td className="px-5 py-3.5 text-sm font-medium text-white">{formatCurrency(c.totalSpent)}</td>
                    <td className="px-5 py-3.5 text-xs text-slate-400">{formatRelativeTime(c.lastVisit)}</td>
                    <td className="px-5 py-3.5 text-right">
                      <ChevronDown size={14} className="text-slate-500 inline-block -rotate-90" />
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-sm text-slate-500">No clients found</p>
          </div>
        )}
      </div>

      {/* Client Detail Modal */}
      <Modal id="client-detail" title="Client Details" wide>
        {selectedClient && (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500/30 to-tropical-500/30 flex items-center justify-center text-white text-lg font-bold">
                {getInitials(selectedClient.name)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{selectedClient.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${CLIENT_TIER_CONFIG[selectedClient.tier].badgeClass}`}>
                    {CLIENT_TIER_CONFIG[selectedClient.tier].emoji} {CLIENT_TIER_CONFIG[selectedClient.tier].label}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Mail size={12} /> {selectedClient.email}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Phone size={12} /> {selectedClient.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <CalendarDays size={16} className="text-brand-400 mx-auto mb-1" />
                <p className="text-lg font-bold text-white">{selectedClient.totalBookings}</p>
                <p className="text-[10px] text-slate-500 uppercase">Bookings</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <DollarSign size={16} className="text-tropical-400 mx-auto mb-1" />
                <p className="text-lg font-bold text-white">{formatCurrency(selectedClient.totalSpent)}</p>
                <p className="text-[10px] text-slate-500 uppercase">Total Spent</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <Star size={16} className="text-sand-400 mx-auto mb-1" />
                <p className="text-lg font-bold text-white">{formatRelativeTime(selectedClient.lastVisit)}</p>
                <p className="text-[10px] text-slate-500 uppercase">Last Visit</p>
              </div>
            </div>

            {/* Notes */}
            {selectedClient.notes && (
              <div>
                <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Notes</h4>
                <p className="text-sm text-slate-300 bg-white/5 rounded-lg p-3">{selectedClient.notes}</p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </PageWrapper>
  );
}
