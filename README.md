# OpsOrch.com

[![Version](https://img.shields.io/github/v/release/OpsOrch/opsorch-com)](https://github.com/OpsOrch/opsorch-com/releases)
[![License](https://img.shields.io/github/license/OpsOrch/opsorch-com)](https://github.com/OpsOrch/opsorch-com/blob/main/LICENSE)
[![CI](https://github.com/OpsOrch/opsorch-com/workflows/CI/badge.svg)](https://github.com/OpsOrch/opsorch-com/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)

The public website and documentation hub for OpsOrch.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Development](#development)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

OpsOrch.com is the official website and documentation portal for the OpsOrch project. It provides comprehensive information about the platform, including product overviews, architecture documentation, quick start guides, and API references.

## Features

- **Product Overview** – Introduction to OpsOrch and its capabilities
- **Architecture Documentation** – Detailed system architecture and design patterns
- **Quick Start Guides** – Step-by-step tutorials for getting started
- **Component Documentation** – Detailed docs for Core, MCP, Copilot, Console, and Adapters
- **API Reference** – Complete API documentation for all components
- **Adapter Guides** – Instructions for building custom adapters
- **Security Documentation** – Security best practices and guidelines
- **Troubleshooting** – Common issues and solutions
- **License Information** – Apache-2.0 licensing details
- **Contact Form** – Get in touch with the OpsOrch team

## Tech Stack

- **Framework** – [Next.js 15](https://nextjs.org) with App Router
- **Language** – [TypeScript](https://www.typescriptlang.org)
- **Styling** – [Tailwind CSS 4](https://tailwindcss.com)
- **UI Components** – React 19
- **Build Output** – Standalone mode for Docker deployment

## Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/OpsOrch/opsorch-com.git
cd opsorch-com

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` – Start development server with hot reload
- `npm run build` – Build for production
- `npm start` – Start production server
- `npm run lint` – Run ESLint

### Development Server

The development server runs on `http://localhost:3000` with:
- Hot module replacement
- Fast refresh for React components
- TypeScript type checking
- Automatic route generation

### Adding New Pages

Create a new directory under `app/` with a `page.tsx` file:

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
}
```

The page will be automatically available at `/new-page`.

### Adding Documentation

Documentation pages are located in `app/docs/`. To add new documentation:

1. Create a new directory under `app/docs/`
2. Add a `page.tsx` file with your content
3. Update navigation if needed in `app/components/navigation.tsx`

## Project Structure

```
opsorch-com/
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   ├── components/          # Reusable React components
│   │   ├── code-block.tsx   # Code syntax highlighting
│   │   ├── demo-cta.tsx     # Demo call-to-action
│   │   ├── footer.tsx       # Site footer
│   │   └── navigation.tsx   # Site navigation
│   ├── contact/             # Contact page with form
│   ├── docs/                # Documentation pages
│   │   ├── adapters/        # Adapter documentation
│   │   ├── api/             # API reference
│   │   ├── architecture/    # Architecture docs
│   │   ├── building-with-adapters/ # Adapter development
│   │   ├── concepts/        # Core concepts
│   │   ├── console/         # Console documentation
│   │   ├── copilot/         # Copilot documentation
│   │   ├── installation/    # Installation guides
│   │   ├── quick-start/     # Quick start tutorials
│   │   ├── security/        # Security documentation
│   │   └── troubleshooting/ # Troubleshooting guides
│   ├── license/             # License information
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── robots.ts            # Robots.txt configuration
│   └── sitemap.ts           # Sitemap generation
├── public/                  # Static assets
│   ├── og-image.png         # Open Graph image
│   ├── opsorch-copilot-screen.jpg # Screenshots
│   ├── opsorch-demo.mp4     # Demo video
│   └── OpsOrch.png          # Logo
├── Dockerfile               # Docker build configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Deployment

### Docker

The site is configured for standalone Docker deployment:

```bash
# Build Docker image
docker build -t opsorch-com .

# Run container
docker run -p 3000:3000 opsorch-com
```

### Environment Variables

No environment variables are required for basic operation. The site is fully static.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

The production build:
- Optimizes all assets
- Generates static pages where possible
- Creates a standalone output in `.next/standalone/`
- Minifies JavaScript and CSS

### Hosting Options

The site can be deployed to:
- **Vercel** – Zero-config deployment (recommended)
- **Docker** – Using the included Dockerfile
- **Static hosting** – Export as static site if needed
- **Any Node.js host** – Run the standalone build

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Documentation Guidelines

When adding or updating documentation:
- Use clear, concise language
- Include code examples where appropriate
- Add screenshots or diagrams for complex concepts
- Test all code examples
- Update the navigation if adding new sections

## License

Apache-2.0. See [LICENSE](LICENSE) for details.

## Links

- **Website** – [https://opsorch.com](https://opsorch.com)
- **GitHub Organization** – [https://github.com/OpsOrch](https://github.com/OpsOrch)
- **OpsOrch Core** – [https://github.com/OpsOrch/opsorch-core](https://github.com/OpsOrch/opsorch-core)
- **OpsOrch Console** – [https://github.com/OpsOrch/opsorch-console](https://github.com/OpsOrch/opsorch-console)
- **OpsOrch Copilot** – [https://github.com/OpsOrch/opsorch-copilot](https://github.com/OpsOrch/opsorch-copilot)
- **OpsOrch MCP** – [https://github.com/OpsOrch/opsorch-mcp](https://github.com/OpsOrch/opsorch-mcp)
