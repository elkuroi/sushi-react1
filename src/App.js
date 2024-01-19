import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
