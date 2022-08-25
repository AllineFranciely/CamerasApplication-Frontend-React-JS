import { useState } from 'react';
import Formulario from '../components/formulario';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/Home.css';
import Camera from '../images/camera.png';
import Security from '../images/security.jpeg';

function Home() {

  // const [state, setState] = useState({});
  const [input, setInput] = useState({
    nome: '',
    fabricante: '',
    serie:0
  });
  // const [error, setError] = useState('');

  // const handleChange = ({ target }) => {
  //   setInput(target.value);
  // }

  // const fetchProducts = async () => {

  //   const url = 'http://localhost:8000/cameras';
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setState((prevSt) => ({
  //     ...prevSt,
  //     products: data,
  //     loading: false,
  //   }));
  // };

  // const handleSubmit = async (event) => {
  //   e.preventDefault();
  //   const url = 'http://localhost:3005/products';
  //   const obj = {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name: input }),
  //   }
  //   const response = await fetch(url, obj);
  //   const data = await response.json();
  //   if (data.message) {
  //     setError(data.message);
  //     return;
  //   }
  //   navigate('/cameras');
  // }

  return (
    <div className="homeInteiro">
      <Header />
      <div className="body">
        <div className="forms">
          <p><b>Cadastre uma câmera</b></p>
          <Formulario />
        </div>
        <img className="camera" src={Camera} alt="Cãmera de segurança" />
        <div className="texto">
          <p>
            Lorem ipsum dolor sit amet,consectetur
            adipisci elit, sed eiusmod tempor incidunt
            ut labore et dolore magna aliqua.Ut enim
            ad minim veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            Excepteur sint obcaecat cupiditat non proident,
            sunt in culpa qui officia deserunt mollit anim
            id est laborum.
          </p>
          <img className="imgSecurity" src={Security} alt="Security" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
