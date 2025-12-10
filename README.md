# OpsOrch.com

The official marketing and landing page website for OpsOrch. This Next.js site provides information about the OpsOrch platform, its capabilities, and how to get started.

## Overview

OpsOrch.com serves as the public-facing website for the OpsOrch project, featuring:
- Product overview and key features
- Architecture and integration information
- Docker Compose quick start guides
- Comprehensive documentation for all components
- Open source Console information
- Community and contribution information

> **Description from package.json**: OpsOrch stitches together telemetry, incident response, and automation so teams can see, decide, and act with confidence.

## Recent Updates

- **Console Open Source**: OpsOrch Console is now available as open source with both OSS and Enterprise editions
- **Docker Compose**: Complete stack deployment with pre-built configurations for demo, development, and production
- **Updated Documentation**: Comprehensive guides for Docker deployment and custom adapter builds
- **Enhanced Quick Start**: Get the complete stack running in under a minute with Docker Compose

## Key Features Documented

### Docker Compose Configurations
- **Demo/Evaluation**: `docker-compose.yml` - Mock adapters with realistic demo data
- **Development**: `docker-compose.dev.yml` - Both OSS and Enterprise console editions
- **Production**: `docker-compose.prod.yml` - Custom adapter builds with real providers

### Open Source Components
- **OpsOrch Core**: Stateless Go orchestration service
- **OpsOrch MCP**: TypeScript MCP server for AI tools
- **OpsOrch Console**: Next.js operator UI (OSS & Enterprise editions)
- **Provider Adapters**: PagerDuty, Jira, Datadog, Prometheus, Slack, Elasticsearch

### Quick Start Options
- **One-minute setup**: Docker Compose with demo data
- **Custom builds**: Mix and match adapter binaries
- **Development environment**: Both console editions for testing

## Development

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

Run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Build for Production

```bash
npm run build
npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

