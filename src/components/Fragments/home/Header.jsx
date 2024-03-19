import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const Header = () =>{
    return(
        <div className="header p-3 p-md-0 mb-5">
            <div className=" container  bg-primary   p-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h2 className="fw-bold ps-2 pe-2">E-HEALTH FOR HEALTH FAILURE</h2>
                            <p className="mt-4">Discover the secret to keeping your heart healthy and bringing happiness to your life. A source of inspiration for a healthy lifestyle and sustainable happiness.</p>
                            <Link className="mt-4 d-inline-block" to="/materi">Lihat Selengkapnya</Link>
                        </div>
                    </div>
                    
                    <div className="col-md-6 ps-5 pe-5 p-2 pb-2 img">
                        <LazyLoadImage
                            alt="jantung sehat"
                            src="/img/jantunggg.jpg"
                            className="w-100" 
                            effect="blur"    
                        />
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Header
