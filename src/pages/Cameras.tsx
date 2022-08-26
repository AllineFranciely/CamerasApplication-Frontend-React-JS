import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './styles/Home.css';


function Cameras() {

  // const [state, setState] = useState();
  const [loading, setLoading] = useState(true);

  // const fetchCameras = async () => {

  //   const url = 'http://localhost:8000/cameras';
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setState((prevSt) => ({
  //     ...prevSt,
  //     products: data,
  //     loading: false,
  //   }));
  // };

  // useEffect(() => {
  //   fetchCameras();
  // }, []);

  const navigate = useNavigate();

  function handleClick() {
    navigate('/')
  }

  return (
    <div className="homeInteiro">
      {!loading && (
        <div>
          <p>oi</p>
          <button
            onClick={handleClick}>
            Cadastrar noca câmera
          </button>
        </div>
      )}
    </div>
  )
}

export default Cameras;
