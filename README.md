# OPTC Crews V2 - Frontend (WIP)

A modern, high-performance, and offline-first web application designed for **One Piece Treasure Cruise (OPTC)** players to browse, filter, and track their character collections seamlessly.

> [!WARNING]
> ### Work in Progress (Early Development Stage)
> **Please do not clone or attempt to build this repository yet.**  
> Several in-progress modules, route handlers, and shared style sheets (e.g., `/app/shops`, `/app/banners`, `/styles`, `/hooks`) are temporarily excluded via `.gitignore` while undergoing extensive cleanup and refactoring. A self-contained, reproducible build setup will be provided once the initial architecture stabilization is complete.

---

## Key Highlights (Character Page)

- **3,000+ Characters Virtualized:** Smooth 60 FPS scrolling through the entire character roster without DOM bloat (~225 recycled DOM nodes at any time).
- **Offline-First Data Architecture:** Fully integrated **IndexedDB caching** via `@tanstack/react-query` & `idb-keyval`, decoupling browsing from the backend and eliminating redundant network calls.
- **Zero-Latency State Isolation:** Granular **Zustand** selectors ensuring state changes (owning a unit, tracking copies, rainbow/limit break status) re-render **strictly only the interacted card** (<15ms INP).
- **Decoupled CDN Asset Pipeline:** WebP asset delivery served exclusively through Cloudflare CDN with aggressive HTTP caching, leaving zero bandwidth footprint on the host server
- **URL-Driven Search & Filters:** URL query state synchronization powered by `nuqs`, enabling shareable filtered views and instant sub-200ms multi-criteria sorting across 3,000 items.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) (Isolated client-side collection tracking with schema migration support)
- **Data Fetching & Persistence:** [TanStack Query v5](https://tanstack.com/query) + IndexedDB ([idb-keyval](https://github.com/jakearchibald/idb-keyval) custom persister)
- **Virtualization:** [TanStack Virtual v3](https://tanstack.com/virtual)
- **URL Search Params:** [nuqs](https://nuqs.47ng.com/) (Type-safe query string state manager)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Asset Optimization:** Cloudflare CDN (External WebP Asset Distribution)

## 1. Features Implemented
### 1. Interactive Collection Tracking Modes
The character grid adapts dynamically depending on the active contextual mode:
- **Normal Mode:** View roster, search, and click to inspect complete character details, evolutions, and abilities in a responsive modal.
- **Owned / Super Evolution Awareness:** Real-time visual cues distinguishing owned, unowned, and potential super-evolution candidates based on pre-evolution ownership.
- **Copies Context:** Track and increment duplicate copies (1–10) directly on the grid with custom badge overlays.
- **Rainbow Context:** Toggle maxed Rainbow status with animated badge shaders.
- **Limit Break+ & Rumble LB+:** Track end-game progression with context-specific badge indicators.

### 2. Multi-Criteria Filtering & Sorting
- Instant client-side filtering across attributes: **Type, Class, Rarity, Category, Tags, and Cost**.
- Multi-field search supporting character **ID, Name, and Family**.
- Smart sorting supporting game-specific metrics (ID, Name, Rarity, ATK/HP/RCV, Level, LB+ status).

---

## Performance & Optimization Audit
Audited via Chrome DevTools under production build & stress conditions:
| Metric | Measured Value | Performance Impact |
| :--- | :--- | :--- |
| **Active DOM Nodes** | **~225 nodes** | Strict recycling via virtualization across 3,000 items |
| **Max DOM Depth** | **12 levels** | Lightweight tree structure preventing layout thrashing |
| **JS Heap Memory** | **8.4 MB - 13.8 MB** | Minimal footprint even with 1,800+ saved owned states |
| **Interaction Latency (INP)** | **6ms - 15ms** | Ultra-responsive UI with zero blocking tasks |
| **State Re-render Scope** | **Isolated (1 card)** | Zero cascading re-renders across the grid |
| **Filter Execution Time** | **28ms - 140ms** | Instant recalculation for 3,000 complex objects |
| **Scroll Performance (4x Slowdown)** | **50 - 55 FPS** | Smooth scrolling even on low-end emulated CPUs |
| **Runtime Backend API Calls** | **0 requests** | 100% offline-ready via client-side IndexedDB |

---

## Legal & Disclaimer

> [!NOTE]
> This project is an unofficial, non-profit, fan-made tool created strictly for educational, informational, and community utility purposes.

- **Intellectual Property:** *One Piece* and all related characters, trademarks, and lore are © **Eiichiro Oda / Shueisha, Toei Animation**.
- **Game Assets & Trademarks:** *One Piece Treasure Cruise (OPTC)* and all in-game assets, unit icons, and naming conventions are copyrights and trademarks of **Bandai Namco Entertainment Inc.**
- **Fair Use:** All intellectual property and game media belong to their respective owners. No copyright infringement is intended.

---

## 📄 License

The underlying source code of this application is open-source and released under the [MIT License](LICENSE).