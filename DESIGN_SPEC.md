# Hayl Khadhami Portfolio Website - Design Specification

## Design Philosophy

The website will present a **professional yet approachable** image that reflects Hayl's dual identity as both an accomplished PhD researcher and an experienced industrial automation engineer. The design will emphasize **innovation, technical excellence, and research impact** while maintaining clarity and accessibility.

## Color Palette

| Element | Color | Purpose |
|---------|-------|---------|
| Primary | `oklch(0.5 0.2 240)` (Deep Blue) | Main brand color, headers, CTAs |
| Secondary | `oklch(0.6 0.15 180)` (Teal) | Accents, highlights |
| Background | `oklch(0.98 0.01 0)` (Off-white) | Main background |
| Text Primary | `oklch(0.2 0.05 0)` (Dark Gray) | Body text, readable content |
| Text Secondary | `oklch(0.5 0.05 0)` (Medium Gray) | Secondary information |
| Accent | `oklch(0.7 0.2 30)` (Warm Orange) | Highlights, research emphasis |
| Success | `oklch(0.7 0.15 120)` (Green) | Positive feedback, achievements |

## Typography

- **Font Family:** Inter (Google Fonts) for clean, modern appearance
- **Heading 1:** 48px, weight 700, letter-spacing -0.02em
- **Heading 2:** 36px, weight 700, letter-spacing -0.01em
- **Heading 3:** 28px, weight 600
- **Body:** 16px, weight 400, line-height 1.6
- **Small:** 14px, weight 400, color: secondary text

## Layout Structure

### Navigation
- Fixed top navigation bar with logo and menu items
- Menu items: Home, About, Research, Experience, Skills, Projects, Publications, Contact
- Mobile hamburger menu for responsive design
- Sticky navigation with subtle shadow on scroll

### Hero Section
- Full-width background with gradient overlay
- Headline: "PhD Researcher & Automation Engineer"
- Subheadline: "Bridging 10+ Years of Industry Experience with Cutting-Edge Research"
- Call-to-action buttons: "View Research" and "Contact Me"
- Background: Professional abstract pattern or subtle gradient

### About Section
- Two-column layout (image + text)
- Professional photo on left
- Bio highlighting PhD research focus
- Key statistics: 10+ years experience, 3 degrees, 2.8K followers
- Links to social profiles

### Research Highlights Section
- Feature the VAGECRB project prominently
- Card-based layout with project overview
- Key metrics: 15-25% energy recovery, 100 tons CO₂ reduction
- Research methodology roadmap visualization
- Links to papers and research materials

### Education Timeline
- Vertical timeline showing educational progression
- B.E. Computer Engineering (Yemen, 2013)
- M.Eng. Industrial Automation (Pakistan, 2023)
- PhD Mechanical Engineering (China, 2024-Present)
- GPA and key coursework for each degree

### Experience Section
- Timeline of professional roles
- Assistant Lecturer at Hodeidah University (6+ years)
- Automation Software Engineer (10+ years)
- Electrical Technician
- Machines Operator
- Detailed descriptions of responsibilities and achievements

### Skills Section
- Categorized skill display
- Categories: Simulation & Design, Control & Automation, Data & AI Tools, Programming Languages
- Visual skill badges or progress indicators
- Tools: MATLAB, ANSYS, COMSOL, SolidWorks, Python, PLC programming, etc.

### Projects/Works Gallery
- Grid layout (3 columns on desktop, responsive)
- Project cards with:
  - Project image/thumbnail
  - Project title
  - Brief description
  - Technologies used
  - Link to detailed view or external resource
- Categories: Industrial Automation, Research, Software Development
- Filter functionality by category

### Publications Section
- List of published and under-review papers
- Paper cards with:
  - Title
  - Co-authors
  - Publication status
  - Link to read paper
  - Date
- Organized by status: Published, Under Review, In Progress

### Awards & Recognition Section
- Timeline or card-based display
- Outstanding International Master Student Award (2022)
- Best Paper Award at IEEE SCONEST 2022
- Open-source contributions
- Teaching experience highlights

### Contact Section
- Contact form with fields: Name, Email, Subject, Message, File Upload
- Form validation and error handling
- Success message on submission
- Alternative contact methods: Email, LinkedIn, GitHub, Facebook
- Contact information: Location, phone, email

### Footer
- Quick links to main sections
- Social media links
- Copyright information
- Back to top button

## Component Design

### Cards
- Subtle shadow: `0 1px 3px rgba(0,0,0,0.1)`
- Border radius: 8px
- Padding: 24px
- Hover effect: Slight elevation and shadow increase

### Buttons
- Primary: Deep blue background, white text
- Secondary: Outlined style with border
- Hover: Slightly darker shade with smooth transition
- Padding: 12px 24px
- Border radius: 6px

### Forms
- Input fields with subtle border
- Focus state: Blue border and shadow
- Labels above inputs
- Error messages in red
- Success messages in green
- File upload with drag-and-drop support

## Responsive Design

- **Desktop:** Full layout with all sections visible
- **Tablet (768px):** Adjusted column counts, optimized spacing
- **Mobile (480px):** Single column layout, hamburger menu, touch-friendly buttons

## Animations & Interactions

- Smooth scroll behavior
- Fade-in animations on page load
- Hover effects on cards and buttons
- Smooth transitions for color changes
- Scroll-triggered animations for sections (fade-in as user scrolls)

## Accessibility

- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators for interactive elements

## Performance Considerations

- Lazy loading for images
- Optimized image formats (WebP with fallbacks)
- Minified CSS and JavaScript
- Efficient animations using CSS transforms
- Fast page load time target: < 3 seconds

## SEO Optimization

- Meta descriptions for all pages
- Open Graph tags for social sharing
- Structured data (Schema.org) for research and professional information
- Sitemap and robots.txt
- Mobile-friendly design
- Fast page load times
