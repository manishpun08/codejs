'use client';
import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LuCalendarDays } from 'react-icons/lu';
import { FaArrowRightLong } from 'react-icons/fa6';

interface Props {
  id: number;
  name: string;
  duration: string;
  shortDescription: string;
  image: string;
  slug: string;
}

const CourseCard = ({
  slug,
  name,
  duration,
  shortDescription,
  image,
}: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/course-detail/${slug}`);
  };

  return (
    <Box
      className="w-full max-w-[370px] mx-auto rounded-3xl shadow-lg overflow-hidden group p-4 cursor-pointer transition-all duration-300 ease-in-out"
      sx={{
        background: 'linear-gradient(180deg, #C5E3FF 0%, #FFEDED 95%)',
      }}
    >
      {/* Image container with hover zoom */}
      <Box
        className="relative overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-in-out "
        onClick={handleClick}
      >
        <Image
          src={image}
          width={600}
          height={400}
          priority
          alt={name}
          className="w-full rounded-lg aspect-3/2 object-cover"
        />
      </Box>

      {/* Card content */}
      <Stack className="pt-4">
        <Typography
          variant="h5"
          className="text-xl font-semibold text-gray-800 "
        >
          {name}
        </Typography>

        <Typography
          variant="h6"
          className="text-lg text-gray-600 flex items-center py-1"
        >
          <LuCalendarDays className="mr-1 mt-[-3px]" />
          <span>
            Duration: <span className="font-bold">{duration}</span>
          </span>
        </Typography>

        {/* Subtext for course description */}
        <Typography className="text-sm text-gray-600  line-clamp-3  font-sans">
          {shortDescription}
        </Typography>

        <Button
          onClick={handleClick}
          variant="contained"
          className="mt-4 w-full bg-primary-600 text-white hover:bg-primary-500 hover:drop-shadow-md transition duration-300 ease-in-out rounded-full items-center text-center  "
        >
          Explore
          <FaArrowRightLong className="text-sm ml-2 mb-[2px]" />
        </Button>
      </Stack>
    </Box>
  );
};

export default CourseCard;
