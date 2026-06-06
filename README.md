# Sacred Space Animal Sanctuary & Rescue

> *"join us in saving lives"*

**Live site:** [jenrum3ry.github.io/lozen-sanctuary](https://jenrum3ry.github.io/lozen-sanctuary/) *(custom domain coming soon: sacredspaceanimalrescue.com)*

Website for [Sacred Space Animal Sanctuary & Rescue](https://sacredspaceanimalrescue.com) — a spiritual animal sanctuary founded in 2018 by Lozen BrownBear. This is a volunteer project built as part of my personal portfolio.

Sacred Space is more than a rescue. It's a sanctuary of healing where abandoned, neglected, and forgotten animals receive care, dignity, and unconditional love — while Lozen's mission of spiritual art, community classes, and fundraising toward a permanent country sanctuary weaves it all together.

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, mission preview, and calls to action |
| `/about` | Full mission statement, org history, and Lozen's story |
| `/animals` | Sanctuary residents — every soul honored |
| `/support` | Fundraising thermometer and donation info |
| `/get-involved` | Foster, volunteer, and classes/workshops |
| `/art` | Lozen's spiritual artwork, handmade sacred goods, and wearable art |

## Tech Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4** with custom brand design tokens
- **TypeScript**
- **GitHub Actions** → **GitHub Pages** deployment
- **Google Fonts** — Cinzel (display) + Inter (body)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating Content

All site content lives in plain TypeScript files — no CMS or database needed.

| What to update | File |
|---|---|
| Animal profiles | `src/data/animals.ts` |
| Art & shop items | `src/data/art.ts` |
| Fundraising goal & current amount | `src/config/fundraising.ts` |
| Donation link | `src/config/fundraising.ts → donationLink` |

## Deployment

Pushes to `main` automatically trigger a GitHub Actions build and deploy to GitHub Pages.

**Required one-time setup:** In the repo Settings → Pages → Source, set to **GitHub Actions**.

**Custom domain:** Once `sacredspaceanimalrescue.com` DNS is pointed at GitHub Pages, remove the `basePath` line from `next.config.ts` (or set `NEXT_PUBLIC_BASE_PATH` to an empty string).

---

*Built with love for Lozen and the animals of Sacred Space. 🐾💜*
