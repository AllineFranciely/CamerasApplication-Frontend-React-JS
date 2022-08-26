import React from 'react';
import { render,  screen } from '@testing-library/react';
import Formulario from './components/formulario';
import Home from './pages/Home';

describe('1. Testa o componente Formulario', () => {
  it('Testa se a página Home contém os campos de input', () => {
    render(<Formulario />);

    const inputName = screen.getByPlaceholderText('Nome');
    expect(inputName).toBeInTheDocument();

    const inputFabricante = screen.getByPlaceholderText('Fabricante');
    expect(inputFabricante).toBeInTheDocument();

    const inputSerie = screen.getByPlaceholderText('Número de Série');
    expect(inputSerie).toBeInTheDocument();

  });
});

describe('2. Testa a página home', () => {
  it('Testa se a página Home contém o texto correto', () => {
    render(<Home />);

    const parag1 = screen.getByText(/Lorem ipsum dolor sit amet/i);
    expect(parag1).toBeInTheDocument();
  });
});
