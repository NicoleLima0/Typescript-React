import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componentes/app/App';
import reportWebVitals from './reportWebVitals';
import Navbar from './componentes/navBar/Navbar';
import Footer from './componentes/footer/Footer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Navbar 
   item1='oii'
   item2={20}
    />
    <Footer
    item5='Nicole'
    item6='Matheus'
    item7='Mariana'
    item8='Fernanda'
    />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
