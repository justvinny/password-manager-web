This is a Password Manager Progressive Web App (PWA). The goal is to create a fully functioning Password Manager that can be run offline on the browser on any device.

## Architecture

- \_\_tests\_\_ - All tests live here.
- src\app - All features live here.
- components - All reusable React components live here.
- data - DB related stuff live here. Currently just IndexedDb.
- styles - All CSS files live here.
- utils - All utility classes live here.

## Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Continuous Integration

Uses GitHub actions which runs build, test and lint.

Note: Lint warnings are intentionally considered as errors.

## Deploying to Prod

All changes pushed / merged to master will be automatically deployed on [Netlify](https://vb-passvault.netlify.app/).

## Contributing

1. Fork this repository.
2. Make sure to follow project architecture.
3. Create tests when possible.
4. Make sure your changes pass on the CI.
5. Make a Pull Request (PR) and fill up the template.
6. Wait for me to review. Note: No guarantee your PR will be merged.

## Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
