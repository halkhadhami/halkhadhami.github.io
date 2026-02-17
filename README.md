# Hayl Al-Khadhami — Portfolio

🌐 [hayl.khadhami.com](https://hayl.khadhami.com)

## About

Personal portfolio website for **Hayl Saeed Hayder Al-Khadhami** — Automation Engineer, AI Researcher, and University Lecturer. Built as a single-page application with a premium glassmorphism design.

## Features

- 🌓 **Dual Theme** — Dark (navy + emerald) / Light with smooth toggle
- 🌍 **Bilingual** — English / Arabic with full RTL support
- 🎨 **Glassmorphism Design** — Frosted-glass cards, gradient accents, particle canvas
- ⚡ **Interactive** — Animated counters, skill bars, typing effect, project filtering, image lightbox
- 📱 **Fully Responsive** — Mobile-first with breakpoints at 480px, 768px, 1024px
- 🔍 **SEO Optimized** — Open Graph, Twitter Cards, JSON-LD Person schema, sitemap.xml
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigation (WCAG 2.1 AA)
- 🖨️ **Print-Friendly** — Clean print styles for resume/CV output
- 🖱️ **Custom Cursor** — Premium cursor trail (desktop only)

## Sections

| Section | Content |
|---------|---------|
| Hero | Animated intro with particle canvas and typing effect |
| About | Bio, stats, education summary |
| Experience | Education timeline + work history + awards |
| Skills | 4-category skill bars with percentage animations |
| Projects | 10 projects with filter, images, lightbox |
| Publications | Research papers with links |
| Contact | Formspree contact form + info cards |

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, `backdrop-filter`, logical properties, `clamp()`
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts** — Inter (Latin), Cairo (Arabic), JetBrains Mono (code)
- **Font Awesome 6** — Icons
- **Formspree** — Contact form backend

## Project Structure

```
├── index.html          # Single-page application
├── css/
│   └── styles.css      # Design system + responsive + print
├── js/
│   └── main.js         # i18n, theme, particles, animations
├── images/             # Profile + project images
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Crawler rules
├── CNAME               # Custom domain
└── README.md
```

## Local Development

```bash
npx -y serve .
# Open http://localhost:3000
```

## Deployment

Hosted on **GitHub Pages** with custom domain `hayl.khadhami.com`.

```bash
git add .
git commit -m "Portfolio v2: SPA redesign with dual theme, bilingual, glassmorphism"
git push origin main
```

## Contact

- 📧 [hayl.khadhami@gmail.com](mailto:hayl.khadhami@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/halkhadhami/)
- 🐙 [GitHub](https://github.com/halkhadhami)

---

© 2026 Hayl Al-Khadhami. All rights reserved.
