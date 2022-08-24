import { useForm } from "./useForm";
import './styles/Formulario.css';

function Formulario() {

  const initialState = {
    Nome: "",
    Fabricante: "",
    Serie: "",
  };

  const { onChangeSelect, onChange, onSubmit, values } = useForm(
    formsCallback,
    initialState,
  );

  async function formsCallback() {
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="inputs">
        <input
          name='Nome'
          id='Nome'
          type='text'
          onChange={onChange}
          required
          value={values.Nome}
          placeholder="Nome"
        />
        <select
          name='Fabricante'
          id='Fabricante'
          onChange={onChangeSelect}
          required
          placeholder="Selecione"
        >
          <option value="Secure Câmeras Inc">Secure Câmeras Inc</option>
          <option value="Surveillance Cams LLC">Surveillance Cams LLC</option>
          <option value="DigiEye Group">DigiEye Group</option>
          <option value="CâmeraFi Inc">CâmeraFi Inc</option>
          <option value="VidMasters Inc">VidMasters Inc</option>
        </select>
        <input
          name='Serie'
          id='Serie'
          type='number'
          onChange={onChange}
          placeholder="Número de Série"
          required
        />
        <button type='submit'>Cadastrar</button>
      </div>
    </form>
  );
}

export default Formulario;