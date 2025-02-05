import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  imageUrl: string;
  title: string;
  duration: string;
  subTitle: string;
}

const CourseCard = ({ imageUrl, title, duration, subTitle }: Props) => {
  return (
    <Box className="w-full max-w-[370px] mx-auto rounded-lg shadow-lg overflow-hidden group bg-white cursor-pointer transition-all duration-300 ease-in-out">
      {/* Image container with hover zoom */}
      <Box className="relative overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-in-out h-[190px]">
        <Image
          src={imageUrl}
          height={350}
          width={370}
          alt="Course title"
          className="w-full object-cover"
        />
      </Box>

      {/* Card content */}
      <Stack className="p-4">
        <Typography
          variant="h5"
          className="text-xl font-semibold text-gray-800"
        >
          {title}
        </Typography>

        <Typography variant="h6" className="text-lg text-gray-600 mt-2">
          Duration: <span className="text-teal-800">{duration}</span>
        </Typography>

        {/* Subtext for course description */}
        <Typography
          variant="body1"
          className="text-sm text-gray-600 mt-1 italic"
        >
          {subTitle}
        </Typography>

        <Button
          variant="contained"
          className="mt-4 w-full bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200"
        >
          Enroll Now
        </Button>
      </Stack>
    </Box>
  );
};

export default CourseCard;
