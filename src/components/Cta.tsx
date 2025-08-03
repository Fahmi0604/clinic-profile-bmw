import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import Icons from './Icon';
import { cn } from '@/lib/utils';
import { getSettings } from '@/lib/api';
import Link from 'next/link';

type CtaProps = {
    title: string | React.ReactNode
    description: string;
    image: string;
    classNameImage?: string;
    buttonLabel?: string;
    url?: string;
}

async function Cta(props: CtaProps) {
    const { title, description, image, classNameImage, buttonLabel, url } = props;

    const settings = await getSettings()

    return (
        <section className="md:h-[400px] flex flex-col md:flex-row-reverse">
            <div className="relative">
                <Image
                    src={image}
                    alt="cta"
                    width={100}
                    height={100}
                    className={cn("w-full h-[400px] md:h-full object-cover md:w-[60vw] z-0 block", classNameImage)}
                />
                <div className="z-20 bottom-0 md:right-0 absolute w-full -mb-1 md:mb-0 md:-ml-1 h-[50%] md:h-full bg-gradient-to-t md:bg-gradient-to-r from-gold-primary via-gold-primary/70 md:via-gold-primary/30 to-transparent" />
            </div>
            <div className="w-full md:w-[65vw] px-4 md:px-0 flex justify-end items-center bg-gold-primary text-heading-1">
                {/* gotham */}
                <div className="md:w-fit md:min-w-xl">
                    {/* <h1 className="hidden md:block text-5xl font-bold font-gotham mb-4">Healing to Your Tooth Pain, <br /> Perfecting Your Smile </h1> */}
                    <h2 className="text-xl text-[28px] md:text-3xl md:text-[31px] xl:text-4xl xl:text-[35px] md:max-w-lg xl:max-w-xl font-medium font-gotham mb-2 md:mb-4">{title}</h2>
                    <p className="leading-7 mb-6 md:mb-12 md:text-lg md:max-w-md">{description}</p>

                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <Link href={url || settings.data.link_whatsapp || ''}>
                            <Button className="w-full md:w-fit font-outfit font-medium rounded-full bg-white text-heading-2 cursor-pointer py-6 md:py-4 px-3 mb-4 hover:bg-gray-400">
                                <Icons name="whatsapp" className="w-6 h-6" /> {buttonLabel || "Reservasi Via WhatsApp"}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta