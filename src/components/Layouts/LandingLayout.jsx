import Navbar from "../Fragments/Navbar"


const LandingLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default LandingLayout
