import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/loginPage/login';
import HomePage from '../src/pages/homePage/home';
import BancoDeHoras from '../src/pages/banco-de-horas/banco-de-horas'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ponto from '../src/pages/ponto/ponto'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/HomePage" Component={HomePage} />
        <Route path="/BancoDeHoras" Component={BancoDeHoras} />
        <Route path="/Ponto" Component={Ponto} />
      </Routes>
    </Router>
  );
}

export default App;

