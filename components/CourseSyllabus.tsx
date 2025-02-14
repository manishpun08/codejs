import { Syllabus } from '@/app/course-detail/[id]/page';
import SyllabusSection from './SyllabusSection';

const CourseSyllabus = ({ syllabus }: { syllabus: Syllabus[] }) => {
  return (
    <div className=" ">
      <h2 className="text-4xl font-semibold py-4">Syllabus</h2>
      {syllabus.map((item) => (
        <SyllabusSection key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CourseSyllabus;
