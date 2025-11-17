# Deploy to GitHub Pages - Static Website

This guide will help you deploy your static portfolio website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Project files extracted from the archive

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `hayl-khadhami-portfolio` (or your preferred name)
   - **Description**: "Professional portfolio website - PhD Researcher & Automation Engineer"
   - **Visibility**: Select "Public"
   - **Initialize repository**: Do NOT check any boxes
5. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

In your project directory, run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Static portfolio website"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/hayl-khadhami-portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top-right area)
3. Scroll down to **"Pages"** section in the left sidebar
4. Under **"Build and deployment"**:
   - Select **"Deploy from a branch"**
   - Select branch: **"main"**
   - Select folder: **"/dist"** (this is where the static build is generated)
5. Click **"Save"**

GitHub will automatically build and deploy your site. Wait 1-2 minutes for the deployment to complete.

## Step 4: Access Your Website

After deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/hayl-khadhami-portfolio/
```

You can find the exact URL in the GitHub Pages section of your repository settings.

## Step 5: Update Your GitHub Profile

1. Go to your GitHub profile
2. Edit your bio to include:
   ```
   PhD Researcher | Automation Engineer | Portfolio: https://YOUR_USERNAME.github.io/hayl-khadhami-portfolio/
   ```
3. Add repository topics for better discoverability:
   - `portfolio`
   - `react`
   - `typescript`
   - `automation-engineering`
   - `phd-research`

## Building Locally (Optional)

To build the static site locally before pushing:

```bash
# Install dependencies
pnpm install
# or
npm install

# Build the static site
pnpm build
# or
npm run build

# The dist/ folder will contain your static website
```

## Important Notes

### This is a Static Website

- **No backend server required** - Everything runs in the browser
- **No database** - All content is hardcoded in the website
- **No contact form submissions** - Contact links direct to email instead
- **Fast and secure** - GitHub Pages provides free HTTPS

### Content Management

To update your portfolio content:

1. **Skills**: Edit `client/src/data/portfolio-data.ts`
2. **Projects**: Edit `client/src/data/portfolio-data.ts`
3. **Publications**: Edit `client/src/data/portfolio-data.ts`
4. **Experience**: Edit `client/src/pages/Experience.tsx`
5. **Home page text**: Edit `client/src/pages/Home.tsx`

After making changes:
```bash
pnpm build
git add .
git commit -m "Update portfolio content"
git push
```

GitHub will automatically rebuild and redeploy your site.

## Troubleshooting

### Site not appearing after deployment

- Wait 2-3 minutes for GitHub to build and deploy
- Check the "Actions" tab in your repository to see build status
- Verify the branch is set to "main" and folder is "/dist" in Pages settings

### Changes not showing up

- Make sure you ran `pnpm build` before pushing
- Clear your browser cache (Ctrl+Shift+Delete)
- Wait a few minutes for GitHub to redeploy

### Custom domain (Optional)

If you want to use a custom domain:
1. In GitHub Pages settings, add your domain under "Custom domain"
2. Update your domain's DNS settings to point to GitHub Pages
3. GitHub will automatically handle HTTPS

## Support

For questions about the portfolio website, refer to the README.md file in the project directory.

---

**Created**: November 2025
**Website Type**: Static (No backend required)
**Hosting**: GitHub Pages (Free)
