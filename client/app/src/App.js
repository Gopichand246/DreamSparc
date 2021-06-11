import React from 'react';
import './App.css';
import Footer from './containers/footer';
import Header from './containers/Header';
import Hero from './containers/Hero';


function App() {
  return (
      <div className="App">
        <Header/>
        <Hero/>
        <Footer/>
      </div>   
  );
}

export default App;
