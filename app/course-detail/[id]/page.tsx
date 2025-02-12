import { Button, Container, Typography } from "@mui/material";
import CourseOverView from "@/components/CourseOverView";
import CourseSyllabus from "@/components/CourseSyllabus";
import getCourseDetails from "@/data/courseDetails";

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
const CourseDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const data: CourseDetail | null = getCourseDetails(id);

  if (!data) {
    return <Typography>Data not found.</Typography>;
  }

  return (
    <Container
      sx={{
        padding: "40px 20px",
        borderRadius: "20px",
      }}
      className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg"
    >
      <div className="text-center mb-8">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#FF6F00",
            fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
            letterSpacing: "1px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
          className="text-orange-600"
        >
          {data.name}
        </Typography>

        <Button
          className="bg-blue-400"
          variant="contained"
          disableElevation
          disableFocusRipple
          sx={{ cursor: "default", fontSize: "1rem" }}
        >
          {data.duration}
        </Button>
      </div>

      <div className="space-y-8">
        <CourseOverView overView={data.overview} />
        <CourseSyllabus syllabus={data.syllabus} />
      </div>
    </Container>
  );
};

export default CourseDetailPage;
