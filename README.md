# Editorial Portfolio

A minimal, editorial portfolio website with a pure white background and gallery-style layout. Built with Next.js 14, TypeScript, and plain CSS.

## Run the site

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## How to add projects

Edit [`data/portfolio.ts`](data/portfolio.ts) to add or update projects.

### Add an Architecture/Design project

Add an object to the `architecture` array:

```typescript
{
  slug: "my-project",           // URL: /architecture/my-project
  title: "My Project",
  caption: "Short caption for the index thumbnail",
  description: "Longer description for the project detail page.",
  metadata: {
    year: "2024",
    location: "Amsterdam, NL",
    role: "Lead architect",
    tools: "Rhino, physical models",
    collaborators: "Optional",
  },
  images: [
    { src: "/images/project-1.jpg", caption: "Optional caption" },
    { src: "/images/project-2.jpg" },
  ],
}
```

### Add a Photography project

Add an object to the `photography` array with the same structure as above. The project will appear at `/photography/[slug]`.

### Images

- Place images in `public/images/` and reference them as `/images/filename.jpg`
- Or use external URLs (e.g. from placehold.co for placeholders)

### Update your name and Info page

- `siteName` — your name in the header
- `info` — portrait URL, intro text, email, and location

## Structure

- **Architecture / Design** — default landing page, project index
- **Photography** — photography project index
- **Info** — portrait, intro, contact

Each project has its own URL for sharing and linking.
