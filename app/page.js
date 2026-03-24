import MainBox from './components/MainBox';
import ContentArea from './components/ContentArea';

export default function Home() {
  return (
    <div className="container">
      
      {/* Panggil kotak 3D utama. 
        hideInput={true} -> Biar kotak input URL dan tombol Unduh gak muncul di halaman awal. 
      */}
      <MainBox hideInput={true} />
      
      {/* Panggil artikel Fitur dan FAQ */}
      <ContentArea />

    </div>
  );
}
