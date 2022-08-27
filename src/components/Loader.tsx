import React from 'react';
import './styles/Loader.css';

const Loader = () => {
  return (
    <div className="lod">
      <h1>Carregando</h1>
      <div
        role="alert"
        className="loader"
      >
      </div>
    </div>
  );
}

export default Loader;