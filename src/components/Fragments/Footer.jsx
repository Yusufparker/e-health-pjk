import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <hr/>
            <footer >
                <div className="container p-3   text-center">
                        <div className="d-flex align-items-center  justify-content-center">
                            <img src="/img/logo-health.png" className="me-2 d-inline-block" style={{ height:"30px"}} alt="" />
                            <h1 className="fw-bold mt-2 text-black">E-HEALTH </h1>
                        </div>
                        <p className="col-md-8 m-auto fs-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sint ex, possimus unde quisquam et tempore optio vero maxime ratione, beatae voluptate corrup.</p>
                        <div className="d-flex justify-content-center sosmed mt-4">
                            <Link>
                                <i className="bi bi-linkedin"></i>
                            </Link>
                            <Link>
                                <i className="bi bi-twitter-x"></i>
                            </Link>
                            <Link>
                                <i className="bi bi-instagram"></i>
                            </Link>
                            <Link>
                                <i className="bi bi-youtube"></i>
                            </Link>
                        </div>
                    <p className="mt-5">Copyright ©2024 e-health | All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
