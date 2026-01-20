Create the monorepo

pnpm init

Create a pnpm-workspace.yaml file in the root:

```
packages:
  - 'apps/*'
  - 'packages/*'
```

Create folder structure
```mkdir -p apps/web apps/api packages``` 

Installing Dependencies
# Install to a specific workspace
pnpm add react --filter web

# Install to root (for shared dev tools)
pnpm add -D typescript -w

# Install everywhere
pnpm add -r some-package

Running scripts
# Run dev in web app
pnpm --filter web dev

# Run all dev scripts in parallel
pnpm -r --parallel dev

The most useful flags:

--filter <package-name> - target a specific package
-w - install at workspace root
-r - run in all packages
--parallel - run scripts simultaneously


cd /api
pnpm init
pnpm create hono@latest .

✅ Compliant Stack
Frontend

Vite + React - Fast, modern, minimal
React Router - Client-side routing
TanStack Query - Server state management (allowed, it's just a library)
Tailwind CSS - Styling
Socket.io-client - Real-time notifications & chat

Backend

Hono - Micro-framework ✅
PostgreSQL - Relational database
Raw SQL queries - Manual queries as required (no ORM!)
node-postgres (pg) - PostgreSQL client
Socket.io - WebSocket for real-time features
bcrypt - Password hashing
jsonwebtoken - JWT auth
nodemailer - Email verification

Migration Tool

node-pg-migrate - Simple SQL migration tool (not an ORM!)

matcha/
├── apps/
│   ├── web/                    # Vite + React
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── lib/           # API client, utils
│   │   │   ├── context/       # Auth context
│   │   │   └── main.tsx
│   │   └── package.json
│   │
│   └── api/                    # Hono backend
│       ├── src/
│       │   ├── db/
│       │   │   ├── queries/   # SQL queries organized by domain
│       │   │   │   ├── users.ts
│       │   │   │   ├── likes.ts
│       │   │   │   ├── matches.ts
│       │   │   │   └── messages.ts
│       │   │   └── index.ts   # DB connection pool
│       │   ├── routes/
│       │   │   ├── auth.ts
│       │   │   ├── users.ts
│       │   │   ├── profiles.ts
│       │   │   ├── matches.ts
│       │   │   └── chat.ts
│       │   ├── middleware/
│       │   │   ├── auth.ts
│       │   │   └── validation.ts
│       │   ├── services/
│       │   │   ├── email.service.ts
│       │   │   ├── auth.service.ts
│       │   │   └── match.service.ts
│       │   ├── sockets/
│       │   │   └── index.ts   # Socket.io handlers
│       │   └── index.ts
│       ├── migrations/         # SQL migration files
│       └── package.json
│
├── pnpm-workspace.yaml
└── package.json


🗓️ One-Month Development Plan
Week 1: Foundation & Auth (Days 1-7)
Days 1-2: Setup

 Initialize monorepo with pnpm workspaces
 Setup Vite + React with React Router
 Setup Hono backend
 Setup PostgreSQL locally
 Install node-pg-migrate
 Create first migration (users table)

Days 3-5: Authentication

 User registration with email verification
 Password hashing with bcrypt
 Login with JWT
 Password reset flow
 Protected routes (frontend & backend)
 Auth context in React

Days 6-7: User Profile Setup

 Complete profile form (gender, bio, interests, etc.)
 Image upload (5 photos max)
 Profile picture designation
 Edit profile functionality

Week 2: Core Features (Days 8-14)
Days 8-9: Location & Tags

 GPS geolocation (browser API)
 Fallback location (IP-based)
 Manual location override
 Tag system (reusable hashtags)
 Store coordinates in PostGIS or as lat/lng

Days 10-12: Browse & Search

 Algorithm for match suggestions (proximity + tags + fame)
 Browse page with filters (age, location, fame, tags)
 Sort functionality
 Advanced search page
 Pagination

Days 13-14: Profile Viewing

 View other users' profiles
 Track profile visits
 Like/unlike functionality
 Block user
 Report fake account
 Show online status & last seen

Week 3: Real-time Features (Days 15-21)
Days 15-16: Fame Rating

 Calculate fame rating algorithm

Profile completeness
Number of likes received
Number of profile visits
Recency of activity


 Display fame rating
 Update fame in real-time

Days 17-19: Chat System

 Setup Socket.io (server & client)
 Chat UI component
 Real-time messaging
 Message history (SQL queries)
 Only allow chat when mutually liked
 Disable chat on unlike/block

Days 20-21: Notifications

 Real-time notification system (Socket.io)
 Notification types:

New like
Profile view
New message
Match (mutual like)
Unlike


 Notification badge/counter
 Mark as read

Week 4: Polish & Security (Days 22-30)
Days 22-24: Security Hardening

 SQL injection prevention (parameterized queries)
 XSS protection (sanitize inputs)
 CSRF protection
 Rate limiting
 File upload validation (images only, size limits)
 Environment variables (.env)
 Password strength validation

Days 25-26: Testing & Bug Fixes

 Test all user flows
 Cross-browser testing (Chrome, Firefox)
 Mobile responsiveness
 Fix bugs

Days 27-28: Seed Database

 Create seed script
 Generate 500+ fake profiles
 Use libraries like Faker.js
 Random locations, tags, photos

Days 29-30: Final Polish

 UI/UX improvements
 Performance optimization
 Documentation
 Deployment preparation