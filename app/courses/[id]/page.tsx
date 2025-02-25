import { Typography } from '@mui/material';
import CourseOverView from '@/components/CourseDetail/CourseOverView';
import CourseSyllabus from '@/components/CourseDetail/CourseSyllabus';
import getCourseDetails from '@/data/courseDetails';
import CourseHero from '@/components/hero/CourseHero';
import ClassCard from '@/components/cards/ClassCard';
import { Suspense } from 'react';

interface CourseDetail {
  id: number;
  slug: string;
  name: string;
  duration: string;
  syllabus: Syllabus[];
  overview: string;
}

export interface Syllabus {
  id: number;
  title: string;
  contentList: string[];
}

// Your page component, which now fetches data directly
const CourseDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const data: CourseDetail | null = getCourseDetails(id);

  if (!data) {
    return <Typography>Data not found.</Typography>;
  }

  return (
    <>
      <Suspense>
        <CourseHero CourseDetail={data} />
        <div className="px-4 md:px-14 w-full flex flex-col md:flex-row gap-6">
          {/* Left Section: Course Overview & Syllabus */}
          <div className="w-full md:w-2/3">
            <CourseOverView overView={data.overview} />
            <CourseSyllabus syllabus={data.syllabus} />
          </div>

          {/* Right Section: ClassCard */}
          <div className="w-full md:w-1/3 md:mt-14">
            <ClassCard />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default CourseDetailPage;
