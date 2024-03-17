import LandingLayout from "../Layouts/LandingLayout"
import Header from "../Fragments/home/Header"
import About from "../Fragments/home/About"
import Materi from "../Fragments/home/Materi"


const Home = () => {
    return (
        <LandingLayout>
            <div className="home mt-3">
                <Header/>
                <About/>
                <Materi/>
            </div>
        </LandingLayout>
        
    )
}

export default Home
