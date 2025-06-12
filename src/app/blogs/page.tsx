// app/blogs/page.tsx
import Link from 'next/link';
// import { findPublishedBlogs } from '@/lib/models';
import Image from 'next/image';
import { format } from 'date-fns'
import { id } from 'date-fns/locale';
import Icons from '@/components/Icon';

export const revalidate = 60; // ISR: update list every 60s

// async function getBlogs() {
//     return [
//         {
//             title: 'Blog 1',
//             slug: 'blog-1',
//             excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//             featuredImage: '/assets/images/banner-dokter.webp',
//         },
//     ]
//     return findPublishedBlogs();
// }

export default async function BlogListPage() {
    const blogs = [
        {
            id: 1,
            title: 'Tips Menjaga Kesehatan Gigi Anak Sejak Dini',
            slug: 'blog-1',
            excerpt: 'Menjaga kesehatan gigi anak sejak dini sangat penting untuk perkembangan gigi permanen yang sehat',
            featuredImage: '/assets/images/banner-dokter.webp',
            publishedDate: new Date(),
        },
        {
            id: 2,
            title: 'Blog 2',
            slug: 'blog-2',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            featuredImage: '/assets/images/banner-service.webp',
            publishedDate: new Date(),
        },
        {
            id: 3,
            title: 'Blog 3',
            slug: 'blog-3',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            featuredImage: '/assets/images/banner-facilities.webp',
            publishedDate: new Date(),
        },
        {
            id: 4,
            title: 'Blog 4',
            slug: 'blog-4',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            featuredImage: '/assets/images/banner.webp',
            publishedDate: new Date(),
        },
    ]

    return (
        // <main className='p-4'>
        //     <h1 className='text-stone-600 text-2xl font-semibold mb-6'>Blog Articles</h1>
        //     <div className='w-full flex gap-4 flex-col lg:flex-row lg:flex-wrap'>
        //         {blogs.map((blog) => (
        //             <div key={blog.slug} className='w-full lg:w-[20%] bg-stone-200 border-2 border-stone-500 p-2 rounded-lg shadow shadow-stone-500'>
        //                 <Link href={`/blogs/${blog.slug}`}>
        //                     <Image
        //                         src={blog.featuredImage ?? ''}
        //                         alt={blog.title ?? ''}
        //                         width={100}
        //                         height={100}
        //                         className='object-cover w-full h-40'
        //                     />
        //                     <h2 className='text-stone-500 text-xl font-medium'>{blog.title}</h2>
        //                     <p className='text-stone-400 text-sm'>{blog.excerpt}</p>
        //                 </Link>
        //             </div>
        //         ))}
        //     </div>
        // </main>

        <section className="flex justify-center px-4 py-8 md:py-20">
            <div className='w-full md:max-w-5xl xl:max-w-6xl'>
                <div className='mb-24'>
                    <h3 className="text-3xl font-gotham font-bold text-heading-1 mb-6 md:mb-10">Dental Article</h3>
                    <div className='w-full flex flex-col md:flex-row flex-wrap items-stretch gap-5 md:gap-7 xl:gap-10'>
                        {blogs.map((e) => (
                            <Link key={e.id} href={`/blogs/${e.slug}`} className='w-full md:w-[31%] flex flex-col gap-4 border border-line-color rounded-xl'>
                                <Image
                                    src={e.featuredImage}
                                    alt={e.title}
                                    width={200}
                                    height={200}
                                    className='w-full h-[250px] object-cover rounded-t-xl'
                                />
                                <div className='w-full h-full flex flex-col justify-between p-4'>
                                    <div>
                                        <h4 className='text-[22px] font-semibold font-gotham text-heading-1 mb-2'>{e.title}</h4>
                                        <p className='text-body-2'>{e.excerpt}</p>
                                    </div>

                                    <div className='flex justify-between items-center mt-4'>
                                        <span className='text-caption-2'>{format(e.publishedDate, 'dd MMMM yyyy', { locale: id })}</span>
                                        <p className='text-body-2 flex items-center gap-2 underline'>Baca Selengkapnya <Icons name='arrow-forward' className='w-6 h-6 text-black'></Icons></p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
