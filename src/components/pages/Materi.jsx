import LandingLayout from "../Layouts/LandingLayout"
import HeaderLayout from "../Layouts/HeaderLayout"
import dataMateri from "../../utils/dataMateri"
import { Link } from "react-router-dom"

const Materi = () => {
    return (
        <LandingLayout>
            <HeaderLayout title="Materi"  />
            <div className="container materi mt-4">
                {
                    dataMateri.map(materi => (
                        <Link key={materi.id} to={`/materi/${materi.id}`}     className="list-materi p-3  mb-3 rounded d-block row ">
                            <div className="d-flex">
                                <div className="bg-primary rounded-circle p-2">
                                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" className="NMm5M hhikbc" style={{fill: "white"}}>
                                        <path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7z"></path>
                                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"></path>
                                    </svg>
                                </div>
                                <h6  className="ms-3  d-flex align-items-center">{materi.title}</h6>
                            </div>
                        </Link>  
                    ))
                }
            </div>
        </LandingLayout>
    )
}

export default Materi
