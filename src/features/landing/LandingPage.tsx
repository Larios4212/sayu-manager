import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Users,
  Package,
  Lightbulb,
  BarChart3,
  Globe,
  ArrowRight,
  Waves,
  Star,
  Zap,
} from 'lucide-react';
import Logo from '../../components/ui/Logo';

const features = [
  { icon: CalendarDays, title: 'Smart Calendar', desc: 'Visual booking calendar with real-time slot management and drag-to-reschedule.', color: 'brand' },
  { icon: Users, title: 'Client Intelligence', desc: 'Track client tiers, lifetime value, visit history, and personalized preferences.', color: 'tropical' },
  { icon: Package, title: 'Resource Tracker', desc: 'Monitor surfboards, kayaks, wetsuits and more with condition & maintenance alerts.', color: 'accent' },
  { icon: Lightbulb, title: 'AI Insights', desc: 'Revenue optimization, demand forecasting, and re-engagement recommendations.', color: 'purple' },
  { icon: BarChart3, title: 'Revenue Analytics', desc: 'Real-time dashboards, service breakdowns, and weekly performance trends.', color: 'pink' },
  { icon: Globe, title: 'Multi-Business', desc: 'Manage surf schools, beach clubs, hostels, tour agencies — all from one platform.', color: 'sand' },
];

const colorMap: Record<string, string> = {
  brand: 'bg-brand-500/15 text-brand-400 border-brand-500/20',
  tropical: 'bg-tropical-500/15 text-tropical-400 border-tropical-500/20',
  accent: 'bg-accent-500/15 text-accent-400 border-accent-500/20',
  purple: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
  pink: 'bg-pink-500/15 text-pink-400 border-pink-500/20',
  sand: 'bg-sand-500/15 text-sand-400 border-sand-500/20',
};

const stats = [
  { value: '2,400+', label: 'Bookings Managed' },
  { value: '340+', label: 'Active Clients' },
  { value: '98%', label: 'Uptime' },
  { value: '4.9★', label: 'User Rating' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface-950 overflow-hidden">
      {/* ── Navbar ──────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <span className="font-bold text-white">SayuManager</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#stats" className="text-sm text-slate-400 hover:text-white transition-colors">Stats</a>
            <a href="#cta" className="text-sm text-slate-400 hover:text-white transition-colors">Get Started</a>
          </div>
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-400 transition-colors"
          >
            Open Dashboard
          </Link>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-accent-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-8">
              <Waves size={14} />
              Built for Sayulita's Beach Businesses
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-white">Manage Your</span>
              <br />
              <span className="tropical-gradient-text">Beach Business</span>
              <br />
              <span className="text-white">Like a Pro</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              The all-in-one management platform for surf schools, beach clubs, hostels,
              and tour agencies. Bookings, clients, inventory, and AI insights — beautifully unified.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-tropical-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-brand-500/25 transition-all flex items-center gap-2"
              >
                Explore Dashboard
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                className="px-8 py-3.5 rounded-xl border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                View Features
              </a>
            </div>
          </motion.div>

          {/* Dashboard preview mock */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 relative"
          >
            <div className="glass border border-white/10 rounded-2xl p-1 shadow-2xl shadow-brand-500/10">
              <div className="bg-surface-900 rounded-xl p-6 space-y-4">
                {/* Fake top bar */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="flex-1 mx-4 h-6 rounded-md bg-white/5" />
                </div>
                {/* Fake content grid */}
                <div className="grid grid-cols-4 gap-3">
                  {['brand', 'accent', 'tropical', 'purple'].map((c, i) => (
                    <div key={i} className={`h-20 rounded-lg bg-gradient-to-br from-${c === 'purple' ? 'purple' : c}-500/20 to-transparent border border-white/5 p-3`}>
                      <div className="w-8 h-2 rounded bg-white/20 mb-2" />
                      <div className="w-16 h-4 rounded bg-white/10" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 h-32 rounded-lg bg-white/5 border border-white/5" />
                  <div className="h-32 rounded-lg bg-white/5 border border-white/5" />
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-brand-500/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────── */}
      <section id="stats" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold tropical-gradient-text">{s.value}</p>
                <p className="text-sm text-slate-400 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────── */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tropical-500/10 border border-tropical-500/20 text-tropical-400 text-xs font-medium mb-4">
              <Zap size={12} /> Powerful Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything Your Beach Business Needs
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Purpose-built tools for the unique challenges of running a business in paradise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border mb-4 ${colorMap[f.color]}`}>
                  <f.icon size={20} />
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ─────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass border border-white/5 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-sand-400 fill-sand-400" />
              ))}
            </div>
            <blockquote className="text-lg text-slate-200 leading-relaxed mb-6 relative z-10">
              "SayuManager transformed how we run our surf school. We went from messy WhatsApp
              groups to a clean dashboard that handles everything — bookings, boards, and clients.
              Our revenue is up 30% since we started using it."
            </blockquote>
            <div>
              <p className="text-white font-semibold">Diego Martínez</p>
              <p className="text-sm text-slate-400">Owner, Olas Sayulita Surf School</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section id="cta" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Ride the Wave?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
              Join the growing community of Sayulita businesses using SayuManager
              to deliver unforgettable experiences.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-tropical-500 text-white font-bold text-base hover:shadow-xl hover:shadow-brand-500/25 transition-all"
            >
              Launch Dashboard
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────── */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo size={20} />
            <span className="text-sm text-slate-400">SayuManager © 2024</span>
          </div>
          <p className="text-xs text-slate-500">
            A portfolio project by Armando Larios · Built with React, TypeScript & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}
