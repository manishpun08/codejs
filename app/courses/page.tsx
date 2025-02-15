import CourseCard from '@/components/cards/CourseCard';
import { Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import courses from '@/data/courses.json';
import { Suspense } from 'react';

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Courses = async ({ searchParams }: SearchParams) => {
  const { query = '' } = await searchParams;

  const filteredCourse = courses.filter((course) =>
    course.name.toLowerCase().includes(query?.toLowerCase())
  );
  return (
    <>
      <Suspense>
        <Box className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 lg:px-6 xl:mx-8 py-10">
          {filteredCourse.map((item) => {
            return <CourseCard key={item.id} {...item} />;
          })}
        </Box>
      </Suspense>
    </>
  );
};

export default Courses;
