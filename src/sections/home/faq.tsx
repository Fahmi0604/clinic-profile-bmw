import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

export default function FaqPage() {

    const faqs = [
        {
            id: 1,
            title: "Apakah saya perlu membuat janji terlebih dahulu?",
            description: "Kami menyarankan untuk membuat janji untuk memastikan ketersediaan jadwal. Janji bisa dilakukan melalui WhatsApp, telepon, atau formulir online. Pasien juga bisa datang tanpa janji (walk-in) jika slot tersedia.",
        },
        {
            id: 2,
            title: "Berapa lama durasi satu kali perawatan atau pemeriksaan?",
            description: "Durasi perawatan sangat bergantung pada jenis tindakan yang dilakukan. Pemeriksaan dan pembersihan karang gigi biasanya memakan waktu 30–45 menit. Perawatan seperti behel atau saluran akar bisa memakan waktu lebih lama tergantung kasusnya.",
        },
        {
            id: 3,
            title: "Seberapa sering saya perlu melakukan pemeriksaan gigi?",
            description: "Kami menyarankan pemeriksaan rutin setiap 6 bulan sekali. Namun, frekuensinya dapat disesuaikan berdasarkan kondisi masing-masing pasien.",
        },
        {
            id: 4,
            title: "Apakah saya bisa membuat janji darurat?",
            description: "Ya, kami akan berusaha semaksimal mungkin untuk menangani kondisi darurat. Namun, penjadwalan janji darurat tetap bergantung pada ketersediaan dokter dan slot waktu yang tersedia. Kami menyarankan untuk segera menghubungi klinik untuk mendapatkan kepastian waktu penanganan.",
        },
        {
            id: 5,
            title: "Saya merasa takut saat menjalani perawatan gigi. Apakah BMW Dental Care dapat membantu?",
            description: "Kami paham bahwa sebagian pasien merasa tidak nyaman atau cemas saat menjalani perawatan gigi. Tim kami berpengalaman dalam menangani kecemasan pasien dan akan berupaya menciptakan suasana yang tenang, nyaman, dan suportif.",
        },
        {
            id: 6,
            title: "Apakah pemutihan gigi (bleaching) cocok untuk saya?",
            description: "Bleaching gigi bisa menjadi pilihan perawatan Smile Makeover, tetapi tidak cocok untuk semua orang, terutama jika memiliki gigi sensitif. Dokter gigi akan melakukan evaluasi terlebih dahulu sebelum merekomendasikan perawatan yang paling tepat.",
        },
        {
            id: 7,
            title: "Apakah saya masih bisa merapikan gigi di usia dewasa?",
            description: "Tentu bisa. Perawatan ortodonti seperti behel dan aligner tidak terbatas pada usia muda. Dokter gigi kami akan menjelaskan pilihan yang paling sesuai dengan kebutuhanmu.",
        },
        {
            id: 8,
            title: "Saya diberitahu perlu tambalan, padahal saya tidak merasakan masalah apapun?",
            description: "Tambalan diperlukan untuk menutup lubang kecil pada gigi. Jika tidak ditangani, kerusakan bisa bertambah parah dan menyebabkan sakit, bahkan membutuhkan perawatan saluran akar yang lebih mahal. Meskipun belum terasa sakit, sebaiknya segera diperbaiki.",
        },
    ];


    return (
        <section className='hidden px-4 md:flex md:justify-center py-8 md:py-20'>
            <div className='w-full md:max-w-5xl xl:max-w-6xl'>
                <h3 className="text-3xl font-gotham font-medium text-heading-1 mb-2 md:mb-6 ">Pertanyaan yang sering ditanyakan</h3>
                <div className='h-[2px] bg-line-color mb-6 md:mb-10' />

                <Accordion
                    type='multiple'
                    // collapsible
                    className='w-full'
                >
                    {faqs.map((e, i) => (
                        <AccordionItem key={i} className='mt-2 border-b-2' value={`item-${i}`}>
                            <AccordionTrigger className='text-lg text-body-1 font-medium'>{e.title}</AccordionTrigger>
                            <AccordionContent className='text-body-1 max-w-4xl' >{e.description}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
