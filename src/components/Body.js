import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import AppLayout from "./AppLayout";
import Error from "./Error";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/",
            element: <AppLayout />,
            children: [

                {
                    path: "/browse",
                    element: <Browse />
                },
                {
                    path: "/error",
                    element: <Error />
                }
            ]
        }
    ]);
    
    return (
        <RouterProvider router={appRouter} />
    )
};

export default Body;