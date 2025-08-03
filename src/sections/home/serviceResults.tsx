import { BeforeAfter } from "@/components"
import Icons from "@/components/Icon"
import { Button } from "@/components/ui/button"
import Link from "next/link"


function ServiceResultPage({ settings }: { settings: Setting }) {

    const services = [
        {
            id: 1,
            title: "Perawatan Saluran Akar",
            description: "Membersihkan dan menutup saluran akar gigi yang terinfeksi",
            labelBefore: "Sebelum",
            labelAfter: "Sesudah",
            imageBefore: '/assets/images/before1.webp',
            imageAfter: '/assets/images/after1.webp',
            className: "object-contain md:object-cover"

            // className: 'object-right-bottom md:object-bottom'
        },
        {
            id: 2,
            title: "Tooth Filiing",
            description: "Menambal gigi yang berlubang agar kembali sehat, berfungsi, dan tampak alami.",
            labelBefore: "Sebelum",
            labelAfter: "Sesudah",
            imageBefore: '/assets/images/before2.webp',
            imageAfter: '/assets/images/after2.webp',
            className: "object-contain md:object-cover"
            // className: 'object-top'
        },
        {
            id: 3,
            title: "Smile Makeover",
            description: "Transformasi senyuman ideal sesuai bentuk wajahmu didukung oleh teknologi digital dentistry.",
            labelBefore: "Sebelum",
            labelAfter: "Sesudah",
            imageBefore: '/assets/images/before3.webp',
            imageAfter: '/assets/images/after3.webp',
            className: "object-contain md:object-cover"
            // className: 'object-center'
        },
    ]

    return (
        <section className="px-4 flex justify-center py-8 md:py-20">
            <div className='md:max-w-5xl xl:max-w-6xl'>
                <h3 className="text-2xl md:text-3xl font-gotham font-medium text-heading-1 mb-6 md:mb-10">Transformasi Senyuman dengan Perawatan Kami</h3>

                <div className='w-full flex flex-col gap-10 md:gap-5'>
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col md:flex-row justify-between">
                            <div className="md:w-[65%] mb-4 md:mb-0">
                                <BeforeAfter label={{ before: service.labelBefore, after: service.labelAfter }} image={{ before: { src: service.imageBefore }, after: { src: service.imageAfter } }} className={{ after: service.className, before: service.className }} />
                            </div>
                            <div className="md:w-[30%]">
                                <h4 className='text-[22px] font-medium font-gotham'>{service.title}</h4>
                                <p className="text-body-2">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full flex justify-center mt-8'>
                    <Link href={settings.link_whatsapp ?? ''}>
                        <Button className="w-full md:w-fit font-outfit font-medium rounded-full bg-gold-primary text-heading-2 cursor-pointer py-6 md:py-4 px-3 hover:bg-gold-secondary">
                            <Icons name="whatsapp" className="w-6 h-6" /> Reservasi Sekarang
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ServiceResultPage