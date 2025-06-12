import Icons from '@/components/Icon'
import Image from 'next/image'
import React from 'react'

export default function TestimonyPage() {

    const testimony = [
        {
            id: 1,
            name: 'Faisal P',
            image: '/assets/images/testimony1.webp',
            description: 'Pengalaman yang luar biasa! Dr. Bryan sangat lembut, penuh perhatian, dan teliti dalam menjelaskan penilaian dan rencana perawatan kondisi saya. Ia menghilangkan trauma saya selama bertahun-tahun karena pergi ke dokter gigi! Luar biasa, tidak ada dokter gigi yang lebih baik darinya!',
        },
        {
            id: 2,
            name: 'Hillary Eunice Ang',
            image: '/assets/images/testimony2.webp',
            description: 'Yang takut ketika ke dr gigi, don’t worry, di BMW dental clinic ini tidak ada rasa sakit waktu cabut gigi, dokter juga sabar, ramah, tempatnya nyaman dan yang penting murah, pokoknya best deh 😀',
        },
        {
            id: 3,
            name: 'Palacheta Subianto',
            image: '/assets/images/testimony3.webp',
            description: 'Dokter sangat cermat mengamati pasiennya. Hebat dalam menangani anak-anak. Tempat yang bersih. Profesional. Tim yang hebat. Atas. Direkomendasikan. Terima kasih dok!',
        },
        {
            id: 4,
            name: 'Steffy Suzani M.G',
            image: '/assets/images/testimony4.webp',
            description: 'Terimakasih atas pelayanannya Dokter Brian dan   Seluruh Tim. Keluhan gigi saya dapat teratasi dengan cepat dan baik. Tempatnya juga nyaman dan petugasnya fast response. Sukses selalu BMW Dental Care.',
        },
        {
            id: 5,
            name: 'Charlie Ang',
            image: '/assets/images/testimony5.webp',
            description: 'Seumur hidupku baru pernah jumpa dokter yang sangat sabar dan ramah dlm menangani pasien tentunya juga dengan biaya yang murah tapi nga murahan. Bestt & recommended dentist in Medan !!!',
        },
        {
            id: 6,
            name: 'Bunda DtrioZ',
            image: '/assets/images/testimony6.webp',
            description: `“Klinik perawatan gigi yg rekomended.. Pelayananny ramah dan terjadwal, fasilitasny baik n lengkap, kwalitas dokter luar biasa, nyaman utk konsultasi, harga setiap tindakan beragam, n worthit dgn hasil yg drsakan pasien 👍👍👍👍”`,
        }
    ]

    return (
        <section className='px-4 flex justify-center py-8 md:py-20'>
            <div className='md:max-w-5xl xl:max-w-6xl'>
                <h3 className="text-2xl md:text-3xl font-gotham font-bold text-heading-1 mb-2 md:mb-4 ">Dipercaya oleh Ribuan Pasien di Medan</h3>
                <p className='text-lg text-body-1 mb-6 md:mb-10'>Apa kata mereka...</p>

                <div className='w-full flex flex-wrap flex-col md:flex-row justify-center gap-6 md:gap-8 xl:gap-10'>
                    {testimony.map((e) => (
                        <div key={e.id} className='w-full md:w-[31%] flex flex-col justify-between border border-line-color p-6 rounded-2xl'>
                            <div className='mb-8'>
                                <div className='flex'>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Icons key={index} name="star" className="w-6 h-6 text-gold-primary" />
                                    ))}
                                </div>
                                <p className='text-sm text-body-2 mt-4'>{e.description}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Image
                                    src={e.image}
                                    alt={e.name}
                                    width={200}
                                    height={200}
                                    className='w-8 h-8 object-cover rounded-xl'
                                />
                                <h4 className='text-lg font-bold '>{e.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
