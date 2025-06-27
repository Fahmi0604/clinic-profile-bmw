import Icons from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/api";
import { cn, whatsappLink } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function ServicesPage({ settings }: { settings: Setting }) {
  const _services = await getServices();
  // const services = [
  //     {
  //         id: 1,
  //         title: 'Menjaga senyuman untuk semua umur',
  //         image: '/assets/dokter/service1.jpg',
  //         services: [
  //             { name: "Dental Spa", link: '' },
  //             { name: "Perawatan Saluran Akar", link: '' },
  //             { name: "Penambalan Gigi Estetik", link: '' },
  //             { name: "Dental Crown", link: '' },
  //             { name: "Veneer", link: '' },
  //             { name: "Smile Makeover", link: '' },
  //             { name: "Kawat Gigi (Ortodinti)", link: '' },
  //             { name: "Invisalign", link: '' },
  //             { name: "Pencabutan Gigi", link: '' },
  //             { name: "Odontektomi", link: '' },
  //         ]
  //     },
  //     {
  //         id: 2,
  //         title: 'Untuk lansia yang butuh perhatian ekstra',
  //         image: '/assets/dokter/service2.jpg',
  //         services: [
  //             { name: "Dental Implant", link: '' },
  //             { name: "Dental Bridge", link: '' },
  //             { name: "Gigi Tiruan Lepasan", link: '' },
  //             { name: "Perawatan Sakit Sendi Rahang", link: '' },
  //             { name: "Full Mouth Rehabilitation", link: '' },
  //         ]
  //     },
  //     {
  //         id: 3,
  //         title: 'Perawatan gigi anak, aman & nyaman',
  //         image: '/assets/dokter/service3.jpg',
  //         services: [
  //             { name: "Perawatan Fluoride", link: '' },
  //             { name: "Pit and Fissure Sealant", link: '' },
  //             { name: "Scaling Anak", link: '' },
  //             { name: "Penambalan Gigi Anak", link: '' },
  //             { name: "Perawatan Saluran Akar Anak", link: '' },
  //             { name: "Dental Crown Anak", link: '' },
  //             { name: "Pencabutan Gigi Anak", link: '' },
  //             { name: "Space Maintainer", link: '' },
  //             { name: "Kawat Gigi Anak", link: '' },
  //         ]
  //     },
  // ]
  if (!_services) return notFound();
  const services = _services.data;

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


  console.log("SERVICES", services);
  return (
    <section className="px-4 flex justify-center py-8 md:py-20">
      <div className="md:max-w-5xl xl:max-w-6xl">
        <h3 className="text-2xl md:text-3xl font-gotham font-bold text-heading-1 mb-6 md:mb-10">
          Layanan Lengkap untuk Seluruh Keluarga
        </h3>

        <div className="w-full flex flex-col md:flex-row justify-around items-stretch gap-5 md:gap-0">
          <div className="w-full flex flex-col md:w-[31%] shadow shadow-line-color rounded-xl ">
            <div className="relative h-[450px] overflow-hidden">
              <Image
                src={'assets/images/service1.webp'}
                alt={'thumbnail'}
                width={200}
                height={200}
                className="w-full object-cover object-center rounded-xl"
              />
              <div className="w-full absolute bottom-0">
                <div className="z-20 w-full h-28 bg-gradient-to-t from-blue-primary to-transparent" />
                <div className="w-full p-6 bg-blue-primary text-white">
                  <h4 className="text-[22px] font-semibold font-gotham">
                    Menjaga senyuman untuk semua umur
                  </h4>
                </div>
                <div className="z-20 w-full h-4 bg-gradient-to-b from-gold-primary to-white" />
              </div>
            </div>
            <div className="bg-white flex flex-col">
              {datas.umum?.map((e, i) => (
                <Link
                  key={e.id}
                  href={`layanan/${e.slug}`}
                  className={cn(
                    "w-full text-body-1 text-lg p-4 border-b border-line-color flex justify-between",
                    i === e?.name.length - 1 && "rounded-xl"
                  )}
                >
                  {e.name}
                  <Icons name="chevron" className="text-body-1" />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col md:w-[31%] shadow shadow-line-color rounded-xl ">
            <div className="relative h-[450px] overflow-hidden">
              <Image
                src={'assets/images/service2.webp'}
                alt={'thumbnail 2'}
                width={200}
                height={200}
                className="w-full object-cover object-center rounded-xl"
              />
              <div className="w-full absolute bottom-0">
                <div className="z-20 w-full h-28 bg-gradient-to-t from-blue-primary to-transparent" />
                <div className="w-full p-6 bg-blue-primary text-white">
                  <h4 className="text-[22px] font-semibold font-gotham">
                    Untuk lansia yang butuh perhatian ekstra
                  </h4>
                </div>
                <div className="z-20 w-full h-4 bg-gradient-to-b from-gold-primary to-white" />
              </div>
            </div>
            <div className="bg-white flex flex-col">
              {datas.lansia?.map((e, i) => (
                <Link
                  key={e.id}
                  href={`layanan/${e.slug}`}
                  className={cn(
                    "w-full text-body-1 text-lg p-4 border-b border-line-color flex justify-between",
                    i === e?.name.length - 1 && "rounded-xl"
                  )}
                >
                  {e.name}
                  <Icons name="chevron" className="text-body-1" />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col md:w-[31%] shadow shadow-line-color rounded-xl ">
            <div className="relative h-[450px] overflow-hidden">
              <Image
                src={'assets/images/service3.webp'}
                alt={'thumbnail 3'}
                width={200}
                height={200}
                className="w-full object-cover object-center rounded-xl"
              />
              <div className="w-full absolute bottom-0">
                <div className="z-20 w-full h-28 bg-gradient-to-t from-blue-primary to-transparent" />
                <div className="w-full p-6 bg-blue-primary text-white">
                  <h4 className="text-[22px] font-semibold font-gotham">
                    Perawatan gigi anak, aman & nyaman
                  </h4>
                </div>
                <div className="z-20 w-full h-4 bg-gradient-to-b from-gold-primary to-white" />
              </div>
            </div>
            <div className="bg-white flex flex-col">
              {datas.anak?.map((e, i) => (
                <Link
                  key={e.id}
                  href={`layanan/${e.slug}`}
                  className={cn(
                    "w-full text-body-1 text-lg p-4 border-b border-line-color flex justify-between",
                    i === e?.name.length - 1 && "rounded-xl"
                  )}
                >
                  {e.name}
                  <Icons name="chevron" className="text-body-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-8">
          <Link href={whatsappLink(settings.socials.whatsapp ?? '')}>
            <Button className="w-full md:w-fit font-outfit font-semibold rounded-full bg-gold-primary text-heading-2 cursor-pointer py-6 md:py-4 px-3 hover:bg-gold-secondary">
              <Icons name="whatsapp" className="w-6 h-6" /> Konsultasi Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
