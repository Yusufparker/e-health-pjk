
import { Link } from "react-router-dom";
const HeaderLayout = ({title}) => {
  return (
    <div className="p-3 p-md-0">
      <div className="container p-5  bg-primary header-layout d-flex align-items-end position-relative">
        <img src="/img/stetoskop.png" className="position-absolute" alt="" />
        <div className="col-md-10">
          <h1 className="text-white ">{title}</h1>
          <div className="text-white breadcrumbs">
            <Link to="/" className="text-white me-1">
              <i className="bi bi-house-fill"></i>
            </Link>
            <i className="bi bi-caret-right-fill me-1"></i>
            <Link className="text-white me-1 text-decoration-none" to="/materi">Materi</Link>
            {
              title !== 'Materi' && (
                <>
                  <i className="bi bi-caret-right-fill me-1"></i>
                  <span>{title}</span>
                </>

              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderLayout
