import { useState } from "react"
import dataFaktorRisiko from "../../../utils/dataFaktorRisiko.json"


const ListData = ({data}) => {
    return (
        <>
            {
                data.map( (d, index) => (
                    
                    <div className="row" key={index}>
                        <div className="col-md-3 text-center mb-5 mb-md-0">
                            <img src={d.image} className="w-50 rounded" alt="" />
                        </div>
                        <div className="col-md-9 d-flex align-items-center">
                            <div>
                                <h4 className="fw-bold">{index+1}. {d.title}</h4>
                                <p>{d.desc}</p>
                                
                            </div>
                        </div>
                        <hr  className="mt-4 mb-5"/>
                        
                    </div>
                ))
            }
        </>
    )
}



const Page2 = () => {
    const [state1, setState1] =useState(true)
    const [state2, setState2] =useState(false)
    const [faktorData, setFaktorData] = useState(dataFaktorRisiko);
    

    const handleState1 = () =>{
        setState1(true)
        setState2(false)
    }
    const handleState2 = () =>{
        setState1(false)
        setState2(true)
    }
    
    return (
        <div className="row  page-2">
            <div className=" border rounded shadow-sm p-0">
                <div className="d-flex btn-swap  ps-3">
                    <button className={`me-3 p-3 ${state1 ? 'active' : ''}`} onClick={handleState1}>Faktor Risiko Yang Tidak Dapat Dirubah</button>
                    <button className={` p-3 ${state2 ? 'active' : ''}`} onClick={handleState2}>Faktor Risiko Yang Dapat  Dirubah</button>
                </div>
                <div  className="p-4 content">
                     {/* Menggunakan key unik untuk memastikan gambar yang baru dimuat */}
                    {state1 ?
                        <ListData key="faktor1" data={faktorData.faktor1} />
                        :
                        <ListData key="faktor2" data={faktorData.faktor2} />
                    }
                </div>
            </div>

        </div>
    )
}

export default Page2
