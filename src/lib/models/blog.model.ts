// src/lib/models/blog.model.ts
import { prisma } from "@/lib/prisma";
import { Blog } from "@prisma/client";

// How ISR Works:
// The first user request generates the page and caches it on the edge.
// During the revalidate interval, the same cached page is served.
// After the interval, the next request triggers a regeneration in the background — and updates the static cache.

/**
 * Find a single blog by slug
 * @param slug - The unique slug of the blog
 * @param includeAuthor - Whether to include author information
 * @returns The blog post or null if not found
 */
export async function findBlogBySlug(slug: string, includeAuthor = true) {
  return prisma.blog.findUnique({
    where: { slug, published: true },
    include: { author: includeAuthor },
  });
}

/**
 * Get all published blogs
 * @param options - Options for filtering and selecting fields
 * @returns Array of blog posts
 */
export async function findPublishedBlogs(options?: {
  select?: { [key: string]: boolean };
}): Promise<Partial<Blog>[]> {
  return prisma.blog.findMany({
    where: { published: true },
    select: options?.select || {
      slug: true,
      title: true,
      excerpt: true,
      featuredImage: true,
    },
  });
}

/**
 * Get all published blog slugs
 * @returns Array of blog slugs
 */
export async function findAllPublishedBlogSlugs() {
  return prisma.blog.findMany({
    where: { published: true },
    select: { slug: true },
  });
}
