import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component";



const Header = () =>{
    return(
        <div className="header p-3 p-md-0 mb-5">
            <div className=" container  bg-primary   p-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h2 className="fw-bold ps-2 pe-2">DETEKSI JANTUNG DINI</h2>
                            <p className="mt-4">Apakah Anda ingin mengetahui seberapa besar risiko Anda terkena penyakit jantung koroner? Dapatkan jawabannya dengan Screening Penyakit Jantung Koroner Secara Gratis.</p>
                            <Link className="mt-4 d-inline-block" to="/screening">Mulai Skrining <i className="ms-2 bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                    
                    <div className="col-md-6 ps-5 pe-5 p-2 pb-2 img">
                        <LazyLoadImage
                            alt="jantung sehat"
                            src="/img/skrining.png"
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
