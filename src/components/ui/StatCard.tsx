import { motion } from 'framer-motion';
import { useAnimatedCounter } from '../../hooks';
import type { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: ReactNode;
  trend?: { value: number; positive: boolean };
  color?: string;
  delay?: number;
}

export default function StatCard({
  label,
  value,
  prefix = '',
  suffix = '',
  icon,
  trend,
  color = 'brand',
  delay = 0,
}: StatCardProps) {
  const animated = useAnimatedCounter(value);

  const colorMap: Record<string, string> = {
    brand: 'from-brand-500/20 to-brand-600/5 border-brand-500/20',
    accent: 'from-accent-500/20 to-accent-600/5 border-accent-500/20',
    tropical: 'from-tropical-500/20 to-tropical-600/5 border-tropical-500/20',
    purple: 'from-purple-500/20 to-purple-600/5 border-purple-500/20',
    pink: 'from-pink-500/20 to-pink-600/5 border-pink-500/20',
    sand: 'from-sand-500/20 to-sand-600/5 border-sand-500/20',
  };

  const iconColorMap: Record<string, string> = {
    brand: 'text-brand-400 bg-brand-500/15',
    accent: 'text-accent-400 bg-accent-500/15',
    tropical: 'text-tropical-400 bg-tropical-500/15',
    purple: 'text-purple-400 bg-purple-500/15',
    pink: 'text-pink-400 bg-pink-500/15',
    sand: 'text-sand-400 bg-sand-500/15',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-xl p-5 border bg-gradient-to-br ${colorMap[color] || colorMap.brand}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</p>
          <p className="text-2xl font-bold text-white mt-2">
            {prefix}{animated.toLocaleString()}{suffix}
          </p>
          {trend && (
            <p className={`text-xs mt-1 font-medium ${trend.positive ? 'text-tropical-400' : 'text-red-400'}`}>
              {trend.positive ? '↑' : '↓'} {Math.abs(trend.value)}% vs last week
            </p>
          )}
        </div>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconColorMap[color] || iconColorMap.brand}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
