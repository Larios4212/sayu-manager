import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Palette,
  Globe,
  MapPin,
  DollarSign,
  Save,
  Check,
  Waves,
} from 'lucide-react';
import PageWrapper from '../../components/ui/PageWrapper';
import { useAppStore } from '../../store/appStore';
import type { BusinessType } from '../../utils/types';

const businessTypes: { value: BusinessType; label: string; emoji: string }[] = [
  { value: 'surf-school', label: 'Surf School', emoji: '🏄' },
  { value: 'beach-club', label: 'Beach Club', emoji: '🏖️' },
  { value: 'hostel', label: 'Hostel', emoji: '🛏️' },
  { value: 'tours', label: 'Tour Agency', emoji: '🚤' },
  { value: 'restaurant', label: 'Restaurant', emoji: '🍽️' },
];

export default function SettingsPage() {
  const { business, updateBusiness } = useAppStore();
  const [form, setForm] = useState({ ...business });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateBusiness(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <PageWrapper
      title="Settings"
      subtitle="Customize your SayuManager experience"
    >
      <div className="max-w-2xl space-y-6">
        {/* Business Identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass border border-white/5 rounded-xl p-6"
        >
          <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-5">
            <Building2 size={16} className="text-brand-400" />
            Business Identity
          </h3>

          <div className="space-y-4">
            {/* Business Name */}
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-1.5">Business Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all"
                placeholder="Your business name"
              />
            </div>

            {/* Tagline */}
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-1.5">Tagline</label>
              <input
                type="text"
                value={form.tagline || ''}
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all"
                placeholder="A short catchphrase"
              />
            </div>

            {/* Business Type */}
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-2">Business Type</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {businessTypes.map(({ value, label, emoji }) => (
                  <button
                    key={value}
                    onClick={() => setForm({ ...form, type: value })}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium transition-all border ${
                      form.type === value
                        ? 'bg-brand-500/15 text-brand-400 border-brand-500/20'
                        : 'bg-white/[0.03] text-slate-400 border-white/5 hover:bg-white/5'
                    }`}
                  >
                    <span>{emoji}</span>
                    {label}
                    {form.type === value && <Check size={12} className="ml-auto" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location & Currency */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass border border-white/5 rounded-xl p-6"
        >
          <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-5">
            <Globe size={16} className="text-tropical-400" />
            Location & Currency
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-1.5">
                <MapPin size={12} className="inline mr-1" /> Location
              </label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-1.5">
                <DollarSign size={12} className="inline mr-1" /> Currency
              </label>
              <select
                value={form.currency}
                onChange={(e) => setForm({ ...form, currency: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all appearance-none"
              >
                <option value="MXN">MXN – Mexican Peso</option>
                <option value="USD">USD – US Dollar</option>
                <option value="EUR">EUR – Euro</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Logo Upload (simulated) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass border border-white/5 rounded-xl p-6"
        >
          <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-5">
            <Palette size={16} className="text-accent-400" />
            Branding
          </h3>

          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-brand-500/30 to-tropical-500/30 border border-white/10 flex items-center justify-center">
              <Waves size={28} className="text-brand-400" />
            </div>
            <div>
              <p className="text-sm text-white font-medium mb-1">Business Logo</p>
              <p className="text-xs text-slate-400 mb-3">Upload a logo (SVG or PNG recommended)</p>
              <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 hover:bg-white/10 transition-colors">
                Upload Image
              </button>
            </div>
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <button
            onClick={handleSave}
            className="btn-accent flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium"
          >
            {saved ? <Check size={16} /> : <Save size={16} />}
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
          {saved && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs text-tropical-400"
            >
              ✓ Business profile updated
            </motion.span>
          )}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
