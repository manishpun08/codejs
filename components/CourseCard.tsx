"use client";
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
    <Box className="w-full max-w-[370px] mx-auto rounded-lg shadow-lg overflow-hidden group bg-white cursor-pointer transition-all duration-300 ease-in-out">
      {/* Image container with hover zoom */}
      <Box
        className="relative overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-in-out h-[190px]"
        onClick={handleClick}
      >
        <Image
          src={image}
          width={600}
          height={400}
          priority
          alt={name}
          className="w-full object-cover"
        />
      </Box>

      {/* Card content */}
      <Stack className="p-4">
        <Typography
          variant="h5"
          className="text-xl font-semibold text-gray-800"
        >
          {name}
        </Typography>

        <Typography variant="h6" className="text-lg text-gray-600 mt-2">
          Duration: <span className="text-teal-800">{duration}</span>
        </Typography>

        {/* Subtext for course description */}
        <Typography
          variant="body1"
          className="text-sm text-gray-600 mt-1 italic text-justify"
        >
          {shortDescription}
        </Typography>

        <Button
          onClick={handleClick}
          variant="contained"
          className="mt-4 w-full bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200"
        >
          Explore
        </Button>
      </Stack>
    </Box>
  );
};

export default CourseCard;
