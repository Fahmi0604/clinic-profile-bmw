import Cta from "@/components/Cta";
import Icons from "@/components/Icon";
import { Button } from "@/components/ui/button";
import DokterSection from "@/sections/home/doctors";
import FacilitiesPage from "@/sections/home/facilities";
import FaqPage from "@/sections/home/faq";
import ServiceResultPage from "@/sections/home/serviceResults";
import ServicesPage from "@/sections/home/services";
import TestimonyPage from "@/sections/home/testimony";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col md:flex-row-reverse">
        <div className="relative overflow-hidden md:w-[100%] xl:w-[60%]">
          <Image
            src="/assets/images/banner.webp"
            alt="logo"
            width={100}
            height={100}
            className="w-full z-0 block"
          />
          <Image
            src="/assets/icons/circle.svg"
            alt="logo"
            width={100}
            height={100}
            className="z-30 absolute inset-0 object-cover w-[97%] md:w-full -mt-4 mx-auto md:-mt-8 md:ml-10"
          />
          <div className="z-20 bottom-0 md:right-0 absolute w-full -mb-1 md:mb-0 md:-ml-1 h-[50%] md:h-full bg-gradient-to-t md:bg-gradient-to-r from-blue-primary via-blue-primary/70 md:via-blue-primary/30 to-transparent" />
        </div>
        <div className="w-full md:max-w-2xl xl:max-w-3xl px-4 md:px-0 flex justify-end items-center bg-blue-primary text-white">
          {/* gotham */}
          <div className="md:w-fit">
            <h1 className="hidden md:block md:text-4xl xl:text-5xl font-bold font-gotham mb-4">Healing Your Tooth Pain, <br /> Perfecting Your Smile </h1>
            <h1 className="md:hidden text-4xl md:text-5xl font-bold font-gotham mb-4">Healing Your Tooth <br /> Pain, Perfecting <br /> Your Smile </h1>
            <p className="leading-7 mb-4 md:text-lg md:max-w-md">Dengan perawatan yang tepat dan teknologi canggih, kami siap membantu seluruh keluarga tetap nyaman dan percaya diri di tiap senyuman.</p>

            <div className="flex flex-col md:flex-row md:gap-4 mb-8">
              <Button className="w-full md:w-fit font-outfit font-semibold rounded-full bg-gold-primary text-heading-2 cursor-pointer py-6 md:py-4 px-3 mb-4 hover:bg-gold-secondary">
                <Icons name="whatsapp" className="w-6 h-6" /> Reservasi Via WhatsApp
              </Button>

              <Button className="w-full md:w-fit font-outfit font-semibold rounded-full bg-white text-heading-2 cursor-pointer py-6 md:py-4 px-3 hover:bg-gray-400">
                <Icons name="phone" className="w-6 h-6" /> <span className="md:mr-2">Hubungi Kami</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="md:flex md:justify-center bg-gray-primary px-4 py-8 md:py-12">
        <div className="w-full md:max-w-5xl xl:max-w-6xl md:flex md:justify-between">
          <h3 className="text-2xl font-gotham font-bold text-heading-2 mb-6">Klinik Gigi Terpercaya di Medan</h3>
          <div className="flex flex-col md:items-end">
            <p className="font-semibold text-body-1 mb-2">📍 <br className="md:hidden" />Jl. Burjamhal No. B4, Petisah Tengah, Kec. Medan Petisah </p>
            <Link href="/" className="underline text-body-1 cursor-pointer">Lihat di Google Maps</Link>
          </div>
        </div>
      </section>
      {/* USP (Unique Selling Point) */}
      <section className="flex justify-center px-4 py-8 md:py-20">
        <div className="md:max-w-5xl xl:max-w-6xl ">
          <h3 className="text-3xl font-gotham font-bold text-heading-1 mb-6 md:mb-10">Kenapa ke BMW Dental Clinic?</h3>
          <div className="flex flex-col gap-4 md:flex-row md:justify-around">
            <div className="w-full md:w-1/3" >
              <Image
                src="/assets/icons/tooth-whitening.svg"
                alt="logo"
                width={40}
                height={40}
                className="w-10 h-10 z-0 block mb-4"
              />
              <h4 className="text-heading-1 text-lg font-semibold">Tooth Pain and Aesthetic Center</h4>
              <p className="text-body-2 text-sm md:text-base">Keahlian multispesialis untuk atasi infeksi dan memperbaiki estetika gigi.</p>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src="/assets/icons/dentist-chair.svg"
                alt="logo"
                width={40}
                height={40}
                className="w-10 h-10 z-0 block mb-4"
              />
              <h4 className="text-heading-1 text-lg font-semibold">Advanced Technology</h4>
              <p className="text-body-2 text-sm md:text-base">Teknologi terdepan untuk perawatan lebih nyaman, minim nyeri, dan pemulihan lebih cepat.</p>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src="/assets/icons/family.svg"
                alt="logo"
                width={40}
                height={40}
                className="w-10 h-10 z-0 block mb-4"
              />
              <h4 className="text-heading-1 text-lg font-semibold">Tailored for Family Needs</h4>
              <p className="text-body-2 text-sm md:text-base">Satu klinik untuk semua generasi, dari anak-anak hingga lansia.</p>
            </div>
          </div>
        </div>
      </section>
      <DokterSection />
      <ServicesPage />
      <ServiceResultPage />
      <FacilitiesPage />
      <TestimonyPage />
      <FaqPage />
      <Cta title="Yuk Mulai Perawatanmu Hari Ini" description="Satu klik menuju senyum sehat" image="/assets/images/cta-home.webp" classNameImage="object-[50%_30%]" />
    </main>
  );
}
