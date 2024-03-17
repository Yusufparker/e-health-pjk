import { lazy } from "react"
import { Link } from "react-router-dom"
const ImageHeader  = lazy(() => import('./ImageHeader'))



const Header = () =>{
    return(
        <div className="header p-3 p-md-0 mb-5">
            <div className=" container  bg-primary   p-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h2 className="fw-bold ps-2 pe-2">E-HEALTH FOR HEALTH FAILURE</h2>
                            <p className="mt-4">Discover the secret to keeping your heart healthy and bringing happiness to your life. A source of inspiration for a healthy lifestyle and sustainable happiness.</p>
                            <Link className="mt-4 d-inline-block">Lihat Selengkapnya</Link>
                        </div>
                    </div>
                    <ImageHeader/>
                </div>
            </div>
        </div>

    )
}

export default Header
