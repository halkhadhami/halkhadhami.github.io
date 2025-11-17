# Hayl Khadhami - Professional Portfolio Website

A modern, full-stack portfolio website showcasing a PhD researcher's professional experience, research projects, publications, and technical skills in mechanical engineering and industrial automation.

## 🌟 Features

- **Professional Homepage** - Hero section with research highlights and education timeline
- **Experience Page** - Detailed work history spanning 10+ years in automation engineering
- **Skills Showcase** - Categorized technical expertise with proficiency levels
- **Publications** - Research papers and publications organized by status
- **Projects Gallery** - Portfolio of automation and research projects with filtering
- **Contact Form** - Email integration with owner notifications
- **Responsive Design** - Mobile-friendly layout optimized for all devices
- **Professional Branding** - Modern color scheme and typography

## 🛠️ Tech Stack

**Frontend:**
- React 19
- TypeScript
- Tailwind CSS 4
- Vite (build tool)
- Wouter (routing)

**Backend:**
- Express.js
- tRPC (type-safe API)
- Node.js

**Database:**
- MySQL/TiDB
- Drizzle ORM

**Authentication:**
- Manus OAuth integration

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 22+ installed
- npm or pnpm package manager
- MySQL/TiDB database connection
- Environment variables configured

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/hayl-khadhami-portfolio.git
cd hayl-khadhami-portfolio
```

### 2. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=mysql://user:password@host:port/database

# OAuth
VITE_APP_ID=your_app_id
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im
OAUTH_SERVER_URL=https://api.manus.im

# JWT
JWT_SECRET=your_jwt_secret

# Owner Information
OWNER_NAME=Hayl Khadhami
OWNER_OPEN_ID=your_open_id

# App Configuration
VITE_APP_TITLE=Hayl Khadhami - PhD Researcher & Automation Engineer
VITE_APP_LOGO=/logo.svg

# API Keys
BUILT_IN_FORGE_API_KEY=your_api_key
BUILT_IN_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=your_frontend_key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im

# Analytics (optional)
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your_website_id
```

### 4. Set Up Database

Push the database schema:
```bash
pnpm db:push
```

Seed the database with initial data:
```bash
npx tsx seed-db.mjs
```

### 5. Start Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
hayl_khadhami_portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── pages/         # Page components (Home, Experience, Skills, etc.)
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/           # Utilities and helpers
│   │   ├── const.ts       # Constants and branding
│   │   └── App.tsx        # Main app component with routing
│   └── public/            # Static assets
├── server/                # Backend Express server
│   ├── routers.ts         # tRPC procedure definitions
│   ├── db.ts              # Database query helpers
│   └── _core/             # Core server infrastructure
├── drizzle/               # Database schema and migrations
│   └── schema.ts          # Table definitions
├── shared/                # Shared types and constants
└── seed-db.mjs            # Database seeding script
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start development server

# Database
pnpm db:push          # Push schema changes to database
pnpm db:studio        # Open Drizzle Studio for database management

# Build
pnpm build            # Build for production

# Seed
npx tsx seed-db.mjs   # Populate database with initial data
```

## 📄 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Homepage with hero, about, research, education, contact |
| `/experience` | Experience | Professional work history and awards |
| `/skills` | Skills | Technical expertise by category |
| `/projects` | Projects | Portfolio projects with filtering |
| `/publications` | Publications | Research papers and publications |

## 🎨 Customization

### Update Branding
Edit `client/src/const.ts` to change:
- `APP_TITLE` - Website title
- `APP_LOGO` - Logo URL
- `OWNER_NAME` - Your name
- `OWNER_EMAIL` - Contact email
- `OWNER_PHONE` - Phone number
- `OWNER_LOCATION` - Location

### Update Colors
Edit `client/src/index.css` to modify the color palette:
- Primary color (Deep Blue)
- Secondary color (Teal)
- Accent color (Warm Orange)

### Add/Edit Content
- **Projects**: Add to database via admin panel or seed script
- **Publications**: Update publications table
- **Skills**: Modify skills table entries
- **Experience**: Edit Experience.tsx page component

## 📊 Database Schema

### Tables
- **users** - User accounts with OAuth integration
- **projects** - Portfolio projects and works
- **publications** - Research papers and publications
- **skills** - Technical skills with categories and proficiency
- **contactSubmissions** - Contact form submissions

## 🔐 Security Considerations

- Environment variables are not committed to version control
- Sensitive data (API keys, tokens) should be stored securely
- Database credentials should never be exposed
- Use HTTPS in production
- Validate all form inputs on both client and server

## 📧 Contact Form Integration

The contact form sends notifications to the site owner via email. Ensure:
1. Email service is properly configured
2. Owner email is set in environment variables
3. SMTP credentials are secure

## 🚀 Deployment

### Deploy to Manus Platform
1. Create a checkpoint in the Manus dashboard
2. Click the "Publish" button
3. Your site will be live at a Manus-provided URL

### Deploy to Other Platforms
The project can be deployed to:
- Vercel
- Netlify
- AWS
- Google Cloud
- DigitalOcean
- Any Node.js hosting provider

## 📝 License

This project is personal and proprietary. All rights reserved.

## 👤 Author

**Hayl Khadhami**
- PhD Researcher in Mechanical Engineering
- Automation Engineer with 10+ years experience
- Email: hayl.khadhami@gmail.com
- GitHub: [halkhadhami](https://github.com/halkhadhami)
- Facebook: [haylkhadhami](https://facebook.com/haylkhadhami)

## 🤝 Contributing

This is a personal portfolio project. For inquiries or collaboration opportunities, please contact via the website contact form.

## 📞 Support

For technical issues or questions about the portfolio website, please reach out through the contact form on the website.

---

**Last Updated:** November 2025
**Version:** 1.0.0
