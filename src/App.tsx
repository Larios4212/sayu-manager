import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from '@/features/landing/LandingPage';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardPage from '@/features/dashboard/DashboardPage';
import CalendarPage from '@/features/calendar/CalendarPage';
import ClientsPage from '@/features/clients/ClientsPage';
import ResourcesPage from '@/features/resources/ResourcesPage';
import InsightsPage from '@/features/insights/InsightsPage';
import SettingsPage from '@/features/settings/SettingsPage';

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
