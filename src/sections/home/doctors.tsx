import Icons from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { getDoctors } from "@/lib/api";
import { whatsappLink } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DoctorsSection({ settings }: { settings: Setting }) {
  const _dokter = await getDoctors();
  // const dokter = [
  //     {
  //         id: 1,
  //         name: 'drg. Brian M. Winato, Sp.KG',
  //         spesalis: 'Dokter Spesialis Konservasi Gigi',
  //         image: '/assets/dokter/dokter1.jpg',
  //     },
  //     {
  //         id: 2,
  //         name: 'drg. Brian M. Winato, Sp.KG',
  //         spesalis: 'Dokter Spesialis Konservasi Gigi',
  //         image: '/assets/dokter/dokter2.jpg',
  //     },
  //     {
  //         id: 3,
  //         name: 'drg. Brian M. Winato, Sp.KG',
  //         spesalis: 'Dokter Spesialis Konservasi Gigi',
  //         image: '/assets/dokter/dokter3.jpg',
  //     },
  // ]
  if (!_dokter) return notFound();
  const dokter = _dokter.data;

  console.log("DOKTER", dokter);
  return (
    <section className="flex justify-center px-4 py-8 md:py-20 bg-gradient-to-t from-gray-primary to-white">
      <div className="md:max-w-5xl xl:max-w-6xl">
        <h3 className="text-3xl font-gotham font-bold text-heading-1 mb-6 md:mb-10">
          Tim Dokter Profesional dan Tepercaya
        </h3>

        <div className="w-full flex flex-col md:flex-row justify-around items-center gap-5 md:gap-0">
          {dokter.map((e) => (
            <div
              key={e.id}
              className="relative w-full md:w-[31%] h-[400px] md:h-[50vh] xl:h-[60vh] rounded-xl overflow-hidden flex items-center justify-center shadow"
            >
              <Image
                src={e.photoUrl ?? ''}
                alt={e.name}
                width={200}
                height={200}
                className="w-full object-cover rounded-xl"
              />
              <div className="w-full absolute bottom-0">
                <div className="z-20 w-full h-28 bg-gradient-to-t from-blue-primary to-transparent" />
                <div className="w-full p-6 bg-blue-primary text-white ">
                  <h4 className="text-lg md:text-[22px] font-semibold font-gotham">
                    {e.name}
                  </h4>
                  <p className="text-lg">{e.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center mt-8">
          <div className="w-full flex flex-col md:flex-row md:justify-center gap-4">
            <Link href={"/dokter"}>
              <Button className="w-full md:w-fit font-outfit font-semibold rounded-full bg-white text-heading-2 cursor-pointer py-6 md:py-4 px-3 hover:bg-gray-400">
                Baca Profil Lengkap
              </Button>
            </Link>

            <Link href={whatsappLink(settings.socials.whatsapp ?? '')}>
              <Button className="w-full md:w-fit font-outfit font-semibold rounded-full bg-gold-primary text-heading-2 cursor-pointer py-6 md:py-4 px-3 hover:bg-gold-secondary">
                <Icons name="whatsapp" className="w-6 h-6" /> Buat janji dokter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
