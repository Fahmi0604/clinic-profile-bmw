// app/blogs/[slug]/page.tsx
import { notFound } from 'next/navigation';
// import { findBlogBySlug, findAllPublishedBlogSlugs } from '@/lib/models';
import { metaData } from '@/lib/utils/metadata';
import { Metadata } from 'next';
import Image from 'next/image';
// import { cache } from "react";
import JsonLd from '@/lib/components/JsonLd';
import { format } from 'date-fns';
import Icons from '@/components/Icon';
import Link from 'next/link';
import { id } from 'date-fns/locale';
import { PageWrapper } from '@/components';
import { getBlogs, getBlogsBySlug } from '@/lib/api';
import Cta from '@/components/Cta';

export const revalidate = 60; // ISR regeneration time (60 seconds)

// const getBlog = cache(async (slug: string) => {
//     return findBlogBySlug(slug);
// })

// const blogs = [
//     {
//         id: 1,
//         title: 'Tips Menjaga Kesehatan Gigi Anak Sejak Dini',
//         metaTitle: 'Tips Menjaga Kesehatan Gigi Anak Sejak Dini',
//         metaDesc: 'Tips menjaga kesehatan gigi anak sejak dini sangat penting untuk perkembangan gigi permanen yang sehat',
//         slug: 'blog-1',
//         excerpt: 'Menjaga kesehatan gigi anak sejak dini sangat penting untuk perkembangan gigi permanen yang sehat',
//         featuredImage: '/assets/images/banner-dokter.webp',
//         publishedDate: new Date(),
//     },
//     {
//         id: 2,
//         title: 'Blog 2',
//         metaTitle: 'Blog 2',
//         metaDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         slug: 'blog-2',
//         excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         featuredImage: '/assets/images/banner-service.webp',
//         publishedDate: new Date(),
//     },
//     {
//         id: 3,
//         title: 'Blog 3',
//         metaTitle: 'Blog 3',
//         metaDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         slug: 'blog-3',
//         excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         featuredImage: '/assets/images/banner-facilities.webp',
//         publishedDate: new Date(),
//     },
//     {
//         id: 4,
//         title: 'Blog 4',
//         metaTitle: 'Blog 4',
//         metaDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         slug: 'blog-4',
//         excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         featuredImage: '/assets/images/banner.webp',
//         publishedDate: new Date(),
//     },
// ]

// const content = `<h2>What to expect from here on out</h2>
//       <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
//       <p>It's important to cover all of these use cases for a few reasons:</p>
//       <ol>
//         <li>We want everything to look good out of the box.</li>
//         <li>Really just the first reason, that's the whole point of the plugin.</li>
//         <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
//       </ol>
//       <p>Now we're going to try out another header style.</p>
//       <h3>Typography should be easy</h3>
//       <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
//       <p>Something a wise person once told me about typography is:</p>
//       <blockquote><p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p></blockquote>`

// Generate static paths for blogs (optional)
export async function generateStaticParams() {
    const blogs = await getBlogs();

    if (!blogs.data.length) return []

    return blogs.data?.filter(f => f.status === 'published').map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug
    const blog = await getBlogsBySlug(slug);
    // const blog = blogs.map((m) => ({ ...m, content })).find((e) => e.slug === slug);
    if (!blog) return {};

    return metaData({
        title: blog.data.title,
        description: blog.data.excerpt,
        images: blog.data.thumbnailUrl ? [{ url: blog.data.thumbnailUrl }] : [],
        path: `/blogs/${blog.data.slug}`,
    });
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    // Ensure params is properly destructured and not treated as a Promise
    const { slug } = await params;
    const blog = await getBlogsBySlug(slug);
    // const blog = blogs.map((m) => ({ ...m, content })).find((e) => e.slug === slug);

    console.log('BLOG: ', blog);

    if (!blog) return notFound();

    return (
        <>
            <JsonLd schemaType='BlogPosting' data={blog.data} />
            <PageWrapper>
                <section className="w-full flex justify-center px-4 py-8 md:py-20">
                    <div className='w-full md:max-w-3xl xl:max-w-4xl'>
                        <div className='flex justify-between items-center mb-10'>
                            <Link href={`/blogs`} className='text-body-2 flex items-center gap-2 underline'> <Icons name='arrow-back' className='w-6 h-6 text-black' /> Kembali ke Blog</Link>
                        </div>

                        <h1 className='mb-1 text-3xl text-heading-1 font-semibold'>{blog.data.title}</h1>
                        <span className='text-caption-2'>{format(blog.data.published_at ?? '', 'dd MMMM yyyy', { locale: id })}</span>

                        <Image
                            src={blog.data.thumbnailUrl ?? ''}
                            alt={blog.data.title ?? ''}
                            width={100}
                            height={100}
                            className='mt-8 rounded-lg w-full md:h-[70vh] object-cover'
                        />
                        {/* <p className='text-stone-400'>by {blog.author.name}</p> */}
                        <article className='mt-6 prose lg:prose-lg' dangerouslySetInnerHTML={{ __html: blog.data.content }} />
                    </div>
                </section>
                {blog.data.cta?.length && blog.data.cta[0]?.headline && <Cta
                    title={blog.data.cta[0].headline ?? ''}
                    description={blog.data.cta[0].description ?? ''}
                    image={blog.data.cta[0].bannerImg ?? ''}
                // classNameImage="object-[50%_80%] md:object-[50%_40%]"
                />}
            </PageWrapper>
        </>
    );
}
