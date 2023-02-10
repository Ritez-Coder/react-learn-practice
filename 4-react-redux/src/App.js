import './App.css';
import Header from './components/Header';
import {  Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';

function App() {
  return(<div className='App'>
    <h1>********#--Redux Tutorial........</h1>
    <hr />
    < Header />

    < Routes>
      <Route>
        < Route path='/' index element={<Home/>}></Route>
        < Route path='/counter' element={<Counter/>}></Route>
        < Route path='*' element={ <h1>Error</h1> }></Route>
      </Route>
    </Routes>

  </div>
  );
}
export default App;

