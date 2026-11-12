# springraphics.com

Static site. No build step, no paid services. Open `index.html` to preview.

## Put it online for free (Netlify, about 10 minutes)
1. Create a free account at netlify.com.
2. Go to "Sites" and drag this whole folder onto the page. The site is live on a netlify.app address.
3. In "Domain management" choose "Add a domain" and type `springraphics.com`.
4. Netlify shows the DNS records to use. Log in where the domain is registered (today it points to Wix) and replace the Wix records with Netlify's.
5. Wait for the DNS change (minutes to a few hours). Netlify adds HTTPS automatically.
6. Check the live site on your phone, then cancel the Wix plan.
7. To update the site later, drag the folder onto the "Deploys" tab again.

GitHub Pages works too: push this folder to a repository, then Settings > Pages > Deploy from branch, and add the custom domain there.

## Assets you must supply (drop into `/assets` with these names)
| File | What it is |
|---|---|
| `reel.mp4` and `reel-poster.webp` | Animation reel, 720p, under about 8 MB, plus a still frame |
| `work-*.webp` (14 files, already in place) | Portfolio pieces. These are Canva preview images about 450 to 600 px wide: replace each with a full export (1400 px or wider) under the same file name |
| `work-3d-01.webp`, `work-3d-02.webp` | Two 3D or animation pieces |
| `about.webp` | Studio or team photo, 4:5 ratio |
| `case-*.webp` (4 files, already in place) | One image per BEN case. Also Canva previews: replace with full exports |
| `logo.webp` (optional) | Replace with the original logo export if you have a sharper one |

Text to fill in, all inside `CONFIG` at the top of `main.js`: portfolio titles (`work`), and the challenge, work and result of each case (`cases`). The four `"coming soon" note` lines on the case cards are in `index.html`.

## Where things are
- Spanish text: `index.html`. English text: the `I18N.en` list in `main.js`.
- Colours and fonts: the `:root` block at the top of `styles.css`.
- WhatsApp number and message: `CONFIG` in `main.js`.

## Assumptions
1. The web address is `https://www.springraphics.com/` (used in the SEO tags, `sitemap.xml` and `robots.txt`).
2. The logo image was cut from the last frame of Logo_1.mp4. It only works on light backgrounds.
3. The header font is Outfit (Google Fonts). The logo itself is an image and is not affected.
4. Blue and green were darkened slightly so white text is readable on them.
5. Prices are not shown. Every call to action leads to the free 30-minute meeting on WhatsApp.
6. The 3-month and 6-month BEN descriptions were written from the two BEN PDFs.
7. No analytics or cookies are installed.
