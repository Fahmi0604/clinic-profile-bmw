// app/blogs/page.tsx
import Link from 'next/link';
// import { findPublishedBlogs } from '@/lib/models';
import Image from 'next/image';
import { format } from 'date-fns'
import { id } from 'date-fns/locale';
import Icons from '@/components/Icon';
import { PageWrapper } from '@/components';
import { Metadata } from 'next';
import { getBlogs } from '@/lib/api';
import { notFound } from 'next/navigation';
import { metaData } from '@/lib/utils/metadata';

export const revalidate = 60; // ISR: update list every 60s

export async function generateMetadata(): Promise<Metadata> {
    return metaData({
        title: 'Blogs',
        description: 'BMW Dental Clinic menyediakan artikel kesehatan gigi dan mulut yang bermanfaat untuk keluarga Anda.',
        images: [{ url: '/assets/images/banner.webp' }],
        path: '/blogs',
    });
};

export default async function BlogListPage() {
    const _blogs = await getBlogs()

    if (!_blogs) return notFound();

    const blogs = _blogs.data;

    return (
        <PageWrapper className="flex justify-center px-4 py-8 md:py-20">
            <div className='w-full md:max-w-5xl xl:max-w-6xl'>
                <div className='mb-24'>
                    <h3 className="text-3xl font-gotham font-bold text-heading-1 mb-6 md:mb-10">Dental Article</h3>
                    <div className='w-full flex flex-col md:flex-row flex-wrap items-stretch gap-5 md:gap-7 xl:gap-10'>
                        {blogs.map((e) => (
                            <Link key={e.id} href={`/blogs/${e.slug}`} className='w-full md:w-[31%] flex flex-col gap-4 border border-line-color rounded-xl'>
                                <Image
                                    src={e.thumbnailUrl}
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
                                        <span className='text-caption-2'>{format(e.published_at ?? '', 'dd MMMM yyyy', { locale: id })}</span>
                                        <p className='text-body-2 flex items-center gap-2 underline'>Baca Selengkapnya <Icons name='arrow-forward' className='w-6 h-6 text-black'></Icons></p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
