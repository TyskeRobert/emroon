'use client';

import { 
    ClipboardDocumentListIcon, 
    TicketIcon, 
    PuzzlePieceIcon 
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Lemmata", href: "/lexicon/lemmata", icon: ClipboardDocumentListIcon },
    { name: "Forms", href: "/lexicon/forms", icon: TicketIcon },
    { name: "Morphemes", href: "/lexicon/morphemes", icon: PuzzlePieceIcon }
]

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map(link => {
                const LinkIcon = link.icon;
                return (
                    <Link 
                        key={link.name} 
                        href={link.href}
                        className={clsx(`
                            flex
                            w-[150px]
                            grow
                            items-center
                            justify-center
                            gap-2
                            rounded-md
                            bg-gray-50
                            p-3
                            text-sm
                            font-medium
                            hover:bg-green-100
                            hover:text-green-700 
                            md:flex-none
                            md:p-2 
                            md:px-3
                        `,
                        {
                          'bg-green-100': pathname.indexOf(link.href) == 0
                        })}
                    >
                        <LinkIcon className="w-6 hidden md:block"/>
                        {link.name}
                    </Link>
            )})}
        </>
    );
}