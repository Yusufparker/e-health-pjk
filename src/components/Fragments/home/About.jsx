import { Link } from "react-router-dom"
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
export default About
