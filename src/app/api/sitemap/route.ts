import { NextResponse } from "next/server";

let cachedSitemap: string | null = null;
let lastFetched = 0;

export async function GET() {
  const now = Date.now();

  // Refresh cache every hour
  if (!cachedSitemap || now - lastFetched > 1000 * 60 * 60) {
    try {
      const response = await fetch(
        "https://api.bmwdentalclinic.com/api/public/posts?status=published",
        {
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "next-sitemap/1.0",
          },
        }
      );

      const blogs = await response.json();

      const staticUrls = [
        {
          loc: "https://bmwdentalclinic.com/",
          changefreq: "weekly",
          priority: 1.0,
        },
        {
          loc: "https://bmwdentalclinic.com/about",
          changefreq: "monthly",
          priority: 0.8,
        },
        {
          loc: "https://bmwdentalclinic.com/contact",
          changefreq: "monthly",
          priority: 0.8,
        },
        // add other static pages here
      ];

      const blogUrls =
        blogs?.data?.map((blog: Post) => ({
          loc: `https://bmwdentalclinic.com/blogs/${blog.slug}`,
          lastmod: blog.published_at,
          changefreq: "daily",
          priority: 0.7,
        })) || [];

      const urls = [...staticUrls, ...blogUrls];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(
            (url) => `
          <url>
            <loc>${url.loc}</loc>
            ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
            <changefreq>${url.changefreq}</changefreq>
            <priority>${url.priority}</priority>
          </url>`
          )
          .join("")}
      </urlset>`;

      cachedSitemap = sitemap;
      lastFetched = now;
    } catch (error) {
      console.error("Error generating sitemap:", error);
      cachedSitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
      // return NextResponse.error();
    }
  }

  console.log({
    lastFetched,
    now,
    timeSinceLastFetch: now - lastFetched,
    cachedSitemap,
  });

  return new NextResponse(cachedSitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
