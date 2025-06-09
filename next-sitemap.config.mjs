// next-sitemap.config.mjs
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    siteUrl: process.env.BASE_URL || 'https://yourdomain.com',
    generateRobotsTxt: true,
    additionalPaths: async () => {
        const blogs = await prisma.blog.findMany({
            where: { published: true },
        });

        return blogs.map(blog => ({
            loc: `/blogs/${blog.slug}`,
            lastmod: blog.updatedAt.toISOString(),
            changefreq: 'daily',
            priority: 0.7,
        }));
    },
};
