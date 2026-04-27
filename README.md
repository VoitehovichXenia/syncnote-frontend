# SyncNote (Frontend)

## Overview

SyncNote is a collaborative document editor inspired by tools like Notion.
It focuses on real-time collaboration, offline-first capabilities, and scalable frontend architecture.

This project demonstrates:

- Advanced state management (Redux Toolkit)
- Real-time synchronization
- Separation of editor state and server state
- Scalable frontend architecture (feature-based)

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Redux Toolkit + RTK Query
- WebSocket
- Tailwind CSS
- Jest

---

## Architecture

The application follows a layered architecture:

- **Editor State** – local, high-frequency updates
- **Server State** – fetched via RTK Query
- **Sync Layer** – handles communication and conflict resolution

Project structure:

```
src/
  app/        # routing (Next.js)
  processes/  # global processes (init, auth)
  widgets/    # UI blocks
  features/   # user actions
  entities/   # project entities
  shared/
    ui/          # UI atoms
    lib/         # utilities
    config/      # configs
    api/         # API client
```

---

## ⚙️ Getting Started

TODO

---

## 📍 Roadmap

- [ ] Basic editor
- [ ] Real-time collaboration
- [ ] Offline support
- [ ] Version history

---
