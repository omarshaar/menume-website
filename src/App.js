import logo from './logo.svg';
import './App.css';
import './odescroll/styles.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './templates/template-2/theme';



function App() {
  const [ landingPage, setLandingPage ] = useState(<div></div>);
  const [ orderPage, setOrderPage ] = useState(<div></div>);
  const [ checkoutPage, setCheckoutPage ] = useState(<div></div>);

  useEffect(()=>{
    setThemeVariables(theme);
    import('./templates/template-2/pages').then(module => {
      const pages = module.default;
      setLandingPage(pages.LandingPage);
      setOrderPage(pages.MenuPage);
      setCheckoutPage(pages.CheckoutPage);
    });
  },[]);


  function setThemeVariables (theme) {
    const root = document.querySelector(':root');
    console.log(theme.light);
    
    for (const [prop, value] of Object.entries(theme.light)) {
      root.style.setProperty(`--${prop}`, value);
    }
  }




  return (
    <Router>
      <Routes>
        <Route path='/' element={landingPage} ></Route>
        <Route path='/menu' element={orderPage} ></Route>
        <Route path='/checkout' element={checkoutPage} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
