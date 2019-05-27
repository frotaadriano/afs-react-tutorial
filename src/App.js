import React from 'react';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { InputText } from 'primereact/inputtext';


import Sobre from './Pages/Sobre';
import OutraPagina from './Pages/OutraPagina';
import Home from './Pages/Home';

function App() {
  return (
    <Router> 
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre/">Sobre</Link>
            </li>
            <li>
              <Link to="/outrapagina/">Outra Página</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Route path="/" exact component={Home} />
      <Route path="/sobre/" component={Sobre} />
      <Route path="/outrapagina/" component={OutraPagina} />


      <div>
        <Button primary> react bootstrap </Button>
        <InputText value="InputText do Primefaces" />
      </div>
    </Router>

  );
}

export default App;
