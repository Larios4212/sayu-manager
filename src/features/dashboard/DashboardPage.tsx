import {
  CalendarDays,
  DollarSign,
  Users,
  Package,
  TrendingUp,
  Star,

} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import PageWrapper from '../../components/ui/PageWrapper';
import StatCard from '../../components/ui/StatCard';
import { useAppStore } from '../../store/appStore';
import {
  mockDashboardStats,
  mockRevenueData,
  mockServiceRevenue,
  mockActivity,
} from '../../services/mockData';
import { formatCurrency, formatRelativeTime } from '../../utils/formatters';
import { BOOKING_STATUS_CONFIG, CHART_COLORS } from '../../utils/constants';

const PIE_COLORS = [CHART_COLORS.primary, CHART_COLORS.accent, CHART_COLORS.tropical, CHART_COLORS.purple, CHART_COLORS.pink];

const activityIcons: Record<string, string> = {
  booking: '📅',
  payment: '💰',
  client: '👤',
  resource: '🏄',
};

export default function DashboardPage() {
  const bookings = useAppStore((s) => s.bookings);
  const todayBookings = bookings.filter(
    (b) => b.date === new Date().toISOString().split('T')[0]
  );

  return (
    <PageWrapper title="Dashboard" subtitle="Real-time overview of your beach business">
      {/* ── Stats Grid ───────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Today's Bookings"
          value={mockDashboardStats.todayBookings}
          icon={<CalendarDays size={20} />}
          trend={{ value: 12, positive: true }}
          color="brand"
          delay={0}
        />
        <StatCard
          label="Today's Revenue"
          value={mockDashboardStats.todayRevenue}
          prefix="$"
          icon={<DollarSign size={20} />}
          trend={{ value: 8, positive: true }}
          color="tropical"
          delay={1}
        />
        <StatCard
          label="Active Clients"
          value={mockDashboardStats.activeClients}
          icon={<Users size={20} />}
          trend={{ value: 5, positive: true }}
          color="accent"
          delay={2}
        />
        <StatCard
          label="Resource Utilization"
          value={mockDashboardStats.resourceUtilization}
          suffix="%"
          icon={<Package size={20} />}
          trend={{ value: 3, positive: false }}
          color="purple"
          delay={3}
        />
      </div>

      {/* ── Second Row: Extra KPIs ──── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Weekly Bookings" value={mockDashboardStats.weeklyBookings} icon={<TrendingUp size={20} />} color="pink" delay={4} />
        <StatCard label="Monthly Revenue" value={mockDashboardStats.monthlyRevenue} prefix="$" icon={<DollarSign size={20} />} color="sand" delay={5} />
        <StatCard label="Avg Rating" value={48} prefix="" suffix="" icon={<Star size={20} />} color="accent" delay={6} />
        <StatCard label="Repeat Rate" value={mockDashboardStats.repeatRate} suffix="%" icon={<Users size={20} />} color="brand" delay={7} />
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* ── Revenue Chart ────────── */}
        <div className="lg:col-span-2 glass border border-white/5 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4">Weekly Revenue</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockRevenueData}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                <XAxis dataKey="date" stroke={CHART_COLORS.muted} fontSize={12} />
                <YAxis stroke={CHART_COLORS.muted} fontSize={12} tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip
                  contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, fontSize: 12 }}
                  formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                />
                <Area type="monotone" dataKey="revenue" stroke={CHART_COLORS.primary} fill="url(#revGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ── Service Revenue Pie ──── */}
        <div className="glass border border-white/5 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4">Revenue by Service</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockServiceRevenue}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="revenue"
                >
                  {mockServiceRevenue.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, fontSize: 12 }}
                  formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {mockServiceRevenue.map((s, i) => (
              <div key={s.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: PIE_COLORS[i] }} />
                  <span className="text-slate-300">{s.name}</span>
                </div>
                <span className="text-slate-400">{s.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* ── Today's Bookings ─────── */}
        <div className="lg:col-span-2 glass border border-white/5 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">Today's Bookings</h3>
            <span className="text-xs text-brand-400 font-medium">{todayBookings.length} bookings</span>
          </div>
          <div className="space-y-2">
            {todayBookings.length === 0 && (
              <p className="text-sm text-slate-500 py-8 text-center">No bookings today</p>
            )}
            {todayBookings.map((b) => {
              const statusCfg = BOOKING_STATUS_CONFIG[b.status];
              return (
                <div
                  key={b.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-10 rounded-full" style={{ background: statusCfg?.color }} />
                    <div>
                      <p className="text-sm font-medium text-white">{b.serviceName}</p>
                      <p className="text-xs text-slate-400">{b.clientName} · {b.startTime}–{b.endTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white">{formatCurrency(b.amount)}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusCfg?.bgClass} ${statusCfg?.textClass}`}>
                      {statusCfg?.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Activity Feed ─────────── */}
        <div className="glass border border-white/5 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {mockActivity.slice(0, 6).map((a) => (
              <div key={a.id} className="flex items-start gap-3">
                <span className="text-base mt-0.5">{activityIcons[a.type] || '📌'}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-300 leading-relaxed">{a.message}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{formatRelativeTime(a.timestamp)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bookings Bar Chart ────── */}
      <div className="glass border border-white/5 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-white mb-4">Bookings by Day of Week</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockRevenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
              <XAxis dataKey="date" stroke={CHART_COLORS.muted} fontSize={12} />
              <YAxis stroke={CHART_COLORS.muted} fontSize={12} />
              <Tooltip
                contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, fontSize: 12 }}
              />
              <Bar dataKey="bookings" fill={CHART_COLORS.accent} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </PageWrapper>
  );
}
