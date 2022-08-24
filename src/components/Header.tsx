import './styles/Header.css';
import logoOctos from '../images/octos.png';

function Header() {
  return (
    <div className="headerInteiro">
      <img className="logoOctos" src={logoOctos} alt="Logo octos" />
    </div>
  );
}

export default Header;