import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cameras from './pages/Cameras';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cameras"
            element={ <Cameras /> }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
