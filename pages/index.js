import { Hero } from "../components/ui/common";
import { CourseList } from "../components/ui/course";
import { BaseLayout } from "../components/ui/layout";
import { getAllCourses } from "../content/fetcher";
import { useWeb3 } from "../components/providers";

export default function Home({ courses }) {
  return (
    <>
      <Hero />
      <CourseList courses={courses} />
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

Home.Layout = BaseLayout;