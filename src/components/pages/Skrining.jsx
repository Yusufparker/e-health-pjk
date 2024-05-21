import { useState } from "react";
import LandingLayout from "../Layouts/LandingLayout";
import HeaderLayout from "../Layouts/HeaderLayout";
import axios from "axios";
import CustomSelect from "../Fragments/path/CustomSelect";
import Loading from "../Fragments/path/Loading";
import toast, { Toaster } from "react-hot-toast";



const Skrining = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [gds, setGds] = useState("");
  const [gdp, setGdp] = useState("");
  const [ldl, setLdl] = useState("");
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [smooke, setSmooke] = useState("Ya");
  const [formSection, setFormSection] = useState(1)
  
  const [isLoading, setIsloading] = useState(false)

  const [isSuccess, setIsSuccess] = useState(false)
  const [countResult, setCountResult] = useState("") 
  const [resultParameter, setResultParameter]= useState("")
  const [percentage, setPercentage] = useState(0)
  const [borderColor, setBorderColor] = useState("")
  const r = 40


  const handleFamilyHistory = (option) =>{
    setFamilyHistory(option)
  }

  const handleSmooke = (option) =>{
    setSmooke(option)
  }
  const notify = () =>
    toast("Sistem sedang menangani antrian permintaan. Coba lagi nanti!", {
      icon: "⚠️",
    });

  const handleNext = () =>{
    if(formSection < 3){
      setFormSection(formSection+1)
    }
  }

  const handlePrev = () => {
    if(formSection > 1){
      setFormSection(formSection-1)
    }
  }

  const validateFirstSection = () => {
      if (!name.trim() || !age || !familyHistory ) {
        return false;
      }
      return true;
  };
  const validateSecondSection = () => {
      if (!gds|| !gdp || !ldl || !systolic || !diastolic) {
        return false;
      }
      return true;
  };

  const finalValidation = () => {
    validateFirstSection()
    validateSecondSection()
    if (!height || !weight || !smooke) {
      return false;
    }
    return true;

  }





  const clear =()=>{
    setAge(""),
    setName(""),
    setFamilyHistory("")
    setGds("")
    setGdp("")
    setLdl("")
    setSystolic("")
    setDiastolic("")
    setHeight("")
    setWeight("")
    setSmooke("")
    setFormSection(1)
  }

  const handleReset = () =>{
    clear()
    setIsSuccess(false)
    setIsloading(false)
    setCountResult("")
    setPercentage(0)
    setBorderColor("")
  }

  const handleSubmit = async () => {
    setIsSuccess(false)
    setIsloading(true)
    const headers = {
      Authorization: 'nhhfgbvjkgheihyromuhammadyusuf16fhssnmakassmkdmblllaoweugfbbsnnxbvcagfwet',
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post("https://e-health16.yusufparker.com/api/screenings",{
        name,
        age,
        family_history: familyHistory.value,
        gds: gds,
        gdp: gdp,
        ldl,
        systolic,
        diastolic,
        height,
        weight,
        smooking_information: smooke.value,
      },
      {
        headers
      });


      setCountResult(response.data.result_count)
      setResultParameter(response.data.result_parameter)
      const resultPercen = (response.data.result_count * 100) / 22;
      const circumference = r * 2 * Math.PI;
      const offset = circumference - (resultPercen / 100) * circumference;
      setPercentage(offset)
      let color = ""; 
      const score = response.data.result_count;
      if (score >= 8 && score <= 11) {
        color = "#0e7e39"; // Resiko Rendah (8 - 11)
      } else if (score >= 12 && score <= 15) {
        color = "#D96F17"; // Resiko Sedang (12 - 15)
      } else if (score >= 16 && score <= 22) {
        color = "#D91717"; // Resiko Tinggi (16 - 22)
      }

      setBorderColor(color)
      setIsSuccess(true)
      console.log(response);
      // clear()
    } catch (error) {
      console.log(error);
      notify()
    }finally{
      setIsloading(false)
    }
  };

  return (
    <LandingLayout>
      <div className="skrining mt-3">
        <HeaderLayout
          title="Screening Penyakit Jantung Koroner untuk penderita Diabetes Melitus dan Hipertensi pada Kelompok Prolanis"
          hasroot={false}
          custom_name="Screening Penyakit Jantung Koroner"
        />
      </div>

      <div className="container mt-5 mb-5 ps-4 pe-4">
        <div className="row">
          {isSuccess ? (
            <div className="col-md-6 mb-5">
              <p>
                Hai <span className="text-primary fw-bold">{name}</span>,
                berikut adalah hasil skrining penyakit jantung koroner!
              </p>
              <table className="table mt-4">
                <tbody className="fs-12">
                  <tr>
                    <th scope="row">
                      <i className="bi bi-circle-fill text-primary"></i>
                    </th>
                    <td>Nama</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="bi bi-circle-fill text-primary"></i>
                    </th>
                    <td>Usia</td>
                    <td>
                      {age} <span className="fs-10">Tahun</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="bi bi-circle-fill text-primary"></i>
                    </th>
                    <td>Keluarga dengan riwayat PJK</td>
                    <td>{familyHistory.label}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="bi bi-circle-fill text-primary"></i>
                    </th>
                    <td>Merokok</td>
                    <td>{smooke.label}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="bi bi-circle-fill text-primary"></i>
                    </th>
                    <td>Pemeriksaan Gula Darah Sewaktu (GDS)</td>
                    <td>
                      {gds} <span className="fs-10">mg/dL</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="bi bi-circle-fill text-primary"></i>
                    </th>
                    <td>Pemeriksaan Gula Darah Puasa(GDP)</td>
                    <td>
                      {gdp} <span className="fs-10">mg/dL</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="bi bi-circle-fill text-primary"></i>
                    </th>
                    <td>Pemeriksaan kolesterol jahat dalam darah (LDL)</td>
                    <td>
                      {ldl} <span className="fs-10">mg/dL</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="bi bi-circle-fill text-primary"></i>
                    </th>
                    <td>Pemeriksaan tekanan darah</td>
                    <td>
                      {systolic}/{diastolic} <span className="fs-10">mmHg</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="bi bi-circle-fill text-primary"></i>
                    </th>
                    <td>Tinggi Badan</td>
                    <td>
                      {height} <span className="fs-10">cm</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="bi bi-circle-fill text-primary"></i>
                    </th>
                    <td>Berat Badan</td>
                    <td>
                      {weight} <span className="fs-10">kg</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="col-md-6  mb-1 mb-5">
              <form onSubmit={handleSubmit} className="mb-5">
                {formSection === 1 && (
                  <>
                    <div className="mb-3">
                      <label
                        htmlFor="name"
                        className="form-label text-primary fs-14"
                      >
                        Nama{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control fs-12"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="age"
                        className="form-label fs-14 text-primary"
                      >
                        Umur
                      </label>
                      <input
                        type="number"
                        className="form-control fs-12"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor=""
                        className="form-label fs-14 text-primary"
                      >
                        Keluarga Denga Riwayat PJK
                      </label>
                      <CustomSelect
                        options={[
                          {
                            label: "Ya",
                            value: 1,
                          },
                          {
                            label: "Tidak",
                            value: 0,
                          },
                        ]}
                        handleSelect={handleFamilyHistory}
                      />
                    </div>
                  </>
                )}
                {formSection === 2 && (
                  <>
                    <div className="mb-3">
                      <label
                        htmlFor="gds"
                        className="form-label text-primary fs-14"
                      >
                        Pemeriksaan Gula Darah Sewaktu (GDS)
                      </label>
                      <div className="d-flex">
                        <input
                          type="number"
                          className="form-control fs-12"
                          id="gds"
                          placeholder=""
                          value={gds}
                          onChange={(e) => setGds(e.target.value)}
                        />
                        <span className="fs-12">mg/dL</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="gdp"
                        className="form-label text-primary fs-14"
                      >
                        Pemeriksaan Gula Darah Puasa (GDP)
                      </label>
                      <div className="d-flex">
                        <input
                          type="number"
                          className="form-control fs-12"
                          id="gdp"
                          placeholder=""
                          value={gdp}
                          onChange={(e) => setGdp(e.target.value)}
                        />
                        <span className="fs-12">mg/dL</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="ldl"
                        className="form-label text-primary fs-14"
                      >
                        Pemeriksaan kolesterol jahat dalam darah (LDL)
                      </label>
                      <div className="d-flex">
                        <input
                          type="number"
                          className="form-control fs-12"
                          id="ldl"
                          placeholder=""
                          value={ldl}
                          onChange={(e) => setLdl(e.target.value)}
                        />
                        <span className="fs-12">mg/dL</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="blood_pressure"
                        className="form-label text-primary fs-14"
                      >
                        Pemeriksaan Tekanan Darah
                      </label>
                      <div className="d-flex">
                        <input
                          type="number"
                          className="form-control fs-12"
                          value={systolic}
                          onChange={(e) => setSystolic(e.target.value)}
                        />
                        <div className="ms-2 me-2">/</div>
                        <input
                          type="number"
                          className="form-control fs-12"
                          value={diastolic}
                          onChange={(e) => setDiastolic(e.target.value)}
                        />
                        <span className="fs-12">mm/HG</span>
                      </div>
                    </div>
                  </>
                )}
                {formSection === 3 && (
                  <>
                    <div className="mb-3">
                      <label
                        htmlFor="height"
                        className="form-label text-primary fs-14"
                      >
                        Tinggi Badan
                      </label>
                      <div className="d-flex">
                        <input
                          type="number"
                          className="form-control fs-12"
                          id="height"
                          placeholder=""
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                        <span className="fs-12">cm</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="weight"
                        className="form-label text-primary fs-14"
                      >
                        Berat Badan
                      </label>
                      <div className="d-flex">
                        <input
                          type="number"
                          className="form-control fs-12"
                          id="weight"
                          placeholder=""
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                        <span className="fs-12">kg</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor=""
                        className="form-label fs-14 text-primary"
                      >
                        Merokok
                      </label>
                      <CustomSelect
                        options={[
                          {
                            label: "Ya",
                            value: "Ya",
                          },
                          {
                            label: "Tidak",
                            value: "Tidak",
                          },
                          {
                            label: "Sudah Berhenti",
                            value: "Sudah Berhenti",
                          },
                        ]}
                        handleSelect={handleSmooke}
                      />
                    </div>
                  </>
                )}
              </form>
              <div className="d-flex justify-content-end">
                {formSection > 1 && (
                  <button
                    className="btn bg-secondary text-white border-0 ps-4 pe-4 pt-2 pb-2 fs-12 me-4"
                    onClick={handlePrev}
                  >
                    Prev
                  </button>
                )}
                {formSection !== 3 ? (
                  <button
                    className="btn bg-primary text-white border-0 ps-4 pe-4 pt-2 pb-2 fs-12"
                    disabled={
                      formSection === 1
                        ? !validateFirstSection()
                        : !validateSecondSection()
                    }
                    onClick={handleNext}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="btn d-flex justify-content-between bg-primary text-white border-0 ps-4 pe-4 pt-2 pb-2 fs-12"
                    disabled={!finalValidation() || isLoading === true}
                    onClick={handleSubmit}
                  >
                    {isLoading === true && (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2 "
                          role="status"
                        ></span>
                      </>
                    )}
                    <span>Kirim</span>
                  </button>
                )}
              </div>
            </div>
          )}

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="">
              {isSuccess === false ? (
                isLoading === false ? (
                  <div className="text-center">
                    <img src="img/form skrining.jpg" alt="" className="w-50" />
                  </div>
                ) : (
                  <Loading />
                )
              ) : (
                <>
                  <h5 className="text-center mb-3">Hasil</h5>
                  <div className="text-center position-relative">
                    <div className="position-absolute score-result">
                      <h1>{countResult}</h1>
                      <p style={{ color: borderColor }}>{resultParameter}</p>
                    </div>
                    <div>
                      <svg viewBox="0 0 100 100" className="circle-container">
                        <circle
                          id="progress"
                          cx="50"
                          cy="50"
                          r={`${r}`}
                          fill="none"
                          stroke={borderColor}
                          strokeWidth="10"
                          strokeDasharray="251.2"
                          strokeDashoffset={percentage}
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
            {isSuccess === true && isLoading === false && (
              <div className="mt-3">
                <table className="table fs-12">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">
                        <i
                          className="bi bi-circle-fill"
                          style={{ color: "#0e7e39" }}
                        ></i>
                      </th>
                      <th scope="col">
                        <i
                          className="bi bi-circle-fill"
                          style={{ color: "#D96F17" }}
                        ></i>
                      </th>
                      <th scope="col">
                        <i
                          className="bi bi-circle-fill"
                          style={{ color: "#D91717" }}
                        ></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td>8 - 11</td>
                      <td>12 - 15</td>
                      <td>16 - 22</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          {isSuccess === true && isLoading === false && (
            <div className="text-center mt-5 mb-5">
              <button
                className="btn w-auto bg-primary text-white fs-12 "
                onClick={handleReset}
              >
                <i className="bi bi-arrow-clockwise"></i> Mulai Ulang
              </button>
            </div>
          )}
        </div>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: "1px solid #FF7F3E",
            padding: "16px",
            color: "#FF7F3E",
            fontSize: "14px",
          },
        }}
      />
    </LandingLayout>
  );
};

export default Skrining;
