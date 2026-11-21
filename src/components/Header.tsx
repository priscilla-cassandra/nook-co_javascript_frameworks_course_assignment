'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { NavLink } from '@/types/navlinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCartShopping,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import useCartStore from '@/stores/cartStore';

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b border-gray-200 bg-white shadow-md">
      <nav className="mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Nook&Co
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger menu + cart */}
        <div className="flex items-center gap-6">
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative inline-block"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-xs font-semibold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
      {open && (
        <ul className="flex flex-col gap-4 border-t border-gray-200 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
