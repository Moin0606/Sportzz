import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import './App.css';

import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Explore from './screens/Explore';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/explore' element={<Explore/>}/>


      </Routes>
  
    </Router>
    </>
  );
}

export default App;
