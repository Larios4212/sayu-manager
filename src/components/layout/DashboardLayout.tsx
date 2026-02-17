import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';
import { useAppStore } from '../../store/appStore';

export default function DashboardLayout() {
  const sidebarOpen = useAppStore((s) => s.sidebarOpen);

  return (
    <div className="min-h-screen bg-surface-950">
      <Sidebar />
      <motion.div
        initial={false}
        animate={{ marginLeft: sidebarOpen ? 240 : 72 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col min-h-screen"
      >
        <Header />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </motion.div>
    </div>
  );
}
