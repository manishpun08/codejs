'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import SearchBar from './Searchbar';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const checkScrollPosition = useCallback(() => {
    setScrolled(window.scrollY > 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, [checkScrollPosition]);

  return (
    <nav
      className={`w-full fixed top-0 z-10 border-b transition-all duration-500 ease-in-out flex flex-col md:flex-row items-center justify-between px-4 md:px-10 ${
        scrolled
          ? 'bg-black text-white shadow-md py-2'
          : 'bg-white text-black py-4'
      }`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          priority
          src="/images/J.png"
          height={scrolled ? 50 : 80}
          width={scrolled ? 80 : 100}
          alt="Logo"
          className="p-2 rounded-3xl transition-all duration-300"
        />
      </div>

      {/* Search Bar */}
      <div className=" w-full md:w-1/3 mb-4 md:mb-0">
        <SearchBar />
      </div>

      {/* CTA Button */}
      <Button
        variant="contained"
        onClick={() => router.push('/contact')}
        className="w-[180px] py-3 md:py-4 md:px-5 md:w-auto rounded-xl bg-teal-600 hover:bg-teal-500 hover:drop-shadow-md transition duration-300 ease-in-out"
      >
        Send Enquiry <FaArrowRightLong className="text-lg ml-2 mb-1" />
      </Button>
    </nav>
  );
}
