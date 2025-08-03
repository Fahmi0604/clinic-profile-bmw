import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Icons from "./Icon"
import NavbarSheet from "./NavbarSheet"
import PromoBar from "./PromoBar"

export default function Navbar({ settings }: { settings: Setting }) {

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
        <>
            <header className="sticky top-0 z-[100] w-full shadow bg-blue-primary ">
                <PromoBar headline={settings.highlight?.title ?? ''} />
                <div className="container mx-auto flex h-16 md:h-24 md:max-w-5xl xl:max-w-6xl items-center justify-between px-4 xl:px-0">
                    <Link href="/" className="hidden md:flex md:items-center gap-2">
                        {/* <MountainIcon className="h-6 w-6 text-white" /> */}
                        <Image src="/logo.svg" alt="logo" className="text-white w-28" width={24} height={24} priority />
                        <span className="sr-only">logo</span>
                    </Link>
                    {/* <div className="hidden md:flex gap-8"> */}
                    <nav className="hidden items-center gap-9 font-outfit text-md font-bold md:flex">
                        {menuItems.map((e) => (
                            <Link
                                key={e.label}
                                href={e.href}
                                className="underline text-white  hover:text-gray-400"
                            >
                                {e.label}
                            </Link>
                        ))}
                    </nav>
                    {/* <div className="flex items-center gap-4"> */}
                    <Link href={settings?.link_whatsapp ?? ''}>
                        <Button className="hidden md:flex text-md font-outfit text-heading-2 font-semibold rounded-full cursor-pointer bg-gold-primary py-5 mx-4 hover:bg-gold-secondary">
                            <Icons name="whatsapp" className="h-6 w-6 text-heading-2" />
                            Reservasi
                        </Button>
                    </Link>
                    {/* </div> */}
                    {/* </div> */}

                    <NavbarSheet menuItems={menuItems} settings={settings} />
                </div>
            </header>
        </>
    )
}

// function MenuIcon(props: any) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <line x1="4" x2="20" y1="12" y2="12" />
//             <line x1="4" x2="20" y1="6" y2="6" />
//             <line x1="4" x2="20" y1="18" y2="18" />
//         </svg>
//     )
// }

