import './App.css';
import Home from './comp/Home';
import Register from './comp/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  	<Routes>
  	  <Route path='/' element={<Home />}/>
  	  <Route path='registro' element={<Register />}/>
  	</Routes>
  </BrowserRouter>
  );
}

export default App;
