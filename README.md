# Jordin Johns — Pixel Portfolio

A responsive, game-inspired portfolio built with semantic HTML, CSS, and vanilla JavaScript.

## What's included

- `index.html` — homepage, interactive world map, mission selector, art inventory, skills loadout, player profile, contact section.
- `projects/impale.html` — Impale project detail page.
- `projects/rideon.html` — Bike Ride Simulator project detail page.
- `projects/flipside.html` — Flipside project detail page.
- `projects/project-dn.html` — Project DN professional work page.
- `styles.css` — shared visual system and responsive styles.
- `script.js` — mobile menu, mission filters, active navigation.
- `assets/favicon.svg` — simple JJ favicon.

## Run locally

You can double-click `index.html` to preview the site. For a more realistic local server, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

No build step or JavaScript dependencies are required. Google Fonts are optional; the site falls back to system fonts if they are unavailable.

## Replace the artwork placeholders

The current artwork is intentionally placeholder artwork made from CSS shapes and labels. Replace these with images you own or have permission to publish.

1. Put optimized images in `assets/` (WebP or AVIF recommended).
2. In `index.html`, find each `.image-placeholder` or `.art-placeholder` element.
3. Replace the placeholder block with an image, for example:

```html
<img
  class="project-cover"
  src="assets/impale-cover.webp"
  alt="Impale gameplay screenshot showing the volcanic platforming level"
  width="1200"
  height="675"
  loading="lazy"
>
```

4. Add matching CSS for `.project-cover`, e.g. `width: 100%; height: 100%; object-fit: cover;`.
5. Replace the corresponding placeholder visual on each project detail page.
6. Use accurate alt text, keep image dimensions, and avoid publishing confidential work.

## Personal details to verify before publishing

The contact details and education entries were carried over from the linked resume available during the build. Please verify that these are the contact details you want public:
- `jordin.jain@gmail.com`
- LinkedIn: `linkedin.com/in/jordin-johns2005`
- Jain Deemed-to-be University, Kochi — Bachelor of Design, graduation 2027

The homepage links to your existing Wix portfolio as an optional fallback. Remove or replace that link if you no longer want it.

## Deploy

### GitHub Pages
1. Create a GitHub repository and upload all files/folders, preserving the structure.
2. Open repository **Settings → Pages**.
3. Under Build and deployment, choose **Deploy from a branch**, select your branch and `/ (root)`, then save.
4. Use the published URL shown in the Pages settings.

### Netlify
1. Sign in to Netlify and choose **Add new site → Deploy manually**.
2. Drag the `jordin-pixel-portfolio` folder (or its extracted contents) into the deployment area.
3. Netlify will provide a public URL. You can connect a custom domain later.

## Accessibility and performance

- Semantic landmarks and headings, skip link, keyboard focus styles.
- Mobile menu exposes `aria-expanded`.
- Mission filters expose `aria-pressed`.
- Reduced-motion preferences are respected.
- No heavy frameworks or autoplay video.
- Placeholder art uses CSS, so it does not add image payload.
- For a production launch, test on real iOS/Android devices and at common laptop widths.
