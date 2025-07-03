import { getBlogs } from "@/lib/api";
import { NextResponse } from "next/server";

let cachedSitemap: string | null = null;
let lastFetched = 0;

export async function GET() {
  const now = Date.now();

  // Refresh cache every hour
  if (!cachedSitemap || now - lastFetched > 1000 * 60 * 60) {
    try {
      const response = await getBlogs();

      const blogs = response.data;

      const staticUrls = [
        {
          loc: "https://bmwdentalclinic.com",
          changefreq: "daily",
          priority: 0.7,
        },
        {
          loc: "https://bmwdentalclinic.com/dokter",
          changefreq: "daily",
          priority: 0.7,
        },
        {
          loc: "https://bmwdentalclinic.com/layanan",
          changefreq: "daily",
          priority: 0.7,
        },
        {
          loc: "https://bmwdentalclinic.com/fasilitas",
          changefreq: "daily",
          priority: 0.7,
        },
        // add other static pages here
      ];

      const blogUrls =
        blogs?.map((blog: Post) => ({
          loc: `https://bmwdentalclinic.com/blogs/${blog.slug}`,
          lastmod: blog.published_at,
          changefreq: "weekly",
          priority: 0.7,
        })) || [];

      const urls: Record<string, any>[] = [...staticUrls, ...blogUrls];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(
            (url) => `
          <url>
            <loc>${url.loc}</loc>
            ${url?.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
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
