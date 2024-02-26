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

# Vercel Postgres Next.js Starter

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

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples) ([Documentation](https://nextjs.org/docs/deployment)).


## Helpful links for dev
[Next Fonts](https://nextjs.org/docs/app/api-reference/components/font)
[Tailwind Text Colors](https://tailwindcss.com/docs/text-color)