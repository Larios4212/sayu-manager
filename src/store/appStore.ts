import { create } from 'zustand';
import type { Booking, Client, Resource, BusinessConfig, Insight } from '../utils/types';
import { DEFAULT_BUSINESS } from '../utils/constants';
import { mockBookings, mockClients, mockResources, mockInsights } from '../services/mockData';

interface AppState {
  // Sidebar
  sidebarOpen: boolean;
  toggleSidebar: () => void;

  // Business config (editable)
  business: BusinessConfig;
  updateBusiness: (updates: Partial<BusinessConfig>) => void;

  // Bookings
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  deleteBooking: (id: string) => void;

  // Clients
  clients: Client[];
  addClient: (client: Client) => void;
  updateClient: (id: string, updates: Partial<Client>) => void;

  // Resources
  resources: Resource[];
  updateResource: (id: string, updates: Partial<Resource>) => void;

  // Insights
  insights: Insight[];
  dismissInsight: (id: string) => void;

  // Modal
  activeModal: string | null;
  modalData: unknown;
  openModal: (id: string, data?: unknown) => void;
  closeModal: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Sidebar
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),

  // Business
  business: DEFAULT_BUSINESS,
  updateBusiness: (updates) => set((s) => ({ business: { ...s.business, ...updates } })),

  // Bookings
  bookings: mockBookings,
  addBooking: (booking) => set((s) => ({ bookings: [booking, ...s.bookings] })),
  updateBooking: (id, updates) =>
    set((s) => ({
      bookings: s.bookings.map((b) => (b.id === id ? { ...b, ...updates } : b)),
    })),
  deleteBooking: (id) => set((s) => ({ bookings: s.bookings.filter((b) => b.id !== id) })),

  // Clients
  clients: mockClients,
  addClient: (client) => set((s) => ({ clients: [client, ...s.clients] })),
  updateClient: (id, updates) =>
    set((s) => ({
      clients: s.clients.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    })),

  // Resources
  resources: mockResources,
  updateResource: (id, updates) =>
    set((s) => ({
      resources: s.resources.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    })),

  // Insights
  insights: mockInsights,
  dismissInsight: (id) =>
    set((s) => ({
      insights: s.insights.map((i) => (i.id === id ? { ...i, dismissed: true } : i)),
    })),

  // Modal
  activeModal: null,
  modalData: null,
  openModal: (id, data = null) => set({ activeModal: id, modalData: data }),
  closeModal: () => set({ activeModal: null, modalData: null }),
}));
