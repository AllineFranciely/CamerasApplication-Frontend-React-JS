import { useEffect, useState } from 'react';
import HeaderList from '../components/HeaderList';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import './styles/Cameras.css';
import CameraImg from '../images/camera.png';

interface Camera {
  id: number,
  nome: string,
  fabricante: string,
  serie: number
}

function Cameras() {

  const [state, setState] = useState({
    nome: [],

  });
  const [loading, setLoading] = useState(true);

  const fetchCameras = async () => {

    const url = 'https://backend-octos.vercel.app/api/cameras';
    const response = await fetch(url);
    const data = await response.json();
    setState((prevSt) => ({
      ...prevSt,
      nome: data,
    }));
    setLoading(false);
  };

  useEffect(() => {
    fetchCameras();
  }, []);

  return (
    <div className="CamerasInteiro">
      <HeaderList />
      {loading && <Loader />}
      {!loading && (
        <div className="Cameras">
          {state.nome.map((name: Camera) => (
            <div key={name.id} className="Card">
              <p><b>{name.nome}</b></p>
              <p>{name.fabricante}</p>
              <p>{name.serie}</p>
              <img className="imgCam" src={CameraImg} alt="Camera"/>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>

  )
}

export default Cameras;
