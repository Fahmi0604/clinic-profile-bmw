import { Banner } from '@/components'
import Cta from '@/components/Cta'
import Image from 'next/image'
import React from 'react'

export default function Fasilitas() {

    const facilities = [
        {
            id: 1,
            title: 'Ruang Perawatan Nyaman',
            image: '/assets/images/facility1.webp',
            description: 'Modern, dan steril, dilengkapi teknologi terkini untuk keamanan dan kenyamananmu',
        },
        {
            id: 2,
            title: 'Peralatan Teknologi Terkini ',
            image: '/assets/images/facility2.webp',
            description: 'Dengan dental microscope, teknologi scaling airflow, dan intra oral scanner (digital dentistry).',
        },
        {
            id: 3,
            title: 'Family Friendly',
            image: '/assets/images/facility3.webp',
            description: 'Semua fasilitas berada di lantai satu untuk kenyamanan dan keamanan segala usia.',
        }
    ]

    const kategori = [
        {
            id: 1,
            title: 'Kenyamanan Anda yang Utama',
            facilities
        },
        {
            id: 2,
            title: 'Teknologi Modern, Hasil Presisi',
            facilities
        }
    ]

    return (
        <main className="min-h-screen">
            <Banner
                title="Fasilitas Terbaik Untukmu"
                description="Klinik ramah keluarga yang nyaman untuk anak, dewasa, dan lansia, dilengkapi dengan teknologi modern dan terkini."
                image="/assets/images/banner-facilities.webp"
                classNameImage="object-[10%_50%]"
            />

            <section className="flex justify-center px-4 py-8 md:py-20">
                <div className='w-full md:max-w-5xl xl:max-w-6xl'>
                    {kategori.map((e) => (
                        <div key={e.id} className='mb-24'>
                            <h3 className="text-3xl font-gotham font-bold text-heading-1 mb-6 md:mb-10">{e.title}</h3>
                            <div className='w-full flex flex-col md:flex-row justify-around items-center gap-5 md:gap-0'>
                                {e.facilities.map((e) => (
                                    <div key={e.id} className='w-full md:w-[31%] flex flex-col gap-4'>
                                        <Image
                                            src={e.image}
                                            alt={e.title}
                                            width={200}
                                            height={200}
                                            className='w-full h-[275px] object-cover rounded-xl'
                                        />
                                        <div className='w-full'>
                                            <h4 className='text-[22px] font-semibold font-gotham text-heading-1 mb-2'>{e.title}</h4>
                                            <p className='text-body-2'>{e.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* <Cta title={"Jadwalkan perawatan terbaik <br className='hidden md:block' /> untukmu dan keluarga"} description="Satu klik untuk pengalaman terbaik" image="/assets/images/cta-service.webp" classNameImage="object-[30%_50%] md:object-[50%_50%]" /> */}
            <Cta title={"Kenyamanan & Teknologi, Kini Bisa Kamu Rasakan"} description="Satu klik untuk rasakan perbedaanya" image="/assets/images/cta-facilities.webp" classNameImage="object-[30%_50%] md:object-[50%_50%]" />
        </main>
    )
}
