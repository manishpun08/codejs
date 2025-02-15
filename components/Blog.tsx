'use client';
import { Box, Button } from '@mui/material';
import React from 'react';
import BlogCard from './cards/BlogCard';
import { useRouter } from 'next/navigation';
import blogs from '@/data/blogs.json';
import { FaArrowRightLong } from 'react-icons/fa6';

const Blog = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-primary-100">
        <div className="px-4 lg:px-6 xl:mx-8 py-4 ">
          <div className="flex items-center justify-between">
            <div className=" my-4 w-2/3">
              <h1 className=" text-2xl font-bold">Blogs</h1>
              <p>
                Stay ahead with expert insights, coding tutorials, and the
                latest trends in technology and innovation. Whether you are a
                beginner or a pro, our blogs provide the knowledge.💡
              </p>
            </div>
            <Button
              onClick={() => router.push('/blogs')}
              className="w-[180px] py-3 lg:py-4 lg:px-5 lg:w-auto rounded-xl bg-primary-600 hover:bg-primary-500 hover:drop-shadow-md transition duration-300 ease-in-out text-white text-center"
            >
              Al Blog <FaArrowRightLong className="text-lg ml-2 mb-[2px]" />
            </Button>
          </div>

          <Box className="flex flex-col md:flex-row flex-wrap gap-4">
            {blogs.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Blog;
