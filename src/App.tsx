import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import PetsListByType from './components/PetsListByType';

function App() {

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Medibank Coding Challenge
        </a>
      </nav>

      <div className="container-fluid">
        <PetsListByType />
      </div>
    </div>
  );
}

export default App;
