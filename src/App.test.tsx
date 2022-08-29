import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Formulario from './components/formulario';
import Home from './pages/Home';
import Cameras from './pages/Cameras';

describe('1. Testa o componente Formulario', () => {
  it('Testa se a página Home contém os campos de input', () => {
    render(
      <Router>
        <Formulario />
      </Router>
    );

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
    render(
      <Router>
        <Home />
      </Router>
    );

    const parag1 = screen.getByText(/Lorem ipsum dolor sit amet/i);
    expect(parag1).toBeInTheDocument();
  });
});

describe('3. Testa os componentes Header e Footer na página de câmeras', () => {
  it('Testa se a imagem é renderizada no Header', () => {
    render(
      <Router>
        <Cameras />
      </Router>
    );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'octos.png');
  });
  it('Testa se o texto é renderizado no Footer', () => {
    render(
      <Router>
        <Cameras />
      </Router>
    );
    const parag2 = screen.getByText(/Alline/i);
    expect(parag2).toBeInTheDocument();
  });
})