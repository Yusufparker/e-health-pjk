import LandingLayout from "../Layouts/LandingLayout"
import { useParams, Link } from "react-router-dom"
import HeaderLayout from "../Layouts/HeaderLayout"
import dataMateri from "../../utils/dataMateri"

const DetailMateri = () => {
    const {id} = useParams()
    const materi = dataMateri.find((item) => item.id === id);
    
    return (
        <LandingLayout>
            <HeaderLayout title={materi.title}/>
        </LandingLayout>
    )
}

export default DetailMateri
