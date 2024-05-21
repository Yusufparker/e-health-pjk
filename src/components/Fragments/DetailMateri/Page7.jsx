
const Page7 = () => {
    return (
        <>
        <div className="row mb-5 ">
            <p className="col-md-8 text-center m-auto d-block fs-14">Kolesterol tinggi merupakan kondisi ketika kadar kolesterol dalam darah meningkat, dalam istilah medis disebut hiperkolesterolemia. Sering kali kondisi ini tidak menimbulkan gejala, namun kolesterol tinggi merupakan faktor risiko terjadinya PJK. Mari cegah sebelum terlambat…</p>
        </div>
        <div className="row fs-14 mb-3">
            <div className="col-md-8 p-4">
                <div className="mb-5">
                    <h5>Cek kesehatan rutin</h5>
                    <p>Cek kadar kolesterol minimal 1x dalam sebulan, selain itu kendalikan gula darah dan tekanan darah untuk memaksimalkan pencegahan.</p>
                </div>
                <div>
                    <h5>Konsumsi makanan yang menyehatkan jantung</h5>
                    <ul>
                        <li className="mb-2">­Selalu konsumsi sayur, buah, kacang-kacangan, dan biji-bijian setiap hari. </li>
                        <li className="mb-2">Pilih daging tanpa lemak, unggas tanpa kulit, dan ikan.</li>
                        <li className="mb-2">­Hindari gorengan, makanan berpengawet, dan batasi konsumsi gula.</li>
                        <li className="mb-2">­Hindari mengonsumsi makanan yang digoreng. Masak makanan dengan cara dipanggang, direbus atau dikukus.</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <img src="/img/health day.jpg" className="w-100" alt="" />
            </div>
        </div>
        <div className="row fs-14">
            <div className="col-md-4">
                <img src="/img/aktivitas fisik.jpg" className="w-100" alt="" />
            </div>
            <div className="col-md-8 p-4">
                <div className="mb-5">
                    <h5>Aktif bergerak dan wajib berolahraga</h5>
                    <ul>
                        <li className="mb-2">­Lakukan olahraga dengan internsitas sedang selama 30-60 menit seperti jalan cepat atau bersepeda.</li>
                        <li className="mb-2">­Pilihlah alternatif untuk menjadi lebih aktif begerak seperti naik tangga, parkir jauh, berjalan kaki ke toko dan lain sebagainya.</li>
                    </ul>
                </div>
                <div className="mb-5">
                    <h5>Berhent Merokok</h5>
                    <p>Jika anda tidak merokok, maka jangan mulai untuk mencoba merokok. Jika anda merokok, maka berhentilah merokok untuk mengurangi risiko penyakit</p>
                </div>
            </div>
        </div>
        <div className="row fs-14">
            <div className="col-md-6 p-4">
                <div className="mb-5">
                    <h5>Pertahankan berat badan ideal</h5>
                    <p>Konsultasikan dengan tenaga kesehatan tentang berat badan yang sehat bagi anda.</p>
                    <ul>
                        <li className="mb-3">Pertahankan IMT 18,5 – 22,9 kg/m2</li>
                        <li>
                            Cara menghitung IMT:
                                <div className="d-flex flex-column mt-3">
                                        <span style={{borderBottom:"1px solid black", width:"120px"}}>Berat Badan (kg)</span>
                                        <span>Tinggi Badan (m)2</span>
                                </div>
                            </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <img src="/img/imt.jpg" className="w-100" alt="" />
            </div>
        </div>
        
        </>
    )
}

export default Page7
