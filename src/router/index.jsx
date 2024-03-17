import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import ErrorPage from "../components/pages/404";

const router = createBrowserRouter([
    {
        path:"/",
        element : <Home/>,
        errorElement:<ErrorPage/>
    },
    {
        path:'/about',
        element: <div>About</div>
    },
    // {
    //     path:'/materi/:id',
    //     element: <div>Peoject </div>
    // }
])

export  default router
