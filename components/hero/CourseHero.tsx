'use client';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuCalendarDays } from 'react-icons/lu';
import Breadcrumb from '../Breadcrumb';

interface CourseHeroProps {
  CourseDetail: {
    id: number;
    slug: string;
    name: string;
    duration: string;
    syllabus: Syllabus[];
    overview: string;
  };
}

export interface Syllabus {
  id: number;
  title: string;
  contentList: string[];
}

const CourseHero: React.FC<CourseHeroProps> = ({ CourseDetail }) => {
  console.log(CourseDetail);

  const router = useRouter();

  return (
    <div className="bg-primary-900  mb-10">
      <Breadcrumb
        homeElement={'Home'}
        separator="/"
        activeClasses="text-primary-400"
        containerClasses="flex container mx-auto py-4 px-4"
        listClasses="hover:underline mx-1 "
        capitalizeLinks
      />
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center">
        <div className="mb-5 lg:mb-0 lg:w-1/2 text-white">
          <h1 className="max-w-xl text-2xl lg:text-[2.9rem] leading-none font-extrabold font-sans lg:text-5xl lg:text-left lg:leading-tight ">
            {CourseDetail.name}
          </h1>
          <h2 className="max-w-xl text-center lg:text-left lg:max-w-md flex items-center py-1">
            <LuCalendarDays className="mr-1 mt-[-3px]" />
            <span>
              Duration:
              <span className="font-bold">{CourseDetail.duration}</span>
            </span>
          </h2>
          <div className="flex justify-center lg:justify-start mt-4">
            <Button
              onClick={() => router.push('/contact')}
              className="w-[180px] py-3 md:py-4 md:px-5 md:w-auto rounded-xl bg-primary-600 hover:bg-primary-500 hover:drop-shadow-md transition duration-300 ease-in-out text-white"
            >
              Enroll Now <FaArrowRightLong className="text-lg ml-2 mb-[2px]" />
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 py-4 md:py-10">
          <Image
            src="/images/typescript-javascript.jpg"
            alt="hero-img"
            width={600}
            height={400}
            className="ml-auto rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
