import Page1 from "../components/Fragments/DetailMateri/Page1"
import Page2 from "../components/Fragments/DetailMateri/Page2"
import Page3 from "../components/Fragments/DetailMateri/Page3"
import Page4 from "../components/Fragments/DetailMateri/Page4"
import Page5 from "../components/Fragments/DetailMateri/Page5"
import Page6 from "../components/Fragments/DetailMateri/Page6"
import Page7 from "../components/Fragments/DetailMateri/Page7"
import Page8 from "../components/Fragments/DetailMateri/Page8"




const dataMateri = [
    {
        id : "apa-itu-penyakit-jantung-koroner",
        title : "Apa itu Penyakit Jantung Koroner?",
        thumbnail : "/img/materi/1.png",
        excerpt:"Penyakit jantung koroner (PJK) merupakan jenis  penyakit jantung dimana pembuluh darah...",
        element : <Page1/>
    },
    {
        id : "faktor-risiko-terkena-penyakit-jantung-koroner",
        title : "Apa Saja Faktor Risiko Terkena Penyakit Jantung Koroner?",
        thumbnail : "/img/materi/2.jpg",
        excerpt:"Lanjut usia mempunyai risiko lebih tinggi terkena penyakit jantung.  Meski proses penuaan....",
        element : <Page2/>
    },
    {
        id : "apa-saja-tanda-gejala-penyakit-jantung-koroner",
        title : "Apa Saja Tanda Gejala Penyakit Jantung Koroner?",
        thumbnail : "/img/materi/3.jpg",
        excerpt:"Tekanan darah tinggi merupakan penyebab utama  penyakit jantung karena merusak lapisan...",
        element : <Page3/>
    },
    {
        id : "hati-hati-diabetes-melitus-dan-hipertensi-dapat-beresiko-terkena-penyakit-jantung",
        title : "Hati-hati Diabetes Melitus dan Hipertensi Dapat Beresiko Terkena Penyakit Jantung",
        thumbnail : "/img/materi/3.jpg",
        excerpt:"Diabetes melitus dikenal sebagai faktor risiko yang signifikan untuk penyakit jantung koroner. Tingginya kadar glukosa dalam darah pada penderita diabetes dapat merusak pembuluh darah..",
        element : <Page8/>
    },
    {
        id : "Strategi-cerdik-untuk-menjalani-gaya-hidup-sehat-jantung",
        title : "Strategi Cerdik untuk Menjalani Gaya Hidup Sehat Jantung",
        thumbnail : "/img/materi/3.jpg",
        excerpt:"Cek kesehatan secara rutin bermanfaat untuk mengetahui kondisi kesehatan kita. Cek kesehatan dilakukan secara...",
        element : <Page4/>
    },
    {
        id : "strategi-pencegahan-pjk-pada-penderita-hipertensi",
        title : "Strategi Pencegahan PJK pada Penderita Hipertensi",
        thumbnail : "/img/materi/3.jpg",
        excerpt:"Hipertensi (tekanan darah tinggi) mempengaruhi 1 dari 3 orang dewasa di seluruh dunia. Hipertensi dapat mempersempit...",
        element : <Page5/>
    },
    {
        id : "strategi-pencegahan-pjk-pada-penderita-dm",
        title : "Strategi Pencegahan PJK Pada Penderita DM",
        thumbnail : "/img/materi/3.jpg",
        excerpt:"Kadar gula darah yang tinggi dan tidak terkontrol dapat meningkatkan risiko penyakit jantung. Gula darah yang tinggi...",
        element : <Page6/>
    },
    {
        id : "strategi-pencehajan-pjk-pada-penderita-kolesterol-tinggi",
        title : "Strategi Pencehajan PJK pada Penderita Kolesterol Tinggi",
        thumbnail : "/img/materi/3.jpg",
        excerpt:"Kolesterol tinggi merupakan kondisi ketika kadar kolesterol dalam darah meningkat, dalam istilah medis disebut...",
        element : <Page7/>
    }
]



export default dataMateri
