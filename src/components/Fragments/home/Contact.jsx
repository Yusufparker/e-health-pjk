import { useState } from "react"

const Contact = () => {

    const [isPlayed, setIsPlayed] = useState(false)

    


    return (
        <div className="mt-5 mb-5 pt-5 contact" id="contact">
            <div className="container overflow-hidden">
                <div className="row">
                    {
                        isPlayed ? 
                        <div className="col-md-6 mb-3">
                            <div className="card-video overflow-hidden h-100">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oquJX1-g7lE?si=905pLjRzKPyjd_wn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        : 
                        <div className="col-md-6 pe-md-3 position-relative mb-4" data-aos="fade-right">
                            <img src="/img/contact image.png" alt="contact image" className="w-100" />
                            <div className="btn-video position-absolute p-3">
                                    <button className="d-block h-100 w-100 rounded-circle border-0 bg-primary" onClick={() => setIsPlayed(true)} >
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.5 0C16.4455 0 12.482 1.2023 9.11082 3.45487C5.73961 5.70744 3.11207 8.9091 1.56048 12.655C0.0088823 16.4009 -0.397086 20.5227 0.393911 24.4993C1.18491 28.476 3.13734 32.1287 6.00432 34.9957C8.87129 37.8627 12.524 39.8151 16.5007 40.6061C20.4773 41.3971 24.5991 40.9911 28.345 39.4395C32.0909 37.8879 35.2926 35.2604 37.5451 31.8892C39.7977 28.518 41 24.5545 41 20.5C41 15.0631 38.8402 9.8488 34.9957 6.00431C31.1512 2.15981 25.9369 0 20.5 0ZM31.4045 21.8105L13.8331 30.5962C13.6098 30.7078 13.3617 30.7605 13.1123 30.7492C12.863 30.7379 12.6206 30.663 12.4083 30.5317C12.196 30.4004 12.0208 30.217 11.8993 29.9989C11.7779 29.7808 11.7142 29.5353 11.7143 29.2857V11.7143C11.7144 11.4648 11.7783 11.2195 11.8999 11.0016C12.0215 10.7837 12.1967 10.6005 12.4089 10.4694C12.6212 10.3382 12.8634 10.2635 13.1127 10.2523C13.3619 10.241 13.6099 10.2937 13.8331 10.4052L31.4045 19.1909C31.6474 19.3127 31.8517 19.4996 31.9944 19.7308C32.1371 19.962 32.2127 20.2283 32.2127 20.5C32.2127 20.7717 32.1371 21.038 31.9944 21.2692C31.8517 21.5004 31.6474 21.6873 31.4045 21.8091" fill="white"/>
                                        </svg>

                                    </button>
                            </div>
                        </div>
                    }
                    <div className="col-md-6 ps-md-3" data-aos="fade-left">
                        <div className="p-4 pt-4 pb-4 p-md-5  contact-form bg-primary">
                            <h2 className="text-center fw-bold text-white">Hubungi Kami</h2>
                            <form className="mt-3"> 
                                <div className="mb-3">
                                    <input type="text" className="w-100" placeholder="Nama" />
                                </div>
                                <div className="mb-3 d-flex" style={{gap:"12px"}}>
                                    <input type="text" className="w-100" placeholder="No HP" />
                                    <input type="email" className="w-100" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <textarea  className="w-100"  rows="3" placeholder="Pesan"></textarea>
                                </div>
                                <button>Kirim</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
