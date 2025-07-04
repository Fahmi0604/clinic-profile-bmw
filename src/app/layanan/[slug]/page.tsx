// app/blogs/[slug]/page.tsx
import { notFound } from 'next/navigation';
// import { findBlogBySlug } from '@/lib/models';
import { metaData } from '@/lib/utils/metadata';
import { Metadata } from 'next';
import Image from 'next/image';
// import { cache } from "react";
// import JsonLd from '@/lib/components/JsonLd';
import Icons from '@/components/Icon';
import Link from 'next/link';
import { BeforeAfter, PageWrapper } from '@/components';
import { getServiceBySlug } from '@/lib/api';
import Cta from '@/components/Cta';

export const revalidate = 60; // ISR regeneration time (60 seconds)
export const dynamicParams = true; // Allow dynamic params

// const getBlog = cache(async (slug: string) => {
//     return findBlogBySlug(slug);
// })

// Generate static paths for blogs (optional)
// export async function generateStaticParams() {
//     const services = await getServices();

//     return services.data?.map((s) => ({ slug: s.slug }));
// }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug
    const service = await getServiceBySlug(slug);

    if (!service) return {};

    return metaData({
        title: service.data.name,
        description: service.data.description,
        images: service.data.thumbnailUrl ? [{ url: service.data.thumbnailUrl }] : [],
        path: `/layanan/${service.data.slug}`,
    });
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    // Ensure params is properly destructured and not treated as a Promise
    const { slug } = await params;
    const service = await getServiceBySlug(slug);

    if (!service) return notFound();

    return (
        <PageWrapper>
            {/* <JsonLd schemaType='BlogPosting' data={blog} /> */}
            <section className="flex justify-center px-4 py-8 md:py-20">
                <div className='w-full md:max-w-3xl xl:max-w-4xl'>
                    <div className='flex justify-between items-center mb-10'>
                        <Link href={`/layanan`} className='text-body-2 flex items-center gap-2 underline'> <Icons name='arrow-back' className='w-6 h-6 text-black' /> Kembali ke Layanan</Link>
                    </div>

                    <h1 className='mb-1 text-3xl text-heading-1 font-semibold'>{service.data.name}</h1>
                    {/* <span className='text-caption-2'>{format(blog.publishedDate, 'dd MMMM yyyy', { locale: id })}</span> */}

                    <Image
                        src={service.data.thumbnailUrl ?? ''}
                        alt={'thumbnail'}
                        width={100}
                        height={100}
                        className='mt-8 rounded-lg w-full md:h-[70vh] object-cover'
                    />
                    {/* <p className='text-stone-400'>by {blog.author.name}</p> */}
                    <article className='mt-6 prose lg:prose-lg' dangerouslySetInnerHTML={{ __html: service.data.content }} />

                    {(Boolean(service.data.beforeImgs?.length) && Boolean(service.data.afterImgs?.length)) && (<div className='mt-20 flex justify-center'>
                        <div className="md:w-[65%] mb-4 md:mb-0">

                            <BeforeAfter
                                // label={{ before: service.data.labelBefore, after: blog.labelAfter }}
                                label={{ before: 'Sebelum', after: 'Sesudah' }}
                                image={{ before: { src: service.data.beforeImgs[0] }, after: { src: service.data.afterImgs[0] } }}
                                layout={'ROW'}
                            />
                        </div>
                    </div>)}

                </div>

            </section>

            {Boolean(service.data?.cta) && <Cta
                title={service.data.cta.title ?? ''}
                description={service.data.cta.description ?? ''}
                image={service.data.cta.imgBanner ?? ''}
                buttonLabel={service.data.cta.textButton ?? ''}
                url={service.data.cta.url ?? ''}
            // classNameImage="object-[50%_80%] md:object-[50%_40%]"
            />}
        </PageWrapper>
    );
}
