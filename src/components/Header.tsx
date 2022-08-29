import { useNavigate } from 'react-router-dom';
import './styles/Header.css';
import logoOctos from '../images/octos.png';

function Header() {

  const navigate = useNavigate();

  return (
    <div className="headerInteiro">
      <img className="logoOctos" src={logoOctos} alt="Logo octos" />
      <button
            onClick={() => navigate('/cameras')}
            className="buttonList"
            data-test-id="button"
          >
            <b>Câmeras Cadastradas</b>
          </button>
    </div>
  );
}

export default Header;