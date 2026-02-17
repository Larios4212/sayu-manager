import type { BusinessConfig } from './types';

export const DEFAULT_BUSINESS: BusinessConfig = {
  id: 'biz-1',
  name: 'Olas Sayulita',
  type: 'surf-school',
  tagline: 'Ride the Pacific Wave',
  location: 'Sayulita, Nayarit, MX',
  currency: 'MXN',
};

export const BOOKING_STATUS_CONFIG: Record<string, { label: string; color: string; bgClass: string; textClass: string }> = {
  confirmed: { label: 'Confirmed', color: '#06b6d4', bgClass: 'bg-brand-500/15', textClass: 'text-brand-400' },
  pending: { label: 'Pending', color: '#f59e0b', bgClass: 'bg-amber-500/15', textClass: 'text-amber-400' },
  'in-progress': { label: 'In Progress', color: '#22c55e', bgClass: 'bg-emerald-500/15', textClass: 'text-emerald-400' },
  completed: { label: 'Completed', color: '#8b5cf6', bgClass: 'bg-purple-500/15', textClass: 'text-purple-400' },
  cancelled: { label: 'Cancelled', color: '#ef4444', bgClass: 'bg-red-500/15', textClass: 'text-red-400' },
};

export const SERVICE_CATEGORY_CONFIG: Record<string, { label: string; emoji: string; color: string }> = {
  lesson: { label: 'Lesson', emoji: '🏄', color: '#06b6d4' },
  rental: { label: 'Rental', emoji: '🏖️', color: '#f97316' },
  tour: { label: 'Tour', emoji: '🚤', color: '#22c55e' },
  event: { label: 'Event', emoji: '🎉', color: '#8b5cf6' },
  accommodation: { label: 'Stay', emoji: '🛏️', color: '#ec4899' },
  food: { label: 'Food & Drink', emoji: '🍹', color: '#eab308' },
};

export const CLIENT_TIER_CONFIG: Record<string, { label: string; badgeClass: string; emoji: string }> = {
  new: { label: 'New', badgeClass: 'badge-info', emoji: '🌱' },
  regular: { label: 'Regular', badgeClass: 'badge-brand', emoji: '🌊' },
  frequent: { label: 'Frequent', badgeClass: 'badge-accent', emoji: '⭐' },
  vip: { label: 'VIP', badgeClass: 'badge-vip', emoji: '👑' },
};

export const RESOURCE_STATUS_CONFIG: Record<string, { label: string; color: string; bgClass: string; textClass: string }> = {
  available: { label: 'Available', color: '#22c55e', bgClass: 'bg-emerald-500/15', textClass: 'text-emerald-400' },
  'in-use': { label: 'In Use', color: '#06b6d4', bgClass: 'bg-brand-500/15', textClass: 'text-brand-400' },
  maintenance: { label: 'Maintenance', color: '#f59e0b', bgClass: 'bg-amber-500/15', textClass: 'text-amber-400' },
  retired: { label: 'Retired', color: '#6b7280', bgClass: 'bg-gray-500/15', textClass: 'text-gray-400' },
};

export const RESOURCE_CATEGORY_CONFIG: Record<string, { label: string; emoji: string }> = {
  surfboard: { label: 'Surfboard', emoji: '🏄' },
  wetsuit: { label: 'Wetsuit', emoji: '🤿' },
  kayak: { label: 'Kayak', emoji: '🛶' },
  snorkel: { label: 'Snorkel Set', emoji: '🤿' },
  bike: { label: 'Bike', emoji: '🚲' },
  equipment: { label: 'Equipment', emoji: '⚙️' },
  vehicle: { label: 'Vehicle', emoji: '🚐' },
  space: { label: 'Space', emoji: '🏠' },
};

export const CHART_COLORS = {
  primary: '#06b6d4',
  primaryLight: '#22d3ee',
  accent: '#f97316',
  accentLight: '#fb923c',
  tropical: '#22c55e',
  sand: '#eab308',
  purple: '#8b5cf6',
  pink: '#ec4899',
  muted: '#475569',
  grid: '#1e293b',
};

export const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const HOURS = Array.from({ length: 12 }, (_, i) => i + 7); // 7am to 6pm
