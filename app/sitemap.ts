import type { MetadataRoute } from "next";

const baseUrl = "https://opsorch.com";

const routes = ["/", "/about", "/blog", "/contact", "/docs", "/license"] as const;
const blogRoutes = [
  {
    url: `${baseUrl}/blog/operations-are-fragmented`,
    lastModified: new Date("2026-03-18T00:00:00Z"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route, index) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: index <= 2 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
