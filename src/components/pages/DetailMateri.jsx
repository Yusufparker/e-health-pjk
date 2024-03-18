import LandingLayout from "../Layouts/LandingLayout"
import { useParams, Link } from "react-router-dom"
import HeaderLayout from "../Layouts/HeaderLayout"
import dataMateri from "../../utils/dataMateri"

const DetailMateri = () => {
    const { id } = useParams();
    const index = dataMateri.findIndex((item) => item.id === id);
    const prevMateri = dataMateri[index - 1];
    const nextMateri = dataMateri[index + 1];
    const materi = dataMateri.find((item) => item.id === id);


    
    return (
        <LandingLayout>
            <HeaderLayout title={materi.title} />
            <div className="mt-5">
                <div className="container">
                    {materi.element}       
                </div>
            </div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-between prev-next">
                    <div className="col-6 col-md-3 ">
                        {
                            prevMateri ? 
                            <Link className="d-block p-3" to={`/materi/${prevMateri.id}`}>{prevMateri.title}</Link>
                            :
                            <Link className="d-block p-3" to="/">Kembali Ke Beranda</Link>
                        }
                    </div>
                    <div className="col-6 col-md-3">
                        {
                            nextMateri &&
                                <Link className="d-block p-3" to={`/materi/${nextMateri.id}`}>{nextMateri.title}</Link>
                        }
                    </div>

                </div>

            </div>
            
        </LandingLayout>
    );
}

export default DetailMateri
