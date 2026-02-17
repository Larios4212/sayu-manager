import type {
  Booking,
  Client,
  Service,
  Resource,
  DashboardStats,
  RevenueDataPoint,
  ServiceRevenuePoint,
  DailyBookingsPoint,
  ActivityItem,
  Insight,
  HourlyDemand,
  CalendarSlot,
} from '../utils/types';

// ── Clients ──────────────────────────────────────
export const mockClients: Client[] = [
  { id: 'cli-1', name: 'Emma Richardson', email: 'emma@gmail.com', phone: '+52 322 114 0091', tier: 'vip', totalBookings: 34, totalSpent: 42600, lastVisit: '2024-11-18T10:00:00', notes: 'Prefers early morning sessions. Advanced surfer.', avatarUrl: '' },
  { id: 'cli-2', name: 'Carlos Méndez', email: 'carlos.m@hotmail.com', phone: '+52 311 200 4455', tier: 'frequent', totalBookings: 18, totalSpent: 15200, lastVisit: '2024-11-17T14:30:00', notes: 'Brings family group. Interested in kayak tours.', avatarUrl: '' },
  { id: 'cli-3', name: 'Sarah Kim', email: 'sarahkim@icloud.com', phone: '+1 415 332 8877', tier: 'frequent', totalBookings: 12, totalSpent: 18900, lastVisit: '2024-11-16T09:00:00', notes: 'Digital nomad. Stays at local hostel.', avatarUrl: '' },
  { id: 'cli-4', name: 'Jake Morrison', email: 'jmorrison@yahoo.com', phone: '+1 310 445 6612', tier: 'regular', totalBookings: 7, totalSpent: 8400, lastVisit: '2024-11-15T16:00:00', notes: 'Beginner surfer. Very enthusiastic.', avatarUrl: '' },
  { id: 'cli-5', name: 'Valentina Rojas', email: 'val.rojas@gmail.com', phone: '+52 322 887 3301', tier: 'vip', totalBookings: 45, totalSpent: 62000, lastVisit: '2024-11-18T08:00:00', notes: 'Local business owner. Refers many clients. VIP treatment.', avatarUrl: '' },
  { id: 'cli-6', name: 'Tobias Werner', email: 'twerner@proton.me', phone: '+49 176 445 3321', tier: 'regular', totalBookings: 5, totalSpent: 6100, lastVisit: '2024-11-14T11:00:00', notes: 'German tourist. Intermediate level.', avatarUrl: '' },
  { id: 'cli-7', name: 'Lucia Fernández', email: 'luciaf@outlook.com', phone: '+52 311 156 7788', tier: 'new', totalBookings: 1, totalSpent: 850, lastVisit: '2024-11-18T15:00:00', notes: 'First time visitor. Interested in group lessons.', avatarUrl: '' },
  { id: 'cli-8', name: 'Ryan O\'Connor', email: 'ryan.oc@gmail.com', phone: '+1 512 990 1234', tier: 'frequent', totalBookings: 15, totalSpent: 22500, lastVisit: '2024-11-17T07:30:00', notes: 'Repeat winter visitor. Loves sunrise sessions.', avatarUrl: '' },
  { id: 'cli-9', name: 'Aiko Tanaka', email: 'aiko.t@gmail.com', phone: '+81 90 3344 5566', tier: 'regular', totalBookings: 4, totalSpent: 5200, lastVisit: '2024-11-13T10:00:00', notes: 'Japanese traveler. Needs English-speaking instructor.', avatarUrl: '' },
  { id: 'cli-10', name: 'Marco Pellegrini', email: 'mpellegrini@gmail.com', phone: '+39 339 887 2211', tier: 'new', totalBookings: 2, totalSpent: 1700, lastVisit: '2024-11-17T13:00:00', notes: 'Couple booking. Interested in snorkel tours.', avatarUrl: '' },
];

// ── Services ──────────────────────────────────────
export const mockServices: Service[] = [
  { id: 'srv-1', name: 'Private Surf Lesson', category: 'lesson', price: 1200, duration: 90, description: 'One-on-one session with certified instructor', isActive: true },
  { id: 'srv-2', name: 'Group Surf Class', category: 'lesson', price: 650, duration: 120, description: 'Up to 6 students. All levels welcome.', isActive: true },
  { id: 'srv-3', name: 'Surfboard Rental', category: 'rental', price: 350, duration: 240, description: 'Soft-top or fiberglass boards available', isActive: true },
  { id: 'srv-4', name: 'Marietas Islands Boat Tour', category: 'tour', price: 1800, duration: 360, description: 'Full-day snorkel & beach tour with lunch', isActive: true },
  { id: 'srv-5', name: 'Sunset Kayak Tour', category: 'tour', price: 900, duration: 120, description: 'Guided kayak through Sayulita bay at sunset', isActive: true },
  { id: 'srv-6', name: 'Full Snorkel Set Rental', category: 'rental', price: 250, duration: 480, description: 'Mask, snorkel & fins – full day', isActive: true },
  { id: 'srv-7', name: 'Beach Bonfire Event', category: 'event', price: 4500, duration: 180, description: 'Private beach setup with music & drinks (12 people)', isActive: true },
  { id: 'srv-8', name: 'Bike Rental – Full Day', category: 'rental', price: 200, duration: 480, description: 'Cruiser bike for exploring town and trails', isActive: true },
  { id: 'srv-9', name: 'Kids Surf Camp', category: 'lesson', price: 500, duration: 150, description: 'Ages 6-12. Safety-first approach. Foam boards.', isActive: true },
  { id: 'srv-10', name: 'Surf & Tacos Combo', category: 'lesson', price: 950, duration: 180, description: '90-min lesson + authentic fish tacos on the beach', isActive: true },
];

// ── Resources ──────────────────────────────────────
export const mockResources: Resource[] = [
  { id: 'res-1', name: 'Longboard 9\'2 – Blue', category: 'surfboard', status: 'available', condition: 92, lastMaintenance: '2024-11-10', notes: 'Great for beginners. Minor wax buildup.' },
  { id: 'res-2', name: 'Shortboard 6\'4 – Fire', category: 'surfboard', status: 'in-use', condition: 85, lastMaintenance: '2024-11-08', notes: 'Assigned to Emma Richardson – session until 11am' },
  { id: 'res-3', name: 'Foam Board 8\'0 – Green', category: 'surfboard', status: 'available', condition: 78, lastMaintenance: '2024-11-12', notes: 'Kids camp primary board. Needs new fin.' },
  { id: 'res-4', name: 'Foam Board 7\'0 – Yellow', category: 'surfboard', status: 'available', condition: 95, lastMaintenance: '2024-11-15', notes: 'Brand new. Perfect condition.' },
  { id: 'res-5', name: 'Wetsuit M – O\'Neill', category: 'wetsuit', status: 'available', condition: 88, lastMaintenance: '2024-11-05', notes: '3/2mm spring suit' },
  { id: 'res-6', name: 'Wetsuit L – Rip Curl', category: 'wetsuit', status: 'in-use', condition: 72, lastMaintenance: '2024-10-28', notes: 'Zipper getting stiff. Schedule repair.' },
  { id: 'res-7', name: 'Tandem Kayak – Sunset', category: 'kayak', status: 'available', condition: 90, lastMaintenance: '2024-11-11', notes: 'Includes 2 paddles and life vests' },
  { id: 'res-8', name: 'Single Kayak – Wave', category: 'kayak', status: 'maintenance', condition: 45, lastMaintenance: '2024-11-01', notes: 'Hull crack. Being repaired at shop.' },
  { id: 'res-9', name: 'Snorkel Set #1', category: 'snorkel', status: 'available', condition: 93, lastMaintenance: '2024-11-14', notes: 'Premium quality. Anti-fog mask.' },
  { id: 'res-10', name: 'Snorkel Set #2', category: 'snorkel', status: 'in-use', condition: 80, lastMaintenance: '2024-11-09', notes: 'Standard set. Rented to Marco P.' },
  { id: 'res-11', name: 'Beach Cruiser Bike #1', category: 'bike', status: 'available', condition: 82, lastMaintenance: '2024-11-06', notes: 'New chain installed. Basket included.' },
  { id: 'res-12', name: 'Beach Cruiser Bike #2', category: 'bike', status: 'retired', condition: 30, lastMaintenance: '2024-10-15', notes: 'Frame bent. Waiting for replacement.' },
  { id: 'res-13', name: 'Van – Panga Tour Shuttle', category: 'vehicle', status: 'available', condition: 88, lastMaintenance: '2024-11-13', notes: '12-seat. Used for Marietas tours.' },
  { id: 'res-14', name: 'Beach Palapa – Main', category: 'space', status: 'in-use', condition: 96, lastMaintenance: '2024-11-16', notes: 'Reserved for bonfire event tonight.' },
];

// ── Bookings ──────────────────────────────────────
const today = new Date();
const todayStr = today.toISOString().split('T')[0];
const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
const tomorrowStr = tomorrow.toISOString().split('T')[0];
const dayAfter = new Date(today); dayAfter.setDate(today.getDate() + 2);
const dayAfterStr = dayAfter.toISOString().split('T')[0];

export const mockBookings: Booking[] = [
  { id: 'bk-1', clientId: 'cli-1', clientName: 'Emma Richardson', serviceId: 'srv-1', serviceName: 'Private Surf Lesson', date: todayStr, startTime: '07:00', endTime: '08:30', status: 'in-progress', amount: 1200, notes: 'Advanced techniques – barrel riding', resourceIds: ['res-2'] },
  { id: 'bk-2', clientId: 'cli-4', clientName: 'Jake Morrison', serviceId: 'srv-2', serviceName: 'Group Surf Class', date: todayStr, startTime: '09:00', endTime: '11:00', status: 'confirmed', amount: 650, notes: '', resourceIds: ['res-1', 'res-3'] },
  { id: 'bk-3', clientId: 'cli-5', clientName: 'Valentina Rojas', serviceId: 'srv-7', serviceName: 'Beach Bonfire Event', date: todayStr, startTime: '19:00', endTime: '22:00', status: 'confirmed', amount: 4500, notes: 'Birthday celebration – 12 guests', resourceIds: ['res-14'] },
  { id: 'bk-4', clientId: 'cli-2', clientName: 'Carlos Méndez', serviceId: 'srv-5', serviceName: 'Sunset Kayak Tour', date: todayStr, startTime: '16:30', endTime: '18:30', status: 'confirmed', amount: 900, notes: 'Family of 4. Needs 2 kayaks.', resourceIds: ['res-7'] },
  { id: 'bk-5', clientId: 'cli-10', clientName: 'Marco Pellegrini', serviceId: 'srv-4', serviceName: 'Marietas Islands Boat Tour', date: tomorrowStr, startTime: '08:00', endTime: '14:00', status: 'confirmed', amount: 3600, notes: 'Couple booking. Includes lunch.', resourceIds: ['res-13', 'res-10'] },
  { id: 'bk-6', clientId: 'cli-3', clientName: 'Sarah Kim', serviceId: 'srv-10', serviceName: 'Surf & Tacos Combo', date: tomorrowStr, startTime: '10:00', endTime: '13:00', status: 'pending', amount: 950, notes: '', resourceIds: ['res-4'] },
  { id: 'bk-7', clientId: 'cli-8', clientName: 'Ryan O\'Connor', serviceId: 'srv-1', serviceName: 'Private Surf Lesson', date: tomorrowStr, startTime: '06:30', endTime: '08:00', status: 'confirmed', amount: 1200, notes: 'Sunrise session', resourceIds: [] },
  { id: 'bk-8', clientId: 'cli-7', clientName: 'Lucia Fernández', serviceId: 'srv-9', serviceName: 'Kids Surf Camp', date: dayAfterStr, startTime: '09:00', endTime: '11:30', status: 'pending', amount: 1000, notes: '2 kids, ages 8 and 10', resourceIds: ['res-3', 'res-4'] },
  { id: 'bk-9', clientId: 'cli-6', clientName: 'Tobias Werner', serviceId: 'srv-3', serviceName: 'Surfboard Rental', date: todayStr, startTime: '10:00', endTime: '14:00', status: 'completed', amount: 350, notes: '', resourceIds: ['res-1'] },
  { id: 'bk-10', clientId: 'cli-9', clientName: 'Aiko Tanaka', serviceId: 'srv-8', serviceName: 'Bike Rental – Full Day', date: todayStr, startTime: '08:00', endTime: '16:00', status: 'confirmed', amount: 200, notes: 'Exploring Playa de los Muertos trail', resourceIds: ['res-11'] },
];

// ── Dashboard Stats ──────────────────────────────
export const mockDashboardStats: DashboardStats = {
  todayBookings: 6,
  todayRevenue: 7800,
  activeClients: 47,
  resourceUtilization: 68,
  weeklyBookings: 38,
  monthlyRevenue: 128500,
  avgRating: 4.8,
  repeatRate: 62,
};

// ── Revenue Data (last 7 days) ──────────────────
export const mockRevenueData: RevenueDataPoint[] = [
  { date: 'Mon', revenue: 15200, bookings: 8 },
  { date: 'Tue', revenue: 11400, bookings: 6 },
  { date: 'Wed', revenue: 18700, bookings: 11 },
  { date: 'Thu', revenue: 14300, bookings: 7 },
  { date: 'Fri', revenue: 22100, bookings: 14 },
  { date: 'Sat', revenue: 28500, bookings: 19 },
  { date: 'Sun', revenue: 24800, bookings: 16 },
];

// ── Service Revenue Breakdown ────────────────────
export const mockServiceRevenue: ServiceRevenuePoint[] = [
  { name: 'Surf Lessons', revenue: 42000, percentage: 33 },
  { name: 'Tours', revenue: 31200, percentage: 24 },
  { name: 'Rentals', revenue: 18700, percentage: 15 },
  { name: 'Events', revenue: 22500, percentage: 18 },
  { name: 'Combos', revenue: 14100, percentage: 10 },
];

// ── Daily Bookings (14 days) ─────────────────────
export const mockDailyBookings: DailyBookingsPoint[] = Array.from({ length: 14 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - 13 + i);
  return {
    date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    count: Math.floor(Math.random() * 12) + 4,
  };
});

// ── Activity Feed ────────────────────────────────
export const mockActivity: ActivityItem[] = [
  { id: 'act-1', type: 'booking', message: 'Emma Richardson booked a Private Surf Lesson', timestamp: new Date(Date.now() - 12 * 60000).toISOString(), relatedId: 'bk-1' },
  { id: 'act-2', type: 'payment', message: 'Payment received: $4,500 MXN – Beach Bonfire Event', timestamp: new Date(Date.now() - 35 * 60000).toISOString(), relatedId: 'bk-3' },
  { id: 'act-3', type: 'client', message: 'New client registered: Lucia Fernández', timestamp: new Date(Date.now() - 2 * 3600000).toISOString(), relatedId: 'cli-7' },
  { id: 'act-4', type: 'resource', message: 'Single Kayak – Wave marked for maintenance', timestamp: new Date(Date.now() - 4 * 3600000).toISOString(), relatedId: 'res-8' },
  { id: 'act-5', type: 'booking', message: 'Carlos Méndez confirmed Sunset Kayak Tour', timestamp: new Date(Date.now() - 5 * 3600000).toISOString(), relatedId: 'bk-4' },
  { id: 'act-6', type: 'client', message: 'Valentina Rojas upgraded to VIP tier', timestamp: new Date(Date.now() - 8 * 3600000).toISOString(), relatedId: 'cli-5' },
  { id: 'act-7', type: 'booking', message: 'Ryan O\'Connor booked sunrise surf session', timestamp: new Date(Date.now() - 12 * 3600000).toISOString(), relatedId: 'bk-7' },
  { id: 'act-8', type: 'payment', message: 'Refund processed: $350 MXN – Tobias Werner', timestamp: new Date(Date.now() - 24 * 3600000).toISOString(), relatedId: 'bk-9' },
];

// ── AI Insights ──────────────────────────────────
export const mockInsights: Insight[] = [
  { id: 'ins-1', type: 'revenue', title: 'Weekend Revenue Spike', description: 'Saturday & Sunday generate 39% of weekly revenue. Consider premium pricing for weekend surf lessons to maximize earnings.', impact: 'high', metric: '+$12,400/week potential', actionLabel: 'View Pricing', dismissed: false },
  { id: 'ins-2', type: 'demand', title: 'Morning Slot Shortage', description: '7-9 AM lessons are booked 94% of the time. Adding a second instructor could capture $8,200/month in missed bookings.', impact: 'high', metric: '94% capacity', actionLabel: 'See Calendar', dismissed: false },
  { id: 'ins-3', type: 'inventory', title: 'Wetsuit Maintenance Overdue', description: '2 wetsuits have not been inspected in over 30 days. Schedule maintenance to prevent equipment degradation.', impact: 'medium', metric: '2 items flagged', actionLabel: 'View Resources', dismissed: false },
  { id: 'ins-4', type: 'client', title: 'VIP Client Re-engagement', description: 'Sarah Kim hasn\'t booked in 5 days despite 12 lifetime bookings. Send a personalized offer to retain this frequent client.', impact: 'medium', metric: '$18,900 lifetime value', actionLabel: 'View Client', dismissed: false },
  { id: 'ins-5', type: 'trend', title: 'Snorkel Tour Trending Up', description: 'Snorkel-related bookings increased 34% this month compared to last month. Consider adding more snorkel sets to inventory.', impact: 'low', metric: '+34% MoM', actionLabel: 'See Trend', dismissed: false },
  { id: 'ins-6', type: 'revenue', title: 'Combo Package Performance', description: 'The Surf & Tacos Combo has a 78% booking-to-completion rate and highest satisfaction score. Feature it prominently.', impact: 'medium', metric: '78% completion', actionLabel: 'View Service', dismissed: false },
];

// ── Hourly Demand Heatmap ────────────────────────
export const mockHourlyDemand: HourlyDemand[] = [
  { hour: 7, day: 'Mon', bookings: 2 }, { hour: 8, day: 'Mon', bookings: 3 }, { hour: 9, day: 'Mon', bookings: 4 }, { hour: 10, day: 'Mon', bookings: 3 }, { hour: 11, day: 'Mon', bookings: 2 }, { hour: 12, day: 'Mon', bookings: 1 },
  { hour: 13, day: 'Mon', bookings: 1 }, { hour: 14, day: 'Mon', bookings: 2 }, { hour: 15, day: 'Mon', bookings: 2 }, { hour: 16, day: 'Mon', bookings: 3 }, { hour: 17, day: 'Mon', bookings: 4 }, { hour: 18, day: 'Mon', bookings: 3 },
  { hour: 7, day: 'Sat', bookings: 5 }, { hour: 8, day: 'Sat', bookings: 6 }, { hour: 9, day: 'Sat', bookings: 7 }, { hour: 10, day: 'Sat', bookings: 6 }, { hour: 11, day: 'Sat', bookings: 5 }, { hour: 12, day: 'Sat', bookings: 3 },
  { hour: 13, day: 'Sat', bookings: 2 }, { hour: 14, day: 'Sat', bookings: 3 }, { hour: 15, day: 'Sat', bookings: 4 }, { hour: 16, day: 'Sat', bookings: 5 }, { hour: 17, day: 'Sat', bookings: 6 }, { hour: 18, day: 'Sat', bookings: 5 },
];

// ── Calendar Slots (today) ───────────────────────
export const mockCalendarSlots: CalendarSlot[] = [
  { id: 'slot-1', bookingId: 'bk-1', time: '07:00', duration: 90, title: 'Private Surf – Emma R.', status: 'in-progress', resourceName: 'Shortboard 6\'4' },
  { id: 'slot-2', bookingId: 'bk-2', time: '09:00', duration: 120, title: 'Group Surf Class – Jake M. +5', status: 'confirmed', resourceName: 'Longboard 9\'2 + Foam 8\'0' },
  { id: 'slot-3', bookingId: 'bk-10', time: '08:00', duration: 480, title: 'Bike Rental – Aiko T.', status: 'confirmed', resourceName: 'Beach Cruiser #1' },
  { id: 'slot-4', bookingId: 'bk-9', time: '10:00', duration: 240, title: 'Board Rental – Tobias W.', status: 'completed', resourceName: 'Longboard 9\'2' },
  { id: 'slot-5', bookingId: 'bk-4', time: '16:30', duration: 120, title: 'Sunset Kayak – Carlos M. +3', status: 'confirmed', resourceName: 'Tandem Kayak' },
  { id: 'slot-6', bookingId: 'bk-3', time: '19:00', duration: 180, title: '🔥 Bonfire – Valentina R.', status: 'confirmed', resourceName: 'Beach Palapa' },
];
