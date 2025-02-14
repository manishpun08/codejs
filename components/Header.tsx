'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import SearchBar from './search/Searchbar';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import CourseMenu from './CourseMenu';

export default function Header() {
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
    <>
      <nav
        className={`w-full fixed top-0 z-10 border-b transition-all duration-500 ease-in-out flex flex-col md:flex-row items-center align-middle justify-between px-4 lg:px-8 ${
          scrolled
            ? 'bg-secondary-700 shadow-md border-none py-2'
            : 'bg-secondary-300 py-3'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            priority
            src="/images/J.png"
            height={scrolled ? 50 : 80}
            width={scrolled ? 80 : 100}
            alt="Logo"
            className="p-2 rounded-3xl transition-all duration-300 mix-blend-color-burn cursor-pointer"
          />
        </Link>

        {/* Search Bar */}
        <div className="w-full items-center align-middle flex lg:flex-row flex-col gap-4 md:w-1/2 my-4 md:my-0">
          <CourseMenu />
          <SearchBar route="/courses" />
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => router.push('/contact')}
          className="w-[180px] py-3 lg:py-4 lg:px-5 lg:w-auto rounded-xl bg-primary-600 hover:bg-primary-500 hover:drop-shadow-md transition duration-300 ease-in-out text-white text-center"
        >
          Send Enquiry <FaArrowRightLong className="text-lg ml-2 mb-[2px]" />
        </Button>
      </nav>

      {/* Spacer to push content down */}
      <div className="h-[320px] md:h-[125px]" />
    </>
  );
}
