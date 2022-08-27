import './styles/Footer.css';

function Footer() {
  return (
    <div className="footerInteiro">
      <button className="buttonOctos" type="button">
        <a
          href="https://octos.ai/"
          target="_blank"
          rel="noreferrer"
        >
          <b>Conheça mais</b>
        </a>
      </button>
      <div className="ass">
        <p>Alline Franciely ©</p>
        <p>Desafio Octos 2022</p>
      </div>
    </div>
  );
}

export default Footer;