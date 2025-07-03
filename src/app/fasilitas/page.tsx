import { Banner, PageWrapper } from "@/components";
import Cta from "@/components/Cta";
import { getFacilities } from "@/lib/api";
import { metaData } from "@/lib/utils/metadata";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

// export const metadata: Metadata = {
//   title: "Fasilitas",
//   description: "Fasilitas milik BMW Dental Clinic yang terbaru dan modern untuk hasil terbaik",
// };

export async function generateMetadata(): Promise<Metadata> {
  return metaData({
    title: 'Fasilitas',
    description: 'Fasilitas milik BMW Dental Clinic yang terbaru dan modern untuk hasil terbaik',
    images: [{ url: '/assets/images/banner-facilities.webp' }],
    path: '/fasilitas',
  });
}

export default async function Fasilitas() {
  const _facilities = await getFacilities();
  // const facilities = [
  //     {
  //         id: 1,
  //         title: 'Ruang Perawatan Nyaman',
  //         image: '/assets/images/facility1.webp',
  //         description: 'Modern, dan steril, dilengkapi teknologi terkini untuk keamanan dan kenyamananmu',
  //     },
  //     {
  //         id: 2,
  //         title: 'Peralatan Teknologi Terkini ',
  //         image: '/assets/images/facility2.webp',
  //         description: 'Dengan dental microscope, teknologi scaling airflow, dan intra oral scanner (digital dentistry).',
  //     },
  //     {
  //         id: 3,
  //         title: 'Family Friendly',
  //         image: '/assets/images/facility3.webp',
  //         description: 'Semua fasilitas berada di lantai satu untuk kenyamanan dan keamanan segala usia.',
  //     }
  // ]

  if (!_facilities) return notFound();
  const facilities = _facilities.data;

  console.log("FACILTIES", facilities);

  const kategori = [
    {
      id: 1,
      title: "Kenyamanan Anda yang Utama",
      facilities: facilities?.filter((f) => f.category === 'section-1'),
    },
    {
      id: 2,
      title: "Teknologi Modern, Hasil Presisi",
      facilities: facilities?.filter((f) => f.category === 'section-2'),
    },
  ];

  return (
    <PageWrapper className="min-h-screen">
      <Banner
        title="Fasilitas Terbaik Untukmu"
        description="Klinik ramah keluarga yang nyaman untuk anak, dewasa, dan lansia, dilengkapi dengan teknologi modern dan terkini."
        image="/assets/images/banner-facilities.webp"
        classNameImage="object-[10%_50%]"
      />

      <section className="flex justify-center px-4 py-8 md:py-20">
        <div className="w-full md:max-w-5xl xl:max-w-6xl">
          {kategori.map((e) => (
            <div key={e.id} className="mb-24">
              <h3 className="text-3xl font-gotham font-medium text-heading-1 mb-6 md:mb-10">
                {e.title}
              </h3>
              <div className="w-full flex flex-col flex-wrap md:flex-row justify-between items-top gap-5 md:gap-10">
                {e.facilities?.map((e) => (
                  <div
                    key={e.id}
                    className="w-full md:w-[48%] flex flex-col md:flex-row gap-6"
                  >
                    <Image
                      src={e.thumbnailUrl ?? ''}
                      alt={e.name}
                      width={200}
                      height={200}
                      className="w-full min-w-1/2 max-w-1/2 h-[275px] md:h-[250px] object-cover rounded-xl"
                    />
                    <div className="w-full">
                      <h4 className="text-[22px] font-medium font-gotham text-heading-1 mb-2">
                        {e.name}
                      </h4>
                      <p className="text-body-2">{e.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <Cta title={"Jadwalkan perawatan terbaik <br className='hidden md:block' /> untukmu dan keluarga"} description="Satu klik untuk pengalaman terbaik" image="/assets/images/cta-service.webp" classNameImage="object-[30%_50%] md:object-[50%_50%]" /> */}
      <Cta
        title={"Kenyamanan & Teknologi, Kini Bisa Kamu Rasakan"}
        description="Satu klik untuk rasakan perbedaanya"
        image="/assets/images/cta-facilities.webp"
        classNameImage="object-[30%_50%] md:object-[50%_50%]"
      />
    </PageWrapper>
  );
}
