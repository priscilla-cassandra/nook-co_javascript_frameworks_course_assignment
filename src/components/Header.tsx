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

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Nook&Co {/* Replace with logo */}
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
          <Link href="/cart" aria-label="Cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
