# 🏖️ SayuManager – Smart Business Suite for Beach Towns

<div align="center">

![SayuManager](https://img.shields.io/badge/SayuManager-Beach%20Business%20Suite-06b6d4?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAxNSBROCAxMCwgMTIgMTQgUTE2IDE4LCAyMCAxMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+)

**The all-in-one management platform for surf schools, beach clubs, hostels, and tour agencies in Sayulita, Mexico.**

[🌐 Live Demo](https://Larios4212.github.io/sayu-manager/) · [📖 Features](#features) · [🛠️ Tech Stack](#tech-stack)

</div>

---

## ✨ Overview

SayuManager is a portfolio-grade SaaS dashboard designed for beach-town businesses. It features real-time booking management, client intelligence with tier systems, resource/inventory tracking, AI-powered business insights, and a fully customizable business identity — all wrapped in a stunning tropical dark-mode UI.

## 🎯 Features

| Module | Description |
|--------|-------------|
| **📊 Dashboard** | 8 KPI cards, revenue area chart, service pie chart, bookings bar chart, activity feed |
| **📅 Calendar** | Weekly grid view with time slots, booking blocks color-coded by status, week navigation |
| **👥 Clients** | Searchable table with VIP/frequent/regular/new tiers, detail modal, lifetime value tracking |
| **📦 Resources** | Inventory grid (surfboards, kayaks, wetsuits, bikes), condition bars, status management |
| **💡 AI Insights** | Priority-ranked recommendations: revenue, demand, inventory, client, and trend analysis |
| **⚙️ Settings** | Editable business name, tagline, type, location, currency, and branding (SaaS feel) |
| **🏠 Landing** | Marketing hero page with feature grid, testimonial, stats, and CTA sections |

## 🏄 Business Types Supported

- 🏄 Surf Schools
- 🏖️ Beach Clubs
- 🛏️ Hostels
- 🚤 Tour Agencies
- 🍽️ Restaurants

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework with hooks |
| **TypeScript 5.5** | Type safety |
| **Vite 5.4** | Build tooling & HMR |
| **TailwindCSS 3.4** | Utility-first styling with custom tropical palette |
| **Framer Motion 11** | Page transitions & micro-animations |
| **Recharts 2.12** | Data visualization (Area, Bar, Pie charts) |
| **Zustand 4.5** | Lightweight global state management |
| **React Router 6** | Client-side routing |
| **Lucide React** | Icon library |
| **GitHub Pages** | Deployment via Actions |

## 🚀 Quick Start

```bash
git clone https://github.com/Larios4212/sayu-manager.git
cd sayu-manager
npm install
npm run dev
```

## 📁 Architecture

```
src/
├── components/
│   ├── layout/        # Sidebar, Header, DashboardLayout
│   └── ui/            # StatCard, Modal, PageWrapper, Logo
├── features/
│   ├── landing/       # Marketing page
│   ├── dashboard/     # KPIs, charts, activity feed
│   ├── calendar/      # Weekly booking grid
│   ├── clients/       # Client table & detail modal
│   ├── resources/     # Inventory management grid
│   ├── insights/      # AI recommendation cards
│   └── settings/      # Business customization
├── hooks/             # useAnimatedCounter, useDebounce, etc.
├── services/          # Mock data (clients, bookings, resources)
├── store/             # Zustand app store
└── utils/             # Types, constants, formatters
```

## 👨‍💻 Author

**Armando Larios**

- GitHub: [@Larios4212](https://github.com/Larios4212)

---

<div align="center">
  <sub>Built with ☀️ in Sayulita vibes</sub>
</div>
