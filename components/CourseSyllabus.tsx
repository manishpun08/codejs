import { Syllabus } from "@/app/course-detail/[id]/page";
import SyllabusSection from "./SyllabusSection";

const CourseSyllabus = ({ syllabus }: { syllabus: Syllabus[] }) => {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8 gap-8">
      {syllabus.map((item) => (
        <SyllabusSection key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CourseSyllabus;
