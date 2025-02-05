import CourseCard from "@/components/CourseCard";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <>
      {/* <HomeCarousel /> */}
      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 sm:px-10 lg:px-16 xl:px-24 py-10">
        {/* Course Card 1 */}
        <CourseCard
          imageUrl="https://myways-public-data-prod.s3.ap-south-1.amazonaws.com/myways-resource-library/blogs/stats-related-to-mern-stack-in-industry_Image_blogs.jpg"
          title="MERN Stack Web Training"
          duration="3 months"
          subTitle="Learn the full stack of web development, from frontend to backend!"
        />
        {/* Course Card 2 */}
        <CourseCard
          imageUrl="https://i.ytimg.com/vi/GHTA143_b-s/maxresdefault.jpg"
          title="Nest js Backend Training"
          duration="2.5 months"
          subTitle="Learn the progressive node framework which includes Nest, MongoDB, Express and Typescript!"
        />
        {/* Course Card 3 */}
        <CourseCard
          imageUrl="https://miro.medium.com/v2/resize:fit:1200/1*QJnvahq_EBdUGjYQUYrhvA.png"
          title="Mongo DB Database"
          duration="20 days"
          subTitle="Learn the MongoDB NoSQL database from beginner to advanced!"
        />
        {/* Course Card 4 */}
        <CourseCard
          imageUrl="https://i.ytimg.com/vi/GHTA143_b-s/maxresdefault.jpg"
          title="Nest js Backend Training"
          duration="2.5 months"
          subTitle="Learn the progressive node framework which includes Nest, MongoDB, Express and Typescript!"
        />
        {/* Course Card 5 */}
        <CourseCard
          imageUrl="https://miro.medium.com/v2/resize:fit:1200/1*QJnvahq_EBdUGjYQUYrhvA.png"
          title="Mongo DB Database"
          duration="20 days"
          subTitle="Learn the MongoDB NoSQL database from beginner to advanced!"
        />
        {/* Course Card 6 */}
        <CourseCard
          imageUrl="https://i.ytimg.com/vi/GHTA143_b-s/maxresdefault.jpg"
          title="Nest js Backend Training"
          duration="2.5 months"
          subTitle="Learn the progressive node framework which includes Nest, MongoDB, Express and Typescript!"
        />
        {/* Course Card 7 */}
        <CourseCard
          imageUrl="https://miro.medium.com/v2/resize:fit:1200/1*QJnvahq_EBdUGjYQUYrhvA.png"
          title="Mongo DB Database"
          duration="20 days"
          subTitle="Learn the MongoDB NoSQL database from beginner to advanced!"
        />
        {/* Course Card 8 */}
        <CourseCard
          imageUrl="https://i.ytimg.com/vi/GHTA143_b-s/maxresdefault.jpg"
          title="Nest js Backend Training"
          duration="2.5 months"
          subTitle="Learn the progressive node framework which includes Nest, MongoDB, Express and Typescript!"
        />
        {/* Course Card 9 */}
        <CourseCard
          imageUrl="https://miro.medium.com/v2/resize:fit:1200/1*QJnvahq_EBdUGjYQUYrhvA.png"
          title="Mongo DB Database"
          duration="20 days"
          subTitle="Learn the MongoDB NoSQL database from beginner to advanced!"
        />
      </Box>
    </>
  );
};

export default Home;
