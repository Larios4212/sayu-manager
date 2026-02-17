import { motion } from 'framer-motion';
import {
  Lightbulb,
  TrendingUp,
  Users,
  Package,
  BarChart3,
  ArrowRight,
  X,
  Zap,
  Target,
} from 'lucide-react';
import PageWrapper from '../../components/ui/PageWrapper';
import { useAppStore } from '../../store/appStore';
import type { InsightType } from '../../utils/types';

const typeConfig: Record<InsightType, { icon: typeof TrendingUp; color: string; bgClass: string; textClass: string }> = {
  revenue: { icon: TrendingUp, color: '#06b6d4', bgClass: 'bg-brand-500/15', textClass: 'text-brand-400' },
  demand: { icon: BarChart3, color: '#f97316', bgClass: 'bg-accent-500/15', textClass: 'text-accent-400' },
  inventory: { icon: Package, color: '#f59e0b', bgClass: 'bg-amber-500/15', textClass: 'text-amber-400' },
  client: { icon: Users, color: '#22c55e', bgClass: 'bg-tropical-500/15', textClass: 'text-tropical-400' },
  trend: { icon: Target, color: '#8b5cf6', bgClass: 'bg-purple-500/15', textClass: 'text-purple-400' },
};

const impactColors: Record<string, string> = {
  high: 'text-red-400 bg-red-500/15 border-red-500/20',
  medium: 'text-amber-400 bg-amber-500/15 border-amber-500/20',
  low: 'text-slate-400 bg-slate-500/15 border-slate-500/20',
};

export default function InsightsPage() {
  const { insights, dismissInsight } = useAppStore();
  const active = insights.filter((i) => !i.dismissed);
  const dismissed = insights.filter((i) => i.dismissed);

  return (
    <PageWrapper
      title="AI Insights"
      subtitle="Smart recommendations powered by your business data"
      actions={
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-500/10 border border-brand-500/20">
          <Zap size={14} className="text-brand-400" />
          <span className="text-xs text-brand-400 font-medium">{active.length} active insights</span>
        </div>
      }
    >
      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass border border-red-500/20 rounded-xl p-4 bg-gradient-to-br from-red-500/10 to-transparent">
          <p className="text-xs text-red-400 font-medium uppercase tracking-wider mb-1">High Priority</p>
          <p className="text-2xl font-bold text-white">{active.filter((i) => i.impact === 'high').length}</p>
        </div>
        <div className="glass border border-amber-500/20 rounded-xl p-4 bg-gradient-to-br from-amber-500/10 to-transparent">
          <p className="text-xs text-amber-400 font-medium uppercase tracking-wider mb-1">Medium Priority</p>
          <p className="text-2xl font-bold text-white">{active.filter((i) => i.impact === 'medium').length}</p>
        </div>
        <div className="glass border border-slate-500/20 rounded-xl p-4 bg-gradient-to-br from-slate-500/10 to-transparent">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Low Priority</p>
          <p className="text-2xl font-bold text-white">{active.filter((i) => i.impact === 'low').length}</p>
        </div>
      </div>

      {/* Active Insights */}
      <div className="space-y-4">
        {active.map((insight, i) => {
          const cfg = typeConfig[insight.type];
          const Icon = cfg.icon;

          return (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${cfg.bgClass}`}>
                  <Icon size={20} className={cfg.textClass} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-white">{insight.title}</h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${impactColors[insight.impact]}`}>
                          {insight.impact}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">{insight.description}</p>
                    </div>
                    <button
                      onClick={() => dismissInsight(insight.id)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium ${cfg.textClass}`}>{insight.metric}</span>
                    </div>
                    <button className="flex items-center gap-1 text-xs text-brand-400 hover:text-brand-300 font-medium transition-colors">
                      {insight.actionLabel} <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dismissed */}
      {dismissed.length > 0 && (
        <div>
          <h3 className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-3">
            Dismissed ({dismissed.length})
          </h3>
          <div className="space-y-2">
            {dismissed.map((insight) => {
              const cfg = typeConfig[insight.type];
              const Icon = cfg.icon;
              return (
                <div
                  key={insight.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 opacity-50"
                >
                  <Icon size={16} className={cfg.textClass} />
                  <span className="text-sm text-slate-400 flex-1">{insight.title}</span>
                  <span className="text-xs text-slate-500">{insight.metric}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {active.length === 0 && (
        <div className="text-center py-16">
          <Lightbulb size={40} className="text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400">All insights have been addressed. Great work! 🎉</p>
        </div>
      )}
    </PageWrapper>
  );
}
