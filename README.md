# Amlan Kashyap — Electrical Engineer Portfolio

Personal portfolio site — **Project Manager, Electrical Transmission & Substation Projects**.
Built with **Astro + Tailwind CSS**, deployed free on **GitHub Pages**.

Live URL (after deploy): `https://<your-github-username>.github.io/electrical-engineer/`

---

## ⚠️ Important: the repo name must be `electrical-engineer`

The site is configured with `base: '/electrical-engineer'` in `astro.config.mjs`.
**The GitHub repository must be named exactly `electrical-engineer`**, otherwise the
images and styles will break.

> Want the link to read **amlankashyap** instead of your current handle
> (`amlan9387975760`)? GitHub Pages URLs always use the account username — it can't be
> changed per-repo. Options: (a) rename your existing GitHub username to `amlankashyap`
> in *Settings → Account → Change username*, or (b) create a new account `amlankashyap`.
> Then the link becomes `https://amlankashyap.github.io/electrical-engineer/`.

---

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321/electrical-engineer
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploy to GitHub Pages (one-time setup)

1. Create a **new, empty** GitHub repo named **`electrical-engineer`** (public).
2. From this folder, push the code:
   ```bash
   git init
   git add .
   git commit -m "Electrical portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/electrical-engineer.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes automatically
   on every push to `main`. Wait ~1–2 min, then open
   `https://<your-username>.github.io/electrical-engineer/`.

## Edit your content

All text lives at the top of **`src/pages/index.astro`** (the `experience`,
`education`, `skillGroups`, `stats` arrays). Change the values there and push —
the site redeploys itself.

- Profile photo: replace `public/profile.png`.
- Colours / theme: edit the CSS variables at the top of `src/styles/global.css`.
