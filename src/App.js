import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [ landingPage, setLandingPage ] = useState(<h1>Hello</h1>);
  const [ orderPage, setOrderPage ] = useState();







  return (
    <Router>
      <Routes>
        <Route path='/' element={landingPage} ></Route>
        <Route path='/order' element={landingPage} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
