import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Clock } from 'lucide-react';
import PageWrapper from '../../components/ui/PageWrapper';
import { useAppStore } from '../../store/appStore';
import { BOOKING_STATUS_CONFIG, HOURS, WEEK_DAYS } from '../../utils/constants';

export default function CalendarPage() {
  const bookings = useAppStore((s) => s.bookings);
  const [weekOffset, setWeekOffset] = useState(0);

  // Generate week dates
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + 1 + weekOffset * 7); // Monday

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });

  const formatHeaderDate = (d: Date) =>
    d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  const isToday = (d: Date) =>
    d.toISOString().split('T')[0] === today.toISOString().split('T')[0];

  // Get bookings for a specific date and hour
  const getSlotBookings = (date: Date, hour: number) => {
    const dateStr = date.toISOString().split('T')[0];
    return bookings.filter((b) => {
      if (b.date !== dateStr) return false;
      const startHour = parseInt(b.startTime.split(':')[0], 10);
      const endHour = parseInt(b.endTime.split(':')[0], 10);
      return hour >= startHour && hour < endHour;
    });
  };

  return (
    <PageWrapper
      title="Calendar"
      subtitle="Visual booking timeline — manage your week at a glance"
      actions={
        <button className="btn-accent flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium">
          <Plus size={16} /> New Booking
        </button>
      }
    >
      {/* Week navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setWeekOffset((w) => w - 1)}
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-sm font-medium text-white">
            {formatHeaderDate(weekDates[0])} – {formatHeaderDate(weekDates[6])}
          </span>
          <button
            onClick={() => setWeekOffset((w) => w + 1)}
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
        {weekOffset !== 0 && (
          <button
            onClick={() => setWeekOffset(0)}
            className="text-xs text-brand-400 hover:text-brand-300 font-medium"
          >
            Today
          </button>
        )}
      </div>

      {/* Calendar grid */}
      <div className="glass border border-white/5 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Header row */}
            <div className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-white/5">
              <div className="p-3 flex items-center justify-center">
                <Clock size={14} className="text-slate-500" />
              </div>
              {weekDates.map((d, i) => (
                <div
                  key={i}
                  className={`p-3 text-center border-l border-white/5 ${isToday(d) ? 'bg-brand-500/5' : ''}`}
                >
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                    {WEEK_DAYS[i]}
                  </p>
                  <p
                    className={`text-sm font-semibold mt-0.5 ${
                      isToday(d) ? 'text-brand-400' : 'text-white'
                    }`}
                  >
                    {d.getDate()}
                  </p>
                </div>
              ))}
            </div>

            {/* Time slots */}
            {HOURS.map((hour) => (
              <div
                key={hour}
                className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-white/5 last:border-b-0"
              >
                <div className="p-2 flex items-start justify-center">
                  <span className="text-[10px] text-slate-500 font-mono">
                    {hour.toString().padStart(2, '0')}:00
                  </span>
                </div>
                {weekDates.map((d, di) => {
                  const slotBookings = getSlotBookings(d, hour);
                  return (
                    <div
                      key={di}
                      className={`border-l border-white/5 p-1 min-h-[48px] hover:bg-white/[0.02] transition-colors ${
                        isToday(d) ? 'bg-brand-500/[0.02]' : ''
                      }`}
                    >
                      {slotBookings.map((b) => {
                        const cfg = BOOKING_STATUS_CONFIG[b.status];
                        const startHour = parseInt(b.startTime.split(':')[0], 10);
                        // Only render on first hour to avoid duplicates
                        if (startHour !== hour) return null;
                        const endHour = parseInt(b.endTime.split(':')[0], 10);
                        const span = endHour - startHour;
                        return (
                          <motion.div
                            key={b.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`rounded-lg px-2 py-1.5 border cursor-pointer hover:brightness-110 transition-all ${cfg?.bgClass} ${cfg?.textClass} border-current/20`}
                            style={{ height: `${span * 48 - 4}px`, position: 'relative', zIndex: 10 }}
                          >
                            <p className="text-[10px] font-semibold truncate">{b.serviceName}</p>
                            <p className="text-[9px] opacity-80 truncate">{b.clientName}</p>
                          </motion.div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4">
        {Object.entries(BOOKING_STATUS_CONFIG).map(([key, cfg]) => (
          <div key={key} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: cfg.color }} />
            <span className="text-xs text-slate-400">{cfg.label}</span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
