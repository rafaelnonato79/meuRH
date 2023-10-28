import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/loginPage/login';
import HomePage from '../src/pages/homePage/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/HomePage" Component={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;

