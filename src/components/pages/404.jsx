
import {useRouteError, Link} from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()   
    return (
        <div>
            <h1>Oppss!</h1>
            <p>Maaf, Halaman tidak ditemukan</p>
            <p>
                {error.statusText || error.message}
            </p>
            <Link to="/">Kembali Ke Home</Link>
        </div>
    )
}

export default ErrorPage
