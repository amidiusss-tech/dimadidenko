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

## Database

Apply `supabase/schema.sql` in your Supabase SQL editor to create initial tables.

## Next milestones

- Replace demo tracks with Supabase data
- Add Stripe Checkout session API route
- Add post-payment signed download links
- Add admin upload workflow for tracks and covers
