import { Banner, PageWrapper } from "@/components";
import Cta from "@/components/Cta";
import { Metadata } from "next";
import { getDoctors } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Dokter",
  description: "Dokter",
};

export default async function Dokter() {
  const _dokter = await getDoctors();

  // const dokter = [
  //     {
  //         id: 1,
  //         name: 'drg. Brian Merchantara Winato, Sp.KG',
  //         spesalis: 'Dokter Spesialis Konservasi Gigi',
  //         image: '/assets/dokter/dokter1.jpg',
  //         jadwal: [
  //             {
  //                 id: 1,
  //                 hari: "Senin - Jum'at",
  //                 jam: '09.00 - 12.00 | 15:00 - 20:00 WIB',
  //             },
  //             {
  //                 id: 2,
  //                 hari: 'Sabtu',
  //                 jam: '09.00 - 12.00 WIB',
  //             },
  //         ],
  //         treatment: [
  //             "Perawatan Saluran Akar Gigi",
  //             "Penambahan Gigi Estetik",
  //             "Dental Crown",
  //             "Smile Makeover",
  //             "Retreatment",
  //             "Full Mouth Rehabilitation",
  //             "Bedah Endodontik",
  //         ],
  //         pendidikan: [
  //             "Spesialis Konservasi Gigi, Universitas Sumatra Utara",
  //             "Dokter Gigi Umum, Universitas Sumatra Utara",
  //         ],
  //         description: "Dokter Brian percaya bahwa gigi sehat bukan hanya soal fungsi, tapi juga rasa percaya diri. Dikenal teliti dan sabar, ia selalu mengutamakan kenyamanan pasien serta hasil yang fungsional dan estetis. Bagi beliau, senyum percaya diri adalah hasil kerja yang paling bermakna."
  //     },
  //     {
  //         id: 2,
  //         name: 'drg. Brian M. Winato, Sp.KG',
  //         spesalis: 'Dokter Spesialis Konservasi Gigi',
  //         image: '/assets/dokter/dokter2.jpg',
  //         jadwal: [
  //             {
  //                 id: 1,
  //                 hari: "Senin - Jum'at",
  //                 jam: '09.00 - 12.00 | 15:00 - 20:00 WIB',
  //             },
  //             {
  //                 id: 2,
  //                 hari: 'Sabtu',
  //                 jam: '09.00 - 12.00 WIB',
  //             },
  //         ],
  //         treatment: [
  //             "Perawatan Saluran Akar Gigi",
  //             "Penambahan Gigi Estetik",
  //             "Dental Crown",
  //             "Smile Makeover",
  //             "Retreatment",
  //             "Full Mouth Rehabilitation",
  //             "Bedah Endodontik",
  //         ],
  //         pendidikan: [
  //             "Spesialis Konservasi Gigi, Universitas Sumatra Utara",
  //             "Dokter Gigi Umum, Universitas Sumatra Utara",
  //         ],
  //         description: "Dokter Brian percaya bahwa gigi sehat bukan hanya soal fungsi, tapi juga rasa percaya diri. Dikenal teliti dan sabar, ia selalu mengutamakan kenyamanan pasien serta hasil yang fungsional dan estetis. Bagi beliau, senyum percaya diri adalah hasil kerja yang paling bermakna."
  //     },
  //     {
  //         id: 3,
  //         name: 'drg. Brian M. Winato, Sp.KG',
  //         spesalis: 'Dokter Spesialis Konservasi Gigi',
  //         image: '/assets/dokter/dokter3.jpg',
  //         jadwal: [
  //             {
  //                 id: 1,
  //                 hari: "Senin - Jum'at",
  //                 jam: '09.00 - 12.00 | 15:00 - 20:00 WIB',
  //             },
  //             {
  //                 id: 2,
  //                 hari: 'Sabtu',
  //                 jam: '09.00 - 12.00 WIB',
  //             },
  //         ],
  //         treatment: [
  //             "Perawatan Saluran Akar Gigi",
  //             "Penambahan Gigi Estetik",
  //             "Dental Crown",
  //             "Smile Makeover",
  //             "Retreatment",
  //             "Full Mouth Rehabilitation",
  //             "Bedah Endodontik",
  //         ],
  //         pendidikan: [
  //             "Spesialis Konservasi Gigi, Universitas Sumatra Utara",
  //             "Dokter Gigi Umum, Universitas Sumatra Utara",
  //         ],
  //         description: "Dokter Brian percaya bahwa gigi sehat bukan hanya soal fungsi, tapi juga rasa percaya diri. Dikenal teliti dan sabar, ia selalu mengutamakan kenyamanan pasien serta hasil yang fungsional dan estetis. Bagi beliau, senyum percaya diri adalah hasil kerja yang paling bermakna."
  //     },
  // ]

  if (!_dokter) return notFound();

  const dokter = _dokter.data;

  console.log("DOKTER", dokter);

  return (
    <PageWrapper className="min-h-screen">
      <Banner
        title="Tim Dokter Profesional dan Terpercaya"
        description="BMW Dental Clinic memiliki tim dokter gigi umum dan spesialis yang berpengalaman dan berdedikasi untuk memberikan perawatan terbaik bagimu dan keluarga."
        image="/assets/images/banner-dokter.webp"
        classNameImage=" object-[50%_10%]"
      />

      <section className="px-4 py-8 md:py-20 flex justify-center">
        <div className="flex flex-col gap-20 md:gap-32 md:max-w-5xl xl:max-w-6xl">
          {dokter.map((e) => (
            <div key={e.id} className="grid gap-4 md:grid-cols-2">
              <div className="md:px-8">
                <Image
                  src={e.photoUrl ?? ''}
                  alt={e.name}
                  width={200}
                  height={200}
                  className="w-full h-[350px] md:h-[550px] object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <h3 className="text-2xl md:text-[28px] leading-8 md:leading-10 md:text-4xl font-gotham font-medium text-heading-1">
                  {e.name}
                </h3>
                <p className="md:text-lg font-semibold text-body-1">
                  {e.specialty}
                </p>
                <div className="w-full h-[2px] bg-line-color my-2" />
                <p className=" font-semibold text-body-1">Jadwal Praktik:</p>
                <ul className="">
                  {e.schedules?.map((schedule, idx: number) => (
                    <li
                      key={idx}
                      className="grid grid-cols-[50%_40%] md:grid-cols-[25%_75%] md:gap-2 text-body-1"
                    >
                      <span className="w-fit">{schedule.day}</span>
                      <span className="w-fit">{schedule.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full h-[2px] bg-line-color my-2" />
                <p className="font-semibold text-body-1">Spesialisasi Treatment:</p>
                <ul className="flex flex-wrap gap-2">
                  {e.treatments.map((exp, idx: number) => (
                    <li
                      key={idx}
                      className="py-1 px-3 rounded-full font-medium bg-blue-secondary text-white"
                    >
                      {exp}
                    </li>
                  ))}
                </ul>
                <div className="w-full h-[2px] bg-line-color my-2" />
                <p className="font-semibold text-body-1">Pendidikan:</p>
                <ul className="list-disc pl-5">
                  {e.educations.map((a, i) => (
                    <li key={i} className="text-body-1">
                      {a.degree}, {a.institution}
                    </li>
                  ))}
                </ul>
                <div className="w-full h-[2px] bg-line-color my-2" />
                <p className="text-body-1 text-justify">{e.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Cta
        title="Temui Dokter Favoritmu Hari ini"
        description="Satu klik untuk buat jadwalmu"
        image="/assets/images/cta-dokter.webp"
        classNameImage="object-[50%_80%] md:object-[50%_40%]"
      />
    </PageWrapper>
  );
}
