# Spencer Anderson — Personal Website

My personal site for sharing projects and photos from my work as an aerospace engineer. Built by hand with plain HTML, CSS, and JavaScript, and hosted for free on GitHub Pages.

**Live site:**
https://spenceranderson.xyz

> 🚧 Work in progress. Sections and content are still being added.

## Features

- Single-page landing site with sections for About, Work, Photos, and Contact
- Additional pages in the `pages/` folder
- Responsive layout that works on desktop and mobile
- No build step, frameworks, or dependencies

## Project Structure

```
.
├── index.html     # Homepage
├── pages/         # Additional site pages
├── assets/        # Styles, scripting, images, icons, and other static files
├── CNAME          # Custom domain configuration for GitHub Pages
├── .gitignore
└── README.md
```

## Running Locally

There's nothing to install. Pick whichever option you like:

**Option 1: Open the file directly**
Double-click `index.html` to open it in your browser.

**Option 2: Use a local server** (better for testing links between pages)

```bash
# from the project folder
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Making Changes

1. Edit the HTML/CSS/JS files in any text editor.
2. Refresh your browser to preview the changes.
3. Commit and push to the `main` branch:

   ```bash
   git add .
   git commit -m "Describe your change"
   git push
   ```

GitHub Pages redeploys automatically, usually within a minute or two.

## Deployment

The site is deployed with **GitHub Pages** from the `main` branch (root folder). The `CNAME` file points the site at a custom domain, so don't delete it, or the domain will stop working.

## Tech

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

© Spencer Anderson. All rights reserved.
