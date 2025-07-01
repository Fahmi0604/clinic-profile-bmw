// next-sitemap.config.mjs
export default {
    siteUrl: 'https://bmwdentalclinic.com',
    generateRobotsTxt: true,
    additionalPaths: async () => {
        try {
            const response = await fetch('https://api.bmwdentalclinic.com/api/public/posts?status=published');

            if (!response.ok) {
                console.error('Failed to fetch blogs for sitemap');
                return [];
            }

            const blogs = await response.json();

            if (!blogs?.data?.length) {
                return [];
            }

            return blogs?.data?.map(blog => ({
                loc: `/blogs/${blog.slug}`,
                lastmod: blog.updatedAt,
                changefreq: 'daily',
                priority: 0.7,
            }));
        } catch (error) {
            console.error('Error fetching blogs for sitemap:', error);
            return [];
        }
    },
};
