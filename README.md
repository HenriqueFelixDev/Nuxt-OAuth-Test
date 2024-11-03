# Nuxt OAuth Test
> Project template configured with OAuth2 (Google) authentication and Supabase integration.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) and [NuxtAuth Documentation](https://auth.sidebase.io/guide/getting-started/introduction) to learn more.

## Setup

1. Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

2. Setup Postgres in Supabase
Connect to Supabase's PostgreSQL and execute the instructions contained in the `db/schema.sql` file.

3. Expose the NextAuth schema in Supabase
Open the supabase project and add `next_auth` Schema to `Project Settings > API > Exposed Schemas`.

4. Create `.env` file
Copy the `.env.example` file to a new file named `.env` and fill in the variable values.

```
NUXT_AUTH_SECRET=
NUXT_GOOGLE_CLIENT_ID=
NUXT_GOOGLE_CLIENT_SECRET=
NUXT_SUPABASE_URL=
NUXT_SUPABASE_SECRET=
NUXT_AUTH_BASE_URL=
NUXT_SUPABASE_JWT_SECRET=
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
