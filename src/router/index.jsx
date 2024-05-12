import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import ErrorPage from "../components/pages/404";
import DetailMateri from "../components/pages/DetailMateri";
import Materi from "../components/pages/Materi";
import Skrining from "../components/pages/Skrining";

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
    {
        path:'/materi',
        element: <Materi/>
    },
    {
        path:'/materi/:id',
        element: <DetailMateri/>
    },
    {
        path:'/screening',
        element: <Skrining/>
    },
])

export  default router
