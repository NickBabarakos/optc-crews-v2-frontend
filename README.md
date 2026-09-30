# OPTC Crews V2 - Frontend (WIP)

A modern, high-performance, and offline-first web application designed for **One Piece Treasure Cruise (OPTC)** players to browse, filter, and track their character collections, analyze banner step-ups, and calculate summon probabilities. 

> [!WARNING]
> ### Work in Progress (Early Development Stage)
> **Please do not clone or attempt to build this repository yet.**  
> Several in-progress modules and route handlers (e.g., `/app/shops`) are temporarily excluded via `.gitignore` while undergoing extensive cleanup and refactoring. A self-contained, reproducible build setup will be provided once the initial architecture stabilization is complete.

---

## Key Highlights 

- **3,000+ Characters Virtualized:** Smooth 60 FPS scrolling through the entire character roster without DOM bloat (~225 recycled DOM nodes at any time).
- **Offline-First Data Architecture:** Fully integrated **IndexedDB caching** via `@tanstack/react-query` & `idb-keyval`, decoupling browsing from the backend and eliminating redundant network calls.
- **Zero-Latency State Isolation:** Granular **Zustand** selectors ensuring state changes (owning a unit, tracking copies, rainbow/limit break status) re-render **strictly only the interacted card** (<15ms INP).
- **Statistical Summon Engine:** Client-side binomial cumulative probability calculator determining exact pull chances per step for multi-target new batches and custom rate presets.
- **Deep-Linked Modal & Navigation State:** URL query synchronization powered by `nuqs` across filters and modal views (`?bannerId=...`), enabling shareable URLs with automated history cleanup.
- **Decoupled CDN Asset Pipeline:** WebP asset delivery served exclusively through Cloudflare CDN with aggressive HTTP caching, leaving zero bandwidth footprint on the host server

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

## 3. Sugo-Fest Banner Hub & Probability Engine
A comprehensive suite for tracking active banners, dissecting step-up structures, and calculating summons:
- **Active & Upcoming Banner Showcase:** Categorized banner lists featuring live countdown timers (`useBannerTimer`), visual progress indicators, and custom thematic styling based on banner classification (*Super Sugo, Anniversary, Kizuna, Treasure Map, Pirate Rumble, EOM, etc.*).
-  **Recruitable Characters & Owned Sync:** Cross-references banner character pools with the player's local Zustand collection to display real-time ownership ratios (`owned / total`), completion badges, and rate-boosted unit indicators.
- **Step-Up & Pool Visualizer:**
    - **Dual Display Modes:** Full chronological **List View** or aggregated **Compact View** grouping identical step structures.
    - **In-Game Typography Engine:** Native-styled game digit asset rendering (`GameNumber`) supporting ordinal tokens (`1st, 2nd, 3rd`) and automatic hyphenated consecutive ranges (`1-3, 5, 8`).
    - **Pool & Gift Breakdown:** Step-by-step display of Legend/RR pool sizes and guaranteed reward milestones.
- **Summon Probability Calculator:**
    - **New Batch Mode:** Multi-target selector to calculate cumulative odds of pulling combinations of debut characters across every step.
    - **Custom Mode:** Configurable rate overrides per step tier separating standard pulls (Posters 1–10) from guaranteed 11th poster mechanics.
    - **Mathematical Model:** Leverages **Binomial Distribution ($nCr$)** and cumulative failure accumulators to deliver exact step-by-step milestone probability projections and heatmaps.
- **Community Strategy & Verdict:** Embedded strategic pull recommendations (*Hard Skip*, *Medal Pulls*, *Worth It, But...*) and resource allocation guidance for free-to-play players.

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