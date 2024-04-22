'use client';

import {
  ListBulletIcon,
  HomeIcon,
  BookOpenIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/home', icon: HomeIcon },
  { name: 'Manuscripts', href: '/manuscripts', icon: BookOpenIcon },
  { name: 'Search', href: '/search', icon: MagnifyingGlassIcon },
  { name: 'Lexicon', href: '/lexicon', icon: ListBulletIcon }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(`
              flex 
              h-[48px] 
              grow 
              items-center 
              justify-center 
              gap-2 
              rounded-md 
              bg-gray-50 
              p-3 text-sm 
              font-medium 
              hover:bg-green-100 
              hover:text-green-700 
              md:flex-none 
              md:justify-start 
              md:p-2 
              md:px-3
            `,
            {
              'bg-green-100': pathname == link.href
            })}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
