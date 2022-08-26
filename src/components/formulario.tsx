import { useForm } from "./useForm";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Formulario.css';

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

  // const [state, setState] = useState({});
  // const [input, setInput] = useState({
  //   nome: '',
  //   fabricante: '',
  //   serie: 0
  // });
  // const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput((prevState) => ({ ...prevState, [target.name]: target.value }))
  // }

  // const handleChangeSelect = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
  //   setInput((prevState) => ({ ...prevState, [target.name]: target.value }))
  // }

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    const url = 'http://localhost:8000/cameras';
    const obj = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: values }),
    }
    const response = await fetch(url, obj);
    const data = await response.json();
    if (data.message) {
      setError(data.message);
      return error;
    }
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
        <button
          className="buttonCad"
          type='submit'
          onClick={handleSubmit}
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}

export default Formulario;