
# 🏕️ TrekArmy - Trek Booking Platform

**TrekArmy** is a role-based trek booking application built with Angular 14, designed for trekking enthusiasts and agencies. Users can explore and book treks, agents can create and manage their trek listings, and the owner (admin) oversees the entire ecosystem.

---

## 🚀 Features

### 👤 User
- Browse, filter, and explore upcoming treks
- Book treks via a dynamic booking form
- View booking status & history
- Receive trek notifications and reminders

### 🧭 Agent
- Register a trek agency profile
- Add, edit, and manage treks
- View number of bookings and performance stats

### 👑 Owner (Admin)
- Approve or reject agent signups
- Manage users and treks
- View global analytics and reports

---

## 🧱 Tech Stack

- **Frontend**: Angular 14, RxJS, SCSS
- **UI Library**: Angular Material
- **State Management**: Services & Observables
- **Backend**: Firebase / Node.js + Express *(optional)*
- **Auth**: Firebase Auth / JWT
- **Deployment**: Firebase Hosting / Netlify / Vercel

---

## 🗂️ Folder Structure (Simplified)

```
src/app/
├── core/         # Services, guards, auth logic
├── shared/       # Reusable UI components
├── features/
│   ├── user/
│   ├── agent/
│   ├── owner/
│   └── trek/
```
