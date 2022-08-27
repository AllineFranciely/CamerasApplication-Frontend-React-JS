import { useForm } from "./useForm";
import { useNavigate } from 'react-router-dom';
import './styles/Formulario.css';

interface NoCors extends RequestInit {
  mode: RequestMode,
} 

function Formulario() {

  const initialState = {
    nome: "",
    fabricante: "",
    serie: "",
  };

  const { onChangeSelect, onChange, values } = useForm(
    formsCallback,
    initialState,
  );

  async function formsCallback() {
  }

  const navigate = useNavigate();

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

      event.preventDefault();

    const url = 'https://backend-octos.vercel.app/api/cameras/create';
    const obj: NoCors = {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }
    const response = await fetch(url, obj);
    console.log(response);
    navigate('/cameras');
  }

  return (
    <form>
      <div className="inputs">
        <input
          name='nome'
          id='nome'
          type='text'
          onChange={onChange}
          required
          value={values.nome}
          placeholder="Nome"
        />
        <select
          name='fabricante'
          id='fabricante'
          onChange={onChangeSelect}
          required
          value={values.fabricante}
          placeholder="Fabricante"
        >
          <option>Selecione um fabricante</option>
          <option value="Secure Câmeras Inc">Secure Câmeras Inc</option>
          <option value="Surveillance Cams LLC">Surveillance Cams LLC</option>
          <option value="DigiEye Group">DigiEye Group</option>
          <option value="CâmeraFi Inc">CâmeraFi Inc</option>
          <option value="VidMasters Inc">VidMasters Inc</option>
        </select>
        <input
          name='serie'
          id='serie'
          type='number'
          onChange={onChange}
          placeholder="Número de Série"
          required
          value={values.serie}
        />
      </div>
      <button
          className="buttonCad"
          type='submit'
          onClick={handleSubmit}
        >
          <b>Cadastrar</b>
        </button>
    </form>
  );
}

export default Formulario;