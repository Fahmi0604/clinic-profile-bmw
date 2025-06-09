'use client'

import { Sheet, SheetTrigger, SheetContent, SheetFooter, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import { useBoolean } from '@/hooks'
import Link from 'next/link';
import { Button } from './ui/button';
import Icons from './Icon';

type NavbarSheetProps = {
    menuItems: {
        label: string;
        href: string;
    }[];
}

export default function NavbarSheet({ menuItems = [] }: NavbarSheetProps) {
    const { value, setValue } = useBoolean();

    return (
        <Sheet open={value} onOpenChange={setValue}>
            <div className="grid md:hidden grid-cols-[auto_1fr_auto] items-center w-full gap-x-2 px-0 py-2">
                <SheetTrigger asChild>
                    <div
                        className="peer group relative rounded-full md:hidden w-10 h-10"
                    >
                        <Menu className="absolute inset-0 m-auto w-7 h-7 text-white transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90" />
                        <X className="absolute inset-0 m-auto w-7 h-7 text-white opacity-0 rotate-90 transition-all duration-300 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </div>
                </SheetTrigger>

                <Link href="/" className="flex">
                    <img src="/logo.svg" alt="logo" className="text-white w-24" />
                    <span className="sr-only">logo</span>
                </Link>

                <Button className="peer-data-[state=open]:hidden font-outfit font-semibold rounded-full bg-gold-primary text-heading-2 cursor-pointer py-2 px-3">
                    Reservasi
                </Button>
                <div className="hidden peer-data-[state=open]:block py-2 px-3" />
            </div>
            <SheetContent side="right" className="w-[100vw] mt-[14vh] md:hidden">

                <div className="grid font-outfit text-body-1 text-lg font-bold">
                    {menuItems.map((e) => (
                        <Link
                            key={e.label}
                            href={e.href}
                            className="underline py-6 px-4 sm:py-3"
                            onClick={() => setValue(false)}
                        >
                            {e.label}
                        </Link>
                    ))}
                </div>

                <Button className="text-md font-outfit text-heading-2 font-semibold flex rounded-full cursor-pointer bg-gold-primary px-6 py-6 mx-4">
                    <Icons name="whatsapp" className="h-6 w-6 text-heading-2" />
                    Reservasi
                </Button>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
                <SheetFooter className="mt-0">
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
