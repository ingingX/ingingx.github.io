# Yingpeng MA Personal Homepage — Commented Version

This is the commented learning version of the website.

## Files

- `index.html`
  - Homepage.
  - Contains only the Welcome paragraph and About Me section.

- `publications.html`
  - Publications page.

- `projects.html`
  - Research Projects page.

- `cv.html`
  - Online CV page.

- `style.css`
  - Controls almost all visual appearance and responsive layout.
  - Organized into sections with detailed comments.

- `script.js`
  - Automatically updates the footer year.
  - Controls the mobile navigation menu.

- `assets/profile-placeholder.svg`
  - Temporary profile-image placeholder.
  - Replace it with your real image later.

## Run locally

No Node.js, npm, Python package, or build process is required.

### Simplest method

Open `index.html` directly in a browser.

### Recommended local server

From this directory:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## How the website works

All pages are independent HTML files. The navigation simply links between them:

- `index.html`
- `publications.html`
- `projects.html`
- `cv.html`

All pages load the same:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

Therefore:

- Edit `style.css` to change the appearance of the whole website.
- Edit `script.js` to change interactive behavior.
- Edit each `.html` file to change page-specific text.
- Replace the profile image inside `assets/`.

## Important customization tasks

1. Replace `assets/profile-placeholder.svg` with your real profile photo.
2. Change the `src` attribute in every page if you use another filename.
3. Replace `your-email@example.com`.
4. Replace GitHub, LinkedIn, and Google Scholar URLs.
5. Add your CV as `cv.pdf` if you want the CV download link to work.

## Important architecture note

Because this is currently a plain static HTML website, the sidebar and navigation are duplicated across the four HTML files. This is simple and easy to understand, but later, if the website grows, you may want to migrate to a template system such as Jekyll, Hugo, Astro, or a frontend framework to avoid duplication.
