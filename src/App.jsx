import { RouterProvider} from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css"; 


AOS.init();
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import router from "./router/index"





function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
