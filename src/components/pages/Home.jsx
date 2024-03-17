import LandingLayout from "../Layouts/LandingLayout"
import { Link } from "react-router-dom"
import dataMateri from "../../utils/dataMateri"
import { lazy } from "react"

const CardMateri = lazy(() => import('../Fragments/CardMateri'))

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
                    <div className="col-md-6 ps-5 pe-5 p-2 pb-2 img">
                        <img src="/img/jantunggg.jpg"  className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}


const About = () =>{
    return(
        <div className="about mt-5 mb-5 pt-3">
            <div className="container">
                <div className="row overflow-hidden" >
                    <div className="col-md-5" data-aos="fade-right" data-aos-duration="1500">
                        <img src="/img/anatomic-heart.jpg" className="w-100" alt=""  />
                    </div>
                    <div className="col-md-7 d-flex justify-content-center align-items-center " data-aos="fade-left" data-aos-duration="1500">
                        <div className="text-center p-3">
                            <h2 className="fw-bold">Kenal <span className="text-primary">Lebih Jauh</span> dengan <span className="text-primary">Penyakit Jantung Koroner</span></h2>
                            <p>Jantung merupakan organ yang sangat vital, karena sebagai alat pemompa darah ke seluruh tubuh sehingga sel tubuh mendapatkan oksigen dan makanan yang diperlukan untuk proses metabolisme. Salah satu hal yang perlu dicegah yaitu penyakit jantung koroner (PJK). Untuk itu, kita perlu mengetahui bagaimana cara agar jantung kita tetap sehat dan apa yang dapat dilakukan untuk menjaga kesehatan jantung kita.</p>
                            <div className=" row d-flex  link mt-5">
                                <Link className="col-md-6 mb-2 mb-md-0 me-md-4">Lihat Selengkapnya</Link>
                                <Link className="col-md-5">Hubungi Kami</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Materi = () =>{
    return(
        <div className="materi mt-5 mb-5 pt-4">
            <div className="container">
                <div className="row overflow-hidden">
                    {
                        dataMateri.slice(0,3).map(data => (
                            <CardMateri key={data.  id} data={data}/>
                        ))
                    }
                    <Link className="text-center text-decoration-none text-primary">Lihat Selengkapnya <i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

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
