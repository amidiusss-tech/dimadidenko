create extension if not exists "pgcrypto";

create table if not exists releases (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  cover_image_url text,
  theme_tags text[] default '{}',
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists tracks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  moods text[] not null default '{}',
  genres text[] not null default '{}',
  use_cases text[] not null default '{}',
  bpm int,
  musical_key text,
  duration_sec int not null default 0,
  price_personal numeric(10, 2) not null default 0,
  price_commercial numeric(10, 2) not null default 0,
  price_extended numeric(10, 2) not null default 0,
  preview_url text not null,
  full_audio_url text,
  cover_image_url text,
  release_id uuid references releases(id) on delete set null,
  is_exclusive_available boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  buyer_email text not null,
  amount numeric(10, 2) not null,
  payment_status text not null default 'pending',
  stripe_session_id text unique,
  download_token text,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  track_id uuid not null references tracks(id) on delete restrict,
  license_tier text not null check (license_tier in ('personal', 'commercial', 'extended')),
  unit_price numeric(10, 2) not null,
  created_at timestamptz not null default now()
);

-- Anonymous site visitors read catalog data via the public anon key.
alter table releases enable row level security;
alter table tracks enable row level security;

drop policy if exists "Public read releases" on releases;
create policy "Public read releases" on releases for select using (true);

drop policy if exists "Public read tracks" on tracks;
create policy "Public read tracks" on tracks for select using (true);
