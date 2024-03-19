import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Page1 = () => {
    return (
        <div className="page-1 row">
            <div className="col-md-5 p-5">
                <LazyLoadImage
                    alt="health"
                    src="/img/orang banyak.jpg"
                    className="w-100" 
                    effect="blur"    
                />
            </div>
            <div className="col-md-7 d-flex align-items-center p-3">
                <div className="text-center text-md-start">
                    <h3>Apa itu <span className="fw-bold text-primary">Penyakit Jantung Koroner?</span></h3>
                    <p>Setidaknya 15 dari 1000 orang saat ini menderita penyakit jantung.</p>
                    <p>Penyakit jantung koroner (PJK) merupakan jenis penyakit jantung dimana pembuluh darah jantung tidak dapat mengalirkan cukup darah kaya oksigen ke jantung (WHO, 2016)</p>
                    <p>Banyak jenis penyakit jantung yang dapat dicegah atau diobati dengan pilihan gaya hidup yang lebih sehat</p>
                </div>
            </div>
        </div>
    )
}

export default Page1
