import CourseCard from "@/components/CourseCard";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import courses from "@/data/courses.json";

const Home = () => {
  return (
    <>
      {/* <HomeCarousel /> */}
      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 sm:px-10 lg:px-16 xl:px-24 py-10">
        {courses.map((item) => {
          return <CourseCard key={item.id} {...item} />;
        })}
      </Box>
    </>
  );
};

export default Home;
