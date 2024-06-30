# Alveno - Frontend úkol

Soubor `types/supabase.ts` obsahuje typy entit vygenerované z backendu.

### Dokumentace API

Příklady pro `teams`, ale samozřejmě obdobně funguje i pro `employees`.

Read all rows

```Bash
curl 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?select=*' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY"
```

With pagination

```Bash
curl 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?select=*' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Range: 0-9"
```

With filtering. Eg. `id=eq.<teamId>`

```Bash
curl 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?id=eq.1&select=*' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Range: 0-9"
```

Insert row - `id` a `createdAt` se automaticky vygenerují a **není** potřeba je posílat.

```Bash
curl -X POST 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Content-Type: application/json" \
-H "Prefer: return=minimal" \
-d '{ "some_column": "someValue", "other_column": "otherValue" }'
```

Update matching rows

```Bash
curl -X PATCH 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?some_column=eq.someValue' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Content-Type: application/json" \
-H "Prefer: return=minimal" \
-d '{ "other_column": "otherValue" }'
```

Delete matching rows

```Bash
curl -X DELETE 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?some_column=eq.someValue' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY"
```

Read all teams with employee ids

```Bash
curl 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?select=*,emnployees(id)' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY"
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
