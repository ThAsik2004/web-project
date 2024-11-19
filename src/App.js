import './App.css';
import Home from './HomePage';
import SignUp from './sign';
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/sign' element={<SignUp></SignUp>}></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
