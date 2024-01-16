import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';


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
