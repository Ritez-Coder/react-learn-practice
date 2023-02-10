import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return(<div className='App'>
    <BrowserRouter>
    <h1>React Redux</h1>
    <hr />
    < Header />
    <hr />
    
    < Routes>
    < Route>
      < Route path='/'  element={< Home/>}></Route>
      < Route path='/cart' element={<Cart/>}></Route>
    </Route>
    </Routes>

    < Footer/>
    </BrowserRouter>
    
  </div>
  );
}
export default App;

