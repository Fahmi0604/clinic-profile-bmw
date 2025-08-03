import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import { FadeInFadeOut, SlideIn } from './Animation';

type BannerProps = {
    title: string | React.ReactNode;
    description: string;
    image: string;
    classNameImage?: string;
    bottomSlot?: React.ReactNode;
    imageDecoration?: React.ReactNode;
}

export function Banner(props: BannerProps) {
    const { title, description, image, classNameImage, bottomSlot, imageDecoration } = props;
    return (
        <section className="flex flex-col md:flex-row-reverse">
            <div className="relative overflow-hidden h-[325px] md:h-[80vh]">
                <Image
                    src={image}
                    alt="banner"
                    width={100}
                    height={100}
                    priority={true}
                    className={cn("w-full h-full md:w-[60vw] md:h-full object-cover z-0 block", classNameImage)}
                />
                {imageDecoration}
                <div className="z-20 bottom-0 md:left-0 absolute w-full md:w-1/2 -mb-1 md:mb-0 md:-ml-1 h-[50%] md:h-full bg-gradient-to-t md:bg-gradient-to-r from-blue-primary via-blue-primary/70 md:via-blue-primary/30 to-transparent" />
            </div>
            <div className="w-full md:max-w-5xl xl:max-w-6xl md:w-[65vw] px-4 md:px-0 flex justify-end items-center bg-blue-primary text-white">
                {/* gotham */}
                <div className="md:w-fit md:hidden">
                    <FadeInFadeOut delay={0.3} duration={1.2}>
                        <h1 className="text-4xl xl:text-5xl md:max-w-lg xl:max-w-2xl font-medium font-gotham mb-4">{title}</h1>
                    </FadeInFadeOut>
                    <SlideIn from="top" delay={0.5} duration={1.3}>
                        <p className="leading-7 mb-10 md:mb-4 md:text-lg md:max-w-lg">{description}</p>
                    </SlideIn>

                    {bottomSlot}
                </div>
            </div>
            <div className='hidden md:flex w-full absolute justify-center items-center h-[325px] md:h-[80vh]'>
                <div className="w-full md:max-w-5xl xl:max-w-6xl px-4 md:px-0 flex items-center text-white">
                    {/* gotham */}
                    <div className="md:w-fit">
                        <FadeInFadeOut delay={0.3} duration={1.2}>
                            <h1 className="text-4xl xl:text-5xl md:max-w-lg xl:max-w-[625px] font-medium font-gotham mb-6 -mr-10">{title}</h1>
                        </FadeInFadeOut>
                        {/* <h1 className="md:hidden text-4xl md:text-5xl font-bold font-gotham mb-4">Tim Dokter <br /> Profesional dan <br /> Terpercaya</h1> */}
                        <SlideIn from="top" delay={0.5} duration={1.3}>
                            <p className="leading-7 mb-10 md:mb-16 md:text-lg md:max-w-lg">{description}</p>
                        </SlideIn>

                        {bottomSlot}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner