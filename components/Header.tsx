'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-midnight-navy text-soft-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-electric-blue">OSARIS</span>
              <span className="text-nextgen-green"> NEXTGEN</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-nextgen-green transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-nextgen-green transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="hover:text-nextgen-green transition-colors">
              Programs
            </Link>
            <Link href="/schools" className="hover:text-nextgen-green transition-colors">
              Schools
            </Link>
            <Link href="/parents" className="hover:text-nextgen-green transition-colors">
              Parents
            </Link>
            <Link
              href="/contact"
              className="bg-electric-blue hover:bg-blue-600 px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Book a Session
            </Link>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block hover:text-nextgen-green transition-colors">
              Home
            </Link>
            <Link href="/about" className="block hover:text-nextgen-green transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="block hover:text-nextgen-green transition-colors">
              Programs
            </Link>
            <Link href="/schools" className="block hover:text-nextgen-green transition-colors">
              Schools
            </Link>
            <Link href="/parents" className="block hover:text-nextgen-green transition-colors">
              Parents
            </Link>
            <Link
              href="/contact"
              className="block bg-electric-blue hover:bg-blue-600 px-6 py-2 rounded-full font-semibold transition-colors text-center"
            >
              Book a Session
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
