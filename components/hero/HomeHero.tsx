'use client';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const HomeHero = () => {
  const router = useRouter();

  return (
    <div className="container lg:px-6 flex flex-wrap items-center justify-center mx-auto md:flex-row my-10">
      <div className="mb-14 lg:mb-0 lg:w-1/2">
        <h1 className="max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
          Something goes here
        </h1>
        <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          aspernatur vitae officia totam accusantium consequuntur ipsum quaerat
          sapiente eos qui.
        </p>
        <div className="flex justify-center lg:justify-start mt-10">
          <Button
            onClick={() => router.push('/contact')}
            className="w-[180px] py-3 md:py-4 md:px-5 md:w-auto rounded-xl bg-primary-600 hover:bg-primary-500 hover:drop-shadow-md transition duration-300 ease-in-out text-white"
          >
            Learn More <FaArrowRightLong className="text-lg ml-2 mb-[2px]" />
          </Button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <Image
          src="https://growlight-hero.netlify.app/dist/img/hero-img.svg"
          alt="hero-img"
          width={600}
          height={400}
          className="ml-auto"
        />
      </div>
    </div>
  );
};

export default HomeHero;
