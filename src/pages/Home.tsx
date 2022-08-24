import Formulario from '../components/formulario';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/Home.css';
import Camera from '../images/camera.png';
import Security from '../images/security.jpeg';

function Home() {
  return (
    <div className="homeInteiro">
      <Header />
      <div className="body">
        <div className="forms">
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
