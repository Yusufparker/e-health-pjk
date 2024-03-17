import Navbar from "../Fragments/Navbar"
import Footer from "../Fragments/Footer"

const LandingLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default LandingLayout
