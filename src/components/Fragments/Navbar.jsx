import { Link } from "react-router-dom"
import dataMateri from "../../utils/dataMateri"
import { useState } from "react"


const Navbar = () => {
    const [navActive, setNavActive] = useState(false)
    const handleLinkClick = (e) => {
        setNavActive(false)
    };

    return (
        <nav className="p-3 bg-white">
            <div className="container d-flex justify-content-between position-relative">
                <div className={`list-nav ${navActive ?  'active' : ''} position-absolute w-100 p-3 bg-white border `}>
                    <ul className="list-inline">
                        <li>
                            <Link className="me-4 kues-nav text-decoration-none " to="/screening"><i className="bi bi-clipboard-data me-4"></i> Mulai Screening</Link>
                        </li>
                        {
                            dataMateri.map(d => (
                                <li key={d.id}>
                                    <Link to={`/materi/${d.id}`} onClick={handleLinkClick}><i className="bi bi-book me-4"></i> {d.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Link to="/" className="d-flex align-items-center text-decoration-none">
                    <img src="/img/logo-health.png" className="me-1 d-inline-block" style={{ height:"30px"}} alt="" />
                    <h1 className="fw-bold mt-2">E-HEALTH <span  className="d-inline-block ms-3">0821122314</span></h1>
                </Link>
                <div className="d-flex align-items-center ">
                    <Link className="me-4 kues d-inline text-decoration-none" to="/screening"><i className="bi bi-clipboard-data"></i> Mulai Screening</Link>
                    <button className="toggle" onClick={()=>setNavActive(!navActive)}><i className="bi bi-list"></i></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
