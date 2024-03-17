import { Link } from "react-router-dom"


const CardMateri = ({data}) => {
    return (
        <div className="col-md-4 p-3 pt-0 pb-0 mb-5" data-aos="fade-left" >
            <div className="rounded bg-white border card-materi">
                <div className="img">
                    <img src={data.thumbnail} className="w-100" alt="" />
                </div>
                <div className="p-3">
                    <h4>{data.title}</h4>
                    <p>{data.excerpt}</p>
                    <Link to={`/materi/${data.id}`} className="d-block text-center bg-primary p-2 mt-4 text-decoration-none text-white">Lihat Selengkapnya</Link>
                </div>
            </div>
        </div>
    )
}

export default CardMateri
