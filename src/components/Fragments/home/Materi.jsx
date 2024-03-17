import {Link} from 'react-router-dom'
import { lazy, Suspense } from 'react';
const CardMateri = lazy(() => import("./CardMateri"));
import dataMateri from '../../../utils/dataMateri';



const SkeletonMateri = () => {
    return (
        <div className="col-md-4 p-3 pt-0 pb-0 mb-5 " >
            <div className="rounded bg-white border card-materi">
                <div className="img bg-primary bg-skeleton">
                    
                </div>
                <div className="p-3">
                    <h5 className=" placeholder-glow">
                        <span className="placeholder col-12"></span>
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="placeholder-glow">
                        <span className="placeholder col-12"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-12" aria-disabled="true"></a>
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
                            <Suspense key={data.  id} fallback={<SkeletonMateri/>}>
                                <CardMateri  data={data}/>
                            </Suspense>
                        ))
                    }
                    <Link className="text-center text-decoration-none text-primary">Lihat Selengkapnya <i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Materi
