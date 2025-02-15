import CourseCard from '@/components/cards/CourseCard';
import { Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HomeHero from '@/components/hero/HomeHero';
import popularCourses from '@/data/popularCourses.json';
import Blog from '@/components/Blog';

const Home = () => {
  return (
    <>
      <HomeHero />
      {/* popular courses  */}
      <div className="px-4 lg:px-6 xl:mx-8 py-10 ">
        <h1 className="my-4 text-2xl font-bold">Popular Courses</h1>
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {popularCourses.map((item) => {
            return <CourseCard key={item.id} {...item} />;
          })}
        </Box>
      </div>
      {/* blog  */}
      <Blog />
    </>
  );
};

export default Home;
