import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

type BannerProps = {
    title: string | React.ReactNode
    description: string;
    image: string;
    classNameImage?: string;
}

export function Banner(props: BannerProps) {
    const { title, description, image, classNameImage } = props;
    return (
        <section className="flex flex-col md:flex-row-reverse">
            <div className="relative overflow-hidden h-[325px] md:h-[80vh]">
                <Image
                    src={image}
                    alt="logo"
                    width={100}
                    height={100}
                    className={cn("w-full h-full md:w-[60vw] md:h-full object-cover z-0 block", classNameImage)}
                />
                <div className="z-20 bottom-0 md:left-0 absolute w-full md:w-1/2 -mb-1 md:mb-0 md:-ml-1 h-[50%] md:h-full bg-gradient-to-t md:bg-gradient-to-r from-blue-primary via-blue-primary/70 md:via-blue-primary/30 to-transparent" />
            </div>
            <div className="w-full md:w-[65vw] px-4 md:px-0 flex justify-end items-center bg-blue-primary text-white">
                {/* gotham */}
                <div className="md:w-fit">
                    <h1 className="text-4xl xl:text-5xl md:max-w-lg xl:max-w-xl font-bold font-gotham mb-4">{title}</h1>
                    {/* <h1 className="md:hidden text-4xl md:text-5xl font-bold font-gotham mb-4">Tim Dokter <br /> Profesional dan <br /> Terpercaya</h1> */}
                    <p className="leading-7 mb-10 md:mb-4 md:text-lg md:max-w-lg">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default Banner