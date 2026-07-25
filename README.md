# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Content

All page content (profile, projects, tech stack, events, links) is defined as JSON and fetched client-side — the site itself is fully static and has no server-side API of its own.

- JSON files live in [`public/content`](./public/content) and are used as-is when no external base URL is configured.
- To serve content from external storage (e.g. a Cloudflare R2 bucket) instead, set the `NUXT_PUBLIC_CONTENT_BASE_URL` environment variable to that bucket's public base URL. All content requests are then made against `${NUXT_PUBLIC_CONTENT_BASE_URL}/<file>.json` instead of the bundled files.
- Shapes are documented as TypeScript types in [`schema/`](./schema).
- `composables/useContent.ts` resolves the base URL and fetches content on the client only, so `nuxt generate` never needs network access to build.

## Setup

Make sure to install the dependencies:

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

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

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
pnpm run build

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
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
