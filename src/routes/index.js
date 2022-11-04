//layout
import Home from "~/pages/Home";
import LearningPath from "~/pages/LearningPath";
import Courses from "~/pages/Courses";
import Blog from "~/pages/Blog";
import Search from "~/pages/Search";
import Checkout from "~/pages/Checkout/Checkout";

const publicRoutes = [
    {path: "/", component: Home},
    {path: "/learning-paths", component: LearningPath},
    {path: "/courses", component: Courses},
    {path: "/blog", component: Blog},
    {path: "/checkout", component: Checkout},
    {path: "/search", component: Search, layout: null},
];
const privateRoutes = [];
export {publicRoutes, privateRoutes};
