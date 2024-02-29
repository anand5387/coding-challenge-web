import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import PetsListByType from './components/PetsListByType';
import { PetType } from './model/Pet';

function App() {

  const petType: PetType = PetType.Cat

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Medibank Coding Challenge
        </a>
      </nav>

      <div className="container mt-3">
        <PetsListByType />
      </div>
    </div>
  );
}

export default App;
