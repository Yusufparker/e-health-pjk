
import dataStrategi from "../../../utils/dataStrategi1.json"
import { LazyLoadImage } from "react-lazy-load-image-component";




const CardStrategy = ({data}) => {
    return(
        <div className="col-md-4 text-center" >
            <LazyLoadImage
                src={data.image}
                className="w-50 rounded-circle"
                effect="blur"

            
            />
            <div className="p-3">
                <h6 className="fw-bold">{data.title}</h6>
                <p className="fs-12">{data.body}</p>
            </div>
        </div>
    )
}



const Page4 = () => {
    const datas = dataStrategi


    return (
        <>
            <div className="row mb-5">
                <p className="col-md-8 text-center m-auto d-block fw-bold">Ketika Anda memilih perilaku sehat, Anda dapat menurunkan risiko penyakit jantung sekaligus mencegah penyakit serius lainnya. (WHO, 2012)</p>
            </div>
            <div className="row mt-5">
                {
                    datas.map(data => (
                        <CardStrategy key={data.id} data={data}/>
                    ))
                }


            </div>
        </>
    )
}

export default Page4
