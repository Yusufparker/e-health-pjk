
import { Link } from "react-router-dom";
const HeaderLayout = ({title, hasroot=true,custom_name=""}) => {
  return (
    <div className="p-3 p-md-0 mt-3">
      <div className="container   bg-primary header-layout d-flex align-items-center position-relative">
        <img src="/img/stetoskop.png" className="position-absolute" alt="" />
        <div className="col-md-10">
          <h1 className="text-white title">{title}</h1>
          <div className="text-white breadcrumbs">
            <Link to="/" className="text-white me-1">
              <i className="bi bi-house-fill"></i>
            </Link>
            {
              hasroot== true ?
                <>
                  <i className="bi bi-caret-right-fill me-1"></i>
                  <Link className="text-white me-1 text-decoration-none" to="/materi">Materi</Link>
                </>

              
              :
              ''
            }  
            <i className="bi bi-caret-right-fill me-1"></i>
            <span>{custom_name!="" ? custom_name : title}</span>
                

        
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderLayout
