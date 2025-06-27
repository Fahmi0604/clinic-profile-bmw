import { Banner, PageWrapper } from "@/components";
import Cta from "@/components/Cta";
import Icons from "@/components/Icon";
import { getServices } from "@/lib/api";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Layanan",
};

export default async function Layanan() {
  const _services = await getServices();
  // const services = [
  //     {
  //         id: 1,
  //         title: 'Menjaga senyuman untuk semua umur',
  //         image: '/assets/dokter/service1.jpg',
  //         // imageClassName: 'object-[80%_25%]',
  //         imageClassName: '',
  //         services: [
  //             { name: "Dental Spa", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Perawatan Saluran Akar", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Penambalan Gigi Estetik", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Dental Crown", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Veneer", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Smile Makeover", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Kawat Gigi (Ortodinti)", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Invisalign", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Pencabutan Gigi", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Odontektomi", link: '', description: 'Lorem ipsum dolor sit amet' },
  //         ]
  //     },
  //     {
  //         id: 2,
  //         title: 'Untuk lansia yang butuh perhatian ekstra',
  //         image: '/assets/dokter/service2.jpg',
  //         // imageClassName: 'object-[50%_30%]',
  //         imageClassName: '',
  //         services: [
  //             { name: "Dental Implant", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Dental Bridge", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Gigi Tiruan Lepasan", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Perawatan Sakit Sendi Rahang", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Full Mouth Rehabilitation", link: '', description: 'Lorem ipsum dolor sit amet' },
  //         ]
  //     },
  //     {
  //         id: 3,
  //         title: 'Perawatan gigi anak, aman & nyaman',
  //         image: '/assets/dokter/service3.jpg',
  //         // imageClassName: 'object-[50%_50%]',
  //         imageClassName: '',
  //         services: [
  //             { name: "Perawatan Fluoride", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Pit and Fissure Sealant", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Scaling Anak", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Penambalan Gigi Anak", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Perawatan Saluran Akar Anak", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Dental Crown Anak", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Pencabutan Gigi Anak", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Space Maintainer", link: '', description: 'Lorem ipsum dolor sit amet' },
  //             { name: "Kawat Gigi Anak", link: '', description: 'Lorem ipsum dolor sit amet' },
  //         ]
  //     },
  // ]

  const generateBorder = (index: number, length: number) => {
    if (index % 2 === 0) return "md:border-r";
    if (index % 2 !== 0 && length % 2 !== 0) return "md:border-b";

    return "";
  };

  if (!_services) return notFound();

  const services = _services.data;

  console.log("SERVICES", services);

  const datas = services.reduce((acc, service) => {
    const category = service.category.toLowerCase();

    if (category.includes('umum')) {
      acc.umum = [...(acc.umum || []), service];
    } else if (category.includes('lansia')) {
      acc.lansia = [...(acc.lansia || []), service];
    } else if (category.includes('anak')) {
      acc.anak = [...(acc.anak || []), service];
    }

    return acc;
  }, {} as Record<'umum' | 'lansia' | 'anak', typeof services>);

  return (
    <PageWrapper className="min-h-screen">
      {/* <section className="flex flex-col md:flex-row-reverse">
                <div className="relative overflow-hidden h-[325px] md:h-[80vh]">
                    <Image
                        src="/assets/images/banner-service.webp"
                        alt="logo"
                        width={100}
                        height={100}
                        className="w-full md:w-[60vw] h-full object-cover object-[50%_50%] md:object-[50%_40%] z-0 block"
                    />
                    <div className="z-20 bottom-0 md:left-0 absolute w-full md:w-1/2 -mb-1 md:mb-0 md:-ml-1 h-[50%] md:h-full bg-gradient-to-t md:bg-gradient-to-r from-blue-primary via-blue-primary/70 md:via-blue-primary/30 to-transparent" />
                </div>
                <div className="w-full md:w-[65vw] px-4 md:px-0 flex justify-end items-center bg-blue-primary text-white">
                    <div className="md:w-fit">
                        <h1 className="hidden md:block md:text-4xl xl:text-5xl font-bold font-gotham mb-4">Layanan Lengkap <br /> untuk Seluruh Keluarga</h1>
                        <h1 className="md:hidden text-4xl md:text-5xl font-bold font-gotham mb-4">Layanan Lengkap untuk Seluruh Keluarga</h1>
                        <p className="leading-7 mb-10 md:mb-4 md:text-lg md:max-w-lg">BMW Dental Clinic menyediakan layanan perawatan gigi komprehensif untuk seluruh anggota keluarga, didukung oleh dokter gigi umum dan spesialis berpengalaman serta teknologi terkini. Pilih layanan yang kamu butuhkan untuk informasi lebih detail.</p>
                    </div>
                </div>
            </section> */}

      <Banner
        title="Layanan Lengkap untuk Seluruh Keluarga"
        description="BMW Dental Clinic menyediakan layanan perawatan gigi komprehensif untuk seluruh anggota keluarga, didukung oleh dokter gigi umum dan spesialis berpengalaman serta teknologi terkini. Pilih layanan yang kamu butuhkan untuk informasi lebih detail."
        image="/assets/images/banner-service.webp"
        classNameImage="object-[50%_50%]"
      />

      <section className="flex justify-center px-4 py-8 md:py-20">
        <div className="w-full space-y-16 md:max-w-5xl xl:max-w-6xl">
          {/* <h3 className="text-3xl font-gotham font-bold text-heading-1 mb-6 md:mb-10">Layanan Lengkap untuk Seluruh Keluarga</h3> */}

          <div className="w-full flex flex-col justify-around items-stretch gap-18">
            <div
              className="w-full flex flex-col shadow shadow-line-color rounded-xl "
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <Image
                  src={'assets/images/service1.webp'}
                  alt={'service 1'}
                  width={200}
                  height={200}
                  className={cn("w-full h-full object-cover rounded-xl", "object-[80%_25%]")}
                />
                <div className="w-full absolute bottom-0">
                  <div className="z-20 w-full h-28 bg-gradient-to-t from-blue-primary to-transparent" />
                  <div className="w-full p-6 bg-blue-primary text-white">
                    <h3 className="text-2xl md:text-3xl font-semibold font-gotham">
                      Menjaga senyuman untuk semua umur
                    </h3>
                  </div>
                  <div className="z-20 w-full h-4 bg-gradient-to-b from-gold-primary to-white" />
                </div>
              </div>
              {datas.umum?.map((e, i) => (
                <div key={i} className="bg-white grid grid-cols-1 md:grid-cols-2 rounded-b-xl">
                  {/* {e.name.map((f, i) => ( */}
                  <Link
                    key={e.name}
                    href={`layanan/${e.slug}`}
                    className={cn(
                      "w-full p-6 border-t border-line-color ",
                      generateBorder(i, e.name.length)
                    )}
                  >
                    <div className="flex justify-between text-heading-1 font-bold text-[22px]">
                      {e.name}
                      <Icons name="chevron" className="text-body-1" />
                    </div>
                    <p className="text-body-2 text-lg">{e.description}</p>
                  </Link>
                  {/* ))} */}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col justify-around items-stretch gap-18">
            <div
              className="w-full flex flex-col shadow shadow-line-color rounded-xl "
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <Image
                  src={'assets/images/service2.webp'}
                  alt={'service 2'}
                  width={200}
                  height={200}
                  className={cn("w-full h-full object-cover rounded-xl", "object-[50%_30%]")}
                />
                <div className="w-full absolute bottom-0">
                  <div className="z-20 w-full h-28 bg-gradient-to-t from-blue-primary to-transparent" />
                  <div className="w-full p-6 bg-blue-primary text-white">
                    <h3 className="text-2xl md:text-3xl font-semibold font-gotham">
                      Untuk lansia yang butuh perhatian ekstra
                    </h3>
                  </div>
                  <div className="z-20 w-full h-4 bg-gradient-to-b from-gold-primary to-white" />
                </div>
              </div>
              {datas.lansia?.map((e, i) => (
                <div key={i} className="bg-white grid grid-cols-1 md:grid-cols-2 rounded-b-xl">
                  {/* {e.name.map((f, i) => ( */}
                  <Link
                    key={e.name}
                    href={`layanan/${e.slug}`}
                    className={cn(
                      "w-full p-6 border-t border-line-color ",
                      generateBorder(i, e.name.length)
                    )}
                  >
                    <div className="flex justify-between text-heading-1 font-bold text-[22px]">
                      {e.name}
                      <Icons name="chevron" className="text-body-1" />
                    </div>
                    <p className="text-body-2 text-lg">{e.description}</p>
                  </Link>
                  {/* ))} */}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col justify-around items-stretch gap-18">
            <div
              className="w-full flex flex-col shadow shadow-line-color rounded-xl "
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <Image
                  src={'assets/images/service3.webp'}
                  alt={'service 3'}
                  width={200}
                  height={200}
                  className={cn("w-full h-full object-cover rounded-xl", "")}
                />
                <div className="w-full absolute bottom-0">
                  <div className="z-20 w-full h-28 bg-gradient-to-t from-blue-primary to-transparent" />
                  <div className="w-full p-6 bg-blue-primary text-white">
                    <h3 className="text-2xl md:text-3xl font-semibold font-gotham">
                      Perawatan gigi anak, aman & nyaman
                    </h3>
                  </div>
                  <div className="z-20 w-full h-4 bg-gradient-to-b from-gold-primary to-white" />
                </div>
              </div>
              {datas.anak?.map((e, i) => (
                <div key={i} className="bg-white grid grid-cols-1 md:grid-cols-2 rounded-b-xl">
                  {/* {e.name.map((f, i) => ( */}
                  <Link
                    key={e.name}
                    href={`layanan/${e.slug}`}
                    className={cn(
                      "w-full p-6 border-t border-line-color ",
                      generateBorder(i, e.name.length)
                    )}
                  >
                    <div className="flex justify-between text-heading-1 font-bold text-[22px]">
                      {e.name}
                      <Icons name="chevron" className="text-body-1" />
                    </div>
                    <p className="text-body-2 text-lg">{e.description}</p>
                  </Link>
                  {/* ))} */}
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>
      {/* <Cta title={"Jadwalkan perawatan terbaik <br className='hidden md:block' /> untukmu dan keluarga"} description="Satu klik untuk pengalaman terbaik" image="/assets/images/cta-service.webp" classNameImage="object-[30%_50%] md:object-[50%_50%]" /> */}
      <Cta
        title={"Jadwalkan perawatan terbaik untukmu dan keluarga"}
        description="Satu klik untuk pengalaman terbaik"
        image="/assets/images/cta-service.webp"
        classNameImage="object-[30%_50%] md:object-[50%_50%]"
      />
    </PageWrapper>
  );
}
