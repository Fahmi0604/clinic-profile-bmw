import Icons from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { getFacilities } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function FacilitiesPage() {
  const facilities = await getFacilities();
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
  if (!facilities) return notFound();

  console.log("FACILTIES", facilities);
  return (
    <section className="px-4 flex justify-center py-8 md:py-20 bg-gray-primary ">
      <div className="md:max-w-5xl xl:max-w-6xl">
        <h3 className="text-2xl md:text-3xl font-gotham font-bold text-heading-1 mb-6 md:mb-10">
          Fasilitas Terbaik untukmu
        </h3>

        <div className="w-full flex flex-col md:flex-row justify-around gap-5 md:gap-0">
          {facilities.data.map((e) => (
            <div key={e.id} className="w-full md:w-[31%] flex flex-col gap-4">
              <Image
                src={`${process.env.BASE_URL}${e.thumbnailUrl}`}
                alt={e.name}
                width={200}
                height={200}
                className="w-full h-[275px] object-cover rounded-xl"
              />
              <div className="w-full">
                <h4 className="text-ld md:text-[22px] font-semibold font-gotham text-heading-1 mb-2">
                  {e.name}
                </h4>
                <p className="text-body-2">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-8">
          <div className="w-full flex flex-col md:flex-row md:justify-center gap-4">
            <Link href={"/fasilitas"}>
              <Button className="w-full md:w-fit font-outfit font-semibold rounded-full bg-white text-heading-2 cursor-pointer py-6 md:py-4 px-3 hover:bg-gray-400">
                Lihat fasilitas lengkap
              </Button>
            </Link>

            <Button className="w-full md:w-fit font-outfit font-semibold rounded-full bg-gold-primary text-heading-2 cursor-pointer py-6 md:py-4 px-3 hover:bg-gold-secondary">
              <Icons name="whatsapp" className="w-6 h-6" /> Reservasi Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
