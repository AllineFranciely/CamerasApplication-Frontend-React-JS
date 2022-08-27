import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './styles/Home.css';

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

  const navigate = useNavigate();

  function handleClick() {
    navigate('/')
  }

  return (
    <div className="homeInteiro">
      {!loading && (
        <div>
          {state.nome.map((name: Camera) => (
            <div key={name.id}>
              <p>{name.nome}</p>
              <p>{name.fabricante}</p>
              <p>{name.serie}</p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleClick}>
        Cadastrar nova câmera
      </button>
    </div>

  )
}

export default Cameras;
