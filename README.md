---
name: Salon
slug: salon
description: Simple Next.js site that uses Vercel Postgres as the database.
framework: Next.js
useCase: Demo
css: Tailwind
database: Vercel Postgres
demoUrl: https://salon-kh.vercel.app/
relatedTemplates:
  - postgres-starter
  - postgres-prisma
  - postgres-kysely
  - postgres-sveltekit
---

# Salon - Mock website

Simple Next.js site that uses [Vercel Postgres](https://vercel.com/postgres) as the database.

## Demo

https://salon-kh.vercel.app/

## How to Use

Once that's cloned, copy the .env.example file in this directory to .env.local (which will be ignored by Git):

```bash
cp .env.example .env.local
```

Then open `.env.local` and set the environment variables to match the ones in your Vercel Storage Dashboard.

Next, run Next.js in development mode:

```bash
pnpm dev
```

## Helpful links for dev
[Next Fonts](https://nextjs.org/docs/app/api-reference/components/font)
[Tailwind Text Colors](https://tailwindcss.com/docs/text-color)

https://www.youtube.com/watch?v=_ER9jHiylAo&t=12s
