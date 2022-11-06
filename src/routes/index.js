//layout
import Home from "~/pages/Home";
import LearningPath from "~/pages/LearningPath";
import Courses from "~/pages/CoursesPage";
import Blog from "~/pages/Blog";
import Search from "~/pages/Search";
import CourseDetailPage from "~/pages/CourseDetailPage";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/learning-paths", component: LearningPath },
  { path: "/courses", component: Courses },
  { path: "/blog", component: Blog },
  { path: "/course-detail", component: CourseDetailPage },
  { path: "/search", component: Search , layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
