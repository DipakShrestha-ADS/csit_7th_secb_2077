import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
