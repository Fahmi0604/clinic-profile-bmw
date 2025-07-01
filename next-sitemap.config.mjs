// next-sitemap.config.mjs
export default {
    siteUrl: 'https://bmwdentalclinic.com',
    generateRobotsTxt: true,
    additionalPaths: async () => {
        try {
            // Add timeout to prevent build failures
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

            const response = await fetch('https://api.bmwdentalclinic.com/api/public/posts?status=published', {
                signal: controller.signal,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                console.warn('Failed to fetch blogs for sitemap, continuing without dynamic blog paths');
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
            if (error.name === 'AbortError') {
                console.warn('Blog fetch timed out during sitemap generation, continuing without dynamic blog paths');
            } else {
                console.warn('Error fetching blogs for sitemap:', error.message);
            }
            return [];
        }
    },
};
