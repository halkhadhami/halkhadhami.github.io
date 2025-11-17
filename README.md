# Hayl Khadhami - Professional Portfolio Website

A modern, responsive, and fully static personal portfolio website showcasing professional experience, research, projects, and publications.

## 🌟 Features

- **Fully Static** - Pure HTML, CSS, and JavaScript (no backend required)
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Professional design with smooth animations and transitions
- **Multiple Pages** - Home, Experience, Skills, Projects, Publications
- **Project Filtering** - Filter projects by category
- **SEO Optimized** - Meta tags and semantic HTML for better search engine visibility
- **Fast Loading** - Lightweight and optimized for performance
- **GitHub Pages Ready** - Deploy directly to GitHub Pages with no additional setup

## 📁 Project Structure

```
hayl_portfolio_static/
├── index.html                 # Main homepage
├── README.md                  # This file
├── css/
│   ├── styles.css            # Main stylesheet
│   └── responsive.css        # Mobile responsive styles
├── js/
│   └── main.js              # JavaScript functionality
├── pages/
│   ├── experience.html       # Experience and awards
│   ├── skills.html           # Technical skills
│   ├── projects.html         # Portfolio projects
│   └── publications.html     # Research publications
└── assets/
    ├── images/              # Project images
    └── icons/               # Icon assets
```

## 🚀 Getting Started

### Local Development

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/hayl-khadhami-portfolio.git
   cd hayl_portfolio_static
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (if installed)
     npx http-server
     ```

3. **Access the Website**
   - Open `http://localhost:8000` in your browser

## 📝 Customization

### Update Personal Information

Edit `index.html` to update:
- Name and title
- About section content
- Contact information
- Social media links

### Add Your Own Projects

Edit `pages/projects.html`:
1. Add new project cards in the projects grid
2. Update project titles, descriptions, and technologies
3. Add project images to `assets/images/`

### Modify Skills

Edit `pages/skills.html`:
1. Update skill names and proficiency levels
2. Adjust skill bar widths (0-100%)
3. Add or remove skill categories

### Update Publications

Edit `pages/publications.html`:
1. Add new publication entries
2. Update publication status (Published, Under Review, In Progress)
3. Add links to papers or journals

### Change Colors

Edit `css/styles.css` and update CSS variables:
```css
:root {
    --primary-color: #1e3a8a;      /* Main blue */
    --secondary-color: #0891b2;    /* Cyan */
    --accent-color: #ea580c;       /* Orange */
    /* ... other colors ... */
}
```

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `hayl-khadhami-portfolio`
4. Make it public
5. Click "Create repository"

### Step 2: Push Your Code

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Static portfolio website"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/hayl-khadhami-portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" section
4. Under "Build and deployment":
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click "Save"

### Step 4: Access Your Website

Your site will be available at:
```
https://YOUR_USERNAME.github.io/hayl-khadhami-portfolio/
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px and above)
- **Tablet** (768px - 1199px)
- **Mobile** (480px - 767px)
- **Small Mobile** (below 480px)

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus indicators for interactive elements
- Color contrast compliance

## ⚡ Performance

- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast page load times
- Optimized images
- Efficient animations

## 🔍 SEO

- Meta descriptions
- Semantic HTML
- Structured data
- Mobile-friendly design
- Fast loading times

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact & Links

- **Email**: hayl.khadhami@gmail.com
- **GitHub**: https://github.com/halkhadhami
- **Facebook**: https://www.facebook.com/haylkhadhami

## 📄 License

This portfolio website is personal and proprietary. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

This is a personal portfolio. If you'd like to suggest improvements, feel free to reach out.

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [GitHub Pages Documentation](https://pages.github.com/)
- [Responsive Design Guide](https://web.dev/responsive-web-design-basics/)

## 🎯 Future Enhancements

- [ ] Add blog section with articles
- [ ] Implement dark mode toggle
- [ ] Add downloadable resume/CV
- [ ] Add contact form with email integration
- [ ] Add testimonials section
- [ ] Add more project case studies

## ✅ Checklist Before Publishing

- [ ] Update all personal information
- [ ] Add project images
- [ ] Update contact information
- [ ] Test all links work correctly
- [ ] Test on mobile devices
- [ ] Update social media links
- [ ] Verify all pages load correctly
- [ ] Check spelling and grammar

---

**Created**: November 2025
**Type**: Static Website (HTML/CSS/JavaScript)
**Hosting**: GitHub Pages (Free)
**Last Updated**: November 2025
