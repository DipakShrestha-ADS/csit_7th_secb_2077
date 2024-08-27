import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
