// router/index.tsx
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Layout from "~/components/Layout";
// import About from "~/pages/About";
import lazyLoad from "./lazyLoad";

const Home = lazy(() => import("~/pages/Home"));
const About = lazy(() => import("~/pages/About"));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />,
            },
            {
                path: "home",
                element: lazyLoad(Home),
            },
            {
                path: "about",
                element: lazyLoad(About),
            },
        ],
    },
];

export default createBrowserRouter(routes, {
    basename: "/react-zustand",
});
