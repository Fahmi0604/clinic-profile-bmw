import { Label } from './ui/label'
import Link from 'next/link'
import Icons from './Icon'
import Image from 'next/image'

export default async function Footer({ settings }: { settings: Setting }) {

    const menuItems = [
        {
            label: "Dokter",
            href: "/dokter",
        },
        {
            label: "Layanan",
            href: "/layanan",
        },
        {
            label: "Fasilitas",
            href: "/fasilitas",
        },
        {
            label: "Blog",
            href: "/blogs",
        }
    ]

    return (
        <footer className="w-full bg-footer px-[10%] py-20 md:py-10">
            <div className='flex flex-col md:flex-row mb-14'>
                <div className='w-[90%] flex flex-col mb-6 md:mb-0 gap-6 justify-between'>
                    <Link href="/" className="flex">
                        <Image src="/logo.svg" alt="logo" width={24} height={24} className="text-white w-36" />
                        <span className="sr-only">logo</span>
                    </Link>
                    <div className="grid md:grid-cols-4 md:max-w-[70%] text-white font-outfit text-lg font-bold py-4">
                        {menuItems.map((e) => (
                            <Link
                                key={e.label}
                                href={e.href}
                                className="underline py-4 sm:py-3"
                            >
                                {e.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-14 md:gap-6'>
                    <div className='flex flex-col gap-4 text-white font-outfit md:px-[10%]'>
                        <Label className='text-lg font-bold'>Hubungi Kami:</Label>
                        <div className='flex items-center gap-x-2'><Icons name="phone" className='w-6 h-6 text-white' />{settings.contactInfo?.phone ?? ''}</div>
                        <div className='flex items-center gap-x-2'><Icons name='whatsapp' className='w-6 h-6 text-white' />{settings.socials?.whatsapp ?? ''}</div>
                        <div className='flex items-center gap-x-2'><Icons name='instagram' className='w-6 h-6 text-white' />{settings.socials?.instagram ?? ''}</div>
                    </div>
                    <div className='grid gap-4 text-white font-outfit'>
                        <Label className='text-lg font-bold'>Lokasi Klinik:</Label>
                        <p>{settings.contactInfo?.address ?? `Jl. Burjamhal No.B4
                            Petisah Tengah, Kec. Medan Petisah
                            Kota Medan, Sumatera Utara 20112`}</p>

                        <Link href={settings?.mapUrl ?? 'https://maps.app.goo.gl/ZBsTVozJhT83xfez7'}>
                            <u className='cursor-pointer'>Lihat di Google Maps</u>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="flex justify-between">
                <div className='flex text-xs gap-1 items-center text-white'>
                    <Copyright className="h-4 w-4 " /> All rights reserved
                </div>
                <div className='flex gap-4 items-center'>
                    <Facebook className="h-5 w-5 text-white" />
                    <Instagram className="h-5 w-5 text-white" />
                    <Youtube className="h-6 w-6 text-white" />
                    <Linkedin className="h-5 w-5 text-white" />
                </div>
            </div> */}
        </footer>
    )
}