import Icons from "@/components/Icon"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"


function ServicesPage() {

    const services = [
        {
            id: 1,
            title: 'Menjaga senyuman untuk semua umur',
            image: '/assets/dokter/service1.jpg',
            services: [
                { name: "Dental Spa", link: '' },
                { name: "Perawatan Saluran Akar", link: '' },
                { name: "Penambalan Gigi Estetik", link: '' },
                { name: "Dental Crown", link: '' },
                { name: "Veneer", link: '' },
                { name: "Smile Makeover", link: '' },
                { name: "Kawat Gigi (Ortodinti)", link: '' },
                { name: "Invisalign", link: '' },
                { name: "Pencabutan Gigi", link: '' },
                { name: "Odontektomi", link: '' },
            ]
        },
        {
            id: 2,
            title: 'Untuk lansia yang butuh perhatian ekstra',
            image: '/assets/dokter/service2.jpg',
            services: [
                { name: "Dental Implant", link: '' },
                { name: "Dental Bridge", link: '' },
                { name: "Gigi Tiruan Lepasan", link: '' },
                { name: "Perawatan Sakit Sendi Rahang", link: '' },
                { name: "Full Mouth Rehabilitation", link: '' },
            ]
        },
        {
            id: 3,
            title: 'Perawatan gigi anak, aman & nyaman',
            image: '/assets/dokter/service3.jpg',
            services: [
                { name: "Perawatan Fluoride", link: '' },
                { name: "Pit and Fissure Sealant", link: '' },
                { name: "Scaling Anak", link: '' },
                { name: "Penambalan Gigi Anak", link: '' },
                { name: "Perawatan Saluran Akar Anak", link: '' },
                { name: "Dental Crown Anak", link: '' },
                { name: "Pencabutan Gigi Anak", link: '' },
                { name: "Space Maintainer", link: '' },
                { name: "Kawat Gigi Anak", link: '' },
            ]
        },
    ]

    return (
        <section className="px-4 flex justify-center py-8 md:py-20">
            <div className='md:max-w-5xl xl:max-w-6xl'>
                <h3 className="text-2xl md:text-3xl font-gotham font-bold text-heading-1 mb-6 md:mb-10">Layanan Lengkap untuk Seluruh Keluarga</h3>

                <div className='w-full flex flex-col md:flex-row justify-around items-stretch gap-5 md:gap-0'>
                    {services.map((e) => (
                        <div key={e.id} className="w-full flex flex-col md:w-[31%] shadow shadow-line-color rounded-xl ">
                            <div className='relative h-[450px] overflow-hidden'>
                                <Image
                                    src={e.image}
                                    alt={e.title}
                                    width={200}
                                    height={200}
                                    className='w-full object-cover object-center rounded-xl'
                                />
                                <div className='w-full absolute bottom-0'>
                                    <div className="z-20 w-full h-28 bg-gradient-to-t from-blue-primary to-transparent" />
                                    <div className='w-full p-6 bg-blue-primary text-white'>
                                        <h4 className='text-[22px] font-semibold font-gotham'>{e.title}</h4>
                                    </div>
                                    <div className="z-20 w-full h-4 bg-gradient-to-b from-gold-primary to-white" />
                                </div>
                            </div>
                            <div className="bg-white flex flex-col">
                                {e.services.map((f, i) => (
                                    <Link key={f.name} href={f.link} className={cn("w-full text-body-1 text-lg p-4 border-b border-line-color flex justify-between", i === (e?.services.length - 1) && "rounded-xl")}>
                                        {f.name}
                                        <Icons name="chevron" className="text-body-1" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full flex justify-center mt-8'>
                    <Button className="w-full md:w-fit font-outfit font-semibold rounded-full bg-gold-primary text-heading-2 cursor-pointer py-6 md:py-4 px-3 hover:bg-gold-secondary">
                        <Icons name="whatsapp" className="w-6 h-6" /> Konsultasi Sekarang
                    </Button>
                </div>

            </div>
        </section>
    )
}

export default ServicesPage