// -- Business --
export type BusinessType = 'surf-school' | 'beach-club' | 'hostel' | 'tours' | 'restaurant';

export interface BusinessConfig {
  id: string;
  name: string;
  type: BusinessType;
  logo?: string;
  tagline: string;
  location: string;
  currency: string;
}

// -- Bookings / Calendar --
export type BookingStatus = 'confirmed' | 'pending' | 'in-progress' | 'completed' | 'cancelled';
export type ServiceCategory = 'lesson' | 'rental' | 'tour' | 'event' | 'accommodation' | 'food';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  duration: number;
  price: number;
  description: string;
  isActive: boolean;
}

export interface Booking {
  id: string;
  clientId: string;
  clientName: string;
  serviceId: string;
  serviceName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: BookingStatus;
  amount: number;
  notes: string;
  resourceIds: string[];
}

// -- Clients --
export type ClientTier = 'new' | 'regular' | 'frequent' | 'vip';

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  tier: ClientTier;
  totalSpent: number;
  totalBookings: number;
  lastVisit: string;
  notes: string;
  avatarUrl: string;
}

// -- Resources / Inventory --
export type ResourceStatus = 'available' | 'in-use' | 'maintenance' | 'retired';
export type ResourceCategory = 'surfboard' | 'wetsuit' | 'kayak' | 'snorkel' | 'bike' | 'equipment' | 'vehicle' | 'space';

export interface Resource {
  id: string;
  name: string;
  category: ResourceCategory;
  status: ResourceStatus;
  condition: number;
  lastMaintenance: string;
  notes: string;
}

// -- Dashboard --
export interface DashboardStats {
  todayBookings: number;
  todayRevenue: number;
  activeClients: number;
  resourceUtilization: number;
  weeklyBookings: number;
  monthlyRevenue: number;
  avgRating: number;
  repeatRate: number;
}

export interface RevenueDataPoint {
  date: string;
  revenue: number;
  bookings: number;
}

export interface ServiceRevenuePoint {
  name: string;
  revenue: number;
  percentage: number;
}

export interface DailyBookingsPoint {
  date: string;
  count: number;
}

export interface ActivityItem {
  id: string;
  type: 'booking' | 'payment' | 'client' | 'resource';
  message: string;
  timestamp: string;
  relatedId: string;
}

// -- Insights --
export type InsightType = 'revenue' | 'demand' | 'inventory' | 'client' | 'trend';

export interface Insight {
  id: string;
  title: string;
  description: string;
  type: InsightType;
  impact: 'high' | 'medium' | 'low';
  metric: string;
  actionLabel: string;
  dismissed: boolean;
}

export interface HourlyDemand {
  hour: number;
  day: string;
  bookings: number;
}

// -- Week Calendar --
export interface CalendarSlot {
  id: string;
  bookingId: string;
  time: string;
  duration: number;
  title: string;
  status: BookingStatus;
  resourceName: string;
}
