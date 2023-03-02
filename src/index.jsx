import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Home } from "./Pages/Home";
// import Apart from "./pages/Apart";
// import About from "./pages/About";
import { Header } from "./Layout/Header/header";
// import Footer from "./layout/Footer";
// import Error from "./components/Error";
import "./utils/style/style.css";

const MainTemplate = () => {
    return (
        <div>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
};
const Router = createBrowserRouter([
    {
        element: <MainTemplate />,
        // errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/coins-sympas",
                // element: <Apart/>,
            },
            {
                path: "/checklists",
                // element: <About />,
            },
            {
                path: "/conseils",
                // element: <About />,
            },
            {
                path: "/quelle-peche",
                // element: <About />,
            },
            {
                path: "/articles-vedettes",
                // element: <About />,
            },
            {
                path: "/contact",
                // element: <About />,
            }
        ]
    }
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>,
);