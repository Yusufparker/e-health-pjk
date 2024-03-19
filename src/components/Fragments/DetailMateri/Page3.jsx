import {LazyLoadImage} from 'react-lazy-load-image-component'
import dataTandaGejala from "../../../utils/dataTandaGejala.json"
import { useState } from 'react'


const Page3 = () => {
    const [datas, setDatas] = useState(dataTandaGejala)

    console.log(datas);
    
    return (
        <div className='page-3'>
            <div className="row">
                <div className="col-md-5 p-4 text-center">
                    <LazyLoadImage
                        src='/img/angina.jpg'
                        className='w-50'
                        alt='angina'
                        effect='blur'
                    />
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <div className="text-center text-md-start">
                        <h2>Angina atau Nyeri Dada</h2>
                        <p>Nyeri dada yang disebabkan oleh jantung, bisa terasa seperti tertekan, diremas, sesak, atau terbakar. Nyeri dada terkadang berhubungan dengan aktivitas fisik. Rasa sakit atau ketidaknyamanan juga bisa menyebar ke bahu, lengan, leher, rahang, atau punggung.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                {
                    datas.map( (data, index) => (
                        <div className="col-6 col-md-3 text-center mb-5">
                            <LazyLoadImage
                                src={data.image}
                                alt={`gambar ${data.name}`}
                                className='w-50'
                                effect='blur'
                            />
                            <h6 className='mt-3'>{data.name}</h6>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Page3
