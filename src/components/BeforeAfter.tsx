import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { HTMLAttributes } from 'react'

type BeforeAfterProps = {
    label: {
        before: string,
        after: string,
    },
    image: {
        before: Image,
        after: Image,
    },
    className?: {
        before?: HTMLAttributes<HTMLElement>['className']
        after?: HTMLAttributes<HTMLElement>['className'],
    }
    layout?: 'COL' | 'ROW'
}

type Image = {
    src: string,
    alt?: string,
    title?: string,
}

export function BeforeAfter(props: BeforeAfterProps) {
    const { label, image, className, layout = 'COL' } = props
    const { before: beforeClassName = "", after: afterClassName = "" } = className ?? {}

    return (
        // <div className='w-full flex flex-col md:flex-row rounded-2xl overflow-hidden'>
        //     <div className='w-full md:w-1/2 relative h-[250px] md:h-[300px]'>
        //         <Image src={image.before.src} alt={image.before.alt ?? ""} title={image.before.title ?? ""} className={cn('w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl ', beforeClassName)} width={100} height={100} />
        //         <div className='absolute top-0 left-0 rounded-tl-2xl rounded-br-2xl bg-blue-primary text-lg text-white font-bold px-4 py-2'>{label.before}</div>
        //     </div>
        //     <div className='w-full md:w-1/2 relative h-[250px] md:h-[300px]'>
        //         <Image src={image.after.src} alt={image.after.alt ?? ""} title={image.after.title ?? ""} className={cn('w-full h-full object-cover rounded-b-2xl md:rounded-b-none md:rounded-r-2xl aspect-square', afterClassName)} width={100} height={100} />
        //         <div className='absolute top-0 right-0 md:rounded-tr-2xl rounded-bl-2xl bg-gold-primary text-lg font-bold px-4 py-2 text-body-1'>{label.after}</div>
        //     </div>
        // </div>
        <>
            {layout === 'COL' ? (
                <div className='w-full flex flex-col md:flex-row rounded-2xl overflow-hidden'>
                    {/* <div className='w-full md:w-1/2 relative h-[250px] md:h-[300px]'> */}
                    <div className='w-full md:w-1/2 relative h-full md:h-[300px]'>
                        <Image src={image.before.src} alt={image.before.alt ?? ""} title={image.before.title ?? ""} className={cn('w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl ', beforeClassName)} width={100} height={100} />
                        <div className='absolute top-0 left-0 rounded-tl-2xl rounded-br-2xl bg-blue-primary text-lg text-white font-medium px-4 py-2'>{label.before}</div>
                    </div>
                    <div className='w-full md:w-1/2 relative h-full md:h-[300px]'>
                        <Image src={image.after.src} alt={image.after.alt ?? ""} title={image.after.title ?? ""} className={cn('w-full h-full object-cover rounded-b-2xl md:rounded-b-none md:rounded-r-2xl', afterClassName)} width={100} height={100} />
                        <div className='absolute top-0 right-0 md:rounded-tr-2xl rounded-bl-2xl bg-gold-primary text-lg font-medium px-4 py-2 text-body-1'>{label.after}</div>
                    </div>
                </div>
            ) : (
                <div className='w-full flex flex-col rounded-2xl overflow-hidden'>
                    <div className='w-full relative h-full'>
                        <Image src={image.before.src} alt={image.before.alt ?? ""} title={image.before.title ?? ""} className={cn('w-full h-full object-cover rounded-t-2xl ', beforeClassName)} width={100} height={100} />
                        <div className='absolute top-0 left-0 rounded-tl-2xl rounded-br-2xl bg-blue-primary text-lg text-white font-medium px-4 py-2'>{label.before}</div>
                    </div>
                    <div className='w-full relative h-full'>
                        <Image src={image.after.src} alt={image.after.alt ?? ""} title={image.after.title ?? ""} className={cn('w-full h-full object-cover rounded-b-2xl ', afterClassName)} width={100} height={100} />
                        <div className='absolute top-0 right-0 rounded-bl-2xl bg-gold-primary text-lg font-medium px-4 py-2 text-body-1'>{label.after}</div>
                    </div>
                </div>)}
        </>
    )
}

export default BeforeAfter