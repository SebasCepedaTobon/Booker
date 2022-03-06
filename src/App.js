import './App.css';
import './estilos.css';

import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { Home } from './Components/Pages/Home/Home';
import { Login } from './Components/Pages/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
