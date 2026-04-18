# Music Store by Dima D.

MVP scaffold for a personal cinematic stock music website.

## Included

- Next.js App Router structure
- Pages: home, catalog, track details, licensing, about, custom score
- Demo track data and reusable UI components
- Supabase client setup + SQL schema for core entities

## Quick start

1. Install Node.js LTS and ensure `npm` is available in your terminal.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy env template:

   ```bash
   cp .env.example .env.local
   ```

4. Start dev server:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000`.

## Publishing to GitHub

The repo is initialized on branch `main`. The file `public/video/showreel.mp4` is **gitignored** (GitHub rejects files over 100 MB); host the video on a CDN or storage and point the app to that URL if needed.

1. Install [GitHub CLI](https://cli.github.com/) (`gh`) if you do not have it.
2. Log in once (opens the browser):

   ```bash
   gh auth login
   ```

3. Create the remote repo and push from the project folder (change `music-store-by-dima-d` to your repo name):

   ```bash
   gh repo create music-store-by-dima-d --public --source=. --remote=origin --push
   ```

   Or create an **empty** repository on github.com (no README), then:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

4. Connect the repo to [Vercel](https://vercel.com) (Import Project), set `NEXT_PUBLIC_APP_URL=https://dimadidenko.com`, and attach your custom domain.

## Database

Apply `supabase/schema.sql` in your Supabase SQL editor to create initial tables.

## Next milestones

- Replace demo tracks with Supabase data
- Add Stripe Checkout session API route
- Add post-payment signed download links
- Add admin upload workflow for tracks and covers
