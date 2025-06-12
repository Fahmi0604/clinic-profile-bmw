import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

export default function FaqPage() {

    const faqs = [
        {
            id: 1,
            title: "Berapa biaya perawatan di BMW Dental Clinic?",
            description: 'Dokter gigi perlu melakukan pemeriksaan secara lengkap terlebih dulu untuk dapat memperkirakan estimasi biaya perawatan sesuai kondisimu. Jadwalkan janji temu untuk mulai konsultasi di BMW Dental Clinic.',
        },
        {
            id: 2,
            title: "Apakah BMW Dental Clinic menerima pasien BPJS atau asuransi?",
            description: 'Untuk saat ini BMW Dental Clinic belum bekerjasama dengan BPJS ataupun asuransi swasta. Namun kamu dapat menggunakan metode asuransi berupa reimbursement dan kami akan dengan senang hati membantu kebutuhanmu. ',
        }
    ]

    return (
        <section className='hidden px-4 md:flex md:justify-center py-8 md:py-20'>
            <div className='w-full md:max-w-5xl xl:max-w-6xl'>
                <h3 className="text-3xl font-gotham font-bold text-heading-1 mb-2 md:mb-6 ">Pertanyaan yang sering ditanyakan</h3>
                <div className='h-[2px] bg-line-color mb-6 md:mb-10' />

                <Accordion
                    type='multiple'
                    // collapsible
                    className='w-full'
                >
                    {faqs.map((e, i) => (
                        <AccordionItem key={i} className='mt-2 border-b-2' value={`item-${i}`}>
                            <AccordionTrigger className='text-lg text-body-1 font-bold'>{e.title}</AccordionTrigger>
                            <AccordionContent className='text-body-1 max-w-4xl' >{e.description}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
