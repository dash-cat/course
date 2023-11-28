import About from "../../../pages/About";
import ErrorPage from "../../../pages/ErrorPage";
import PostPage from "../../../pages/PostPage";
import User from "../../../pages/User";

export const routes = [
    {path: '/about', component: About, exact: true},
    {path: '/', component: PostPage, exact: true},
    {path: '/error', component: ErrorPage, exact: true},
    {path: '/post/:id', component: User, exact: true}
]