import React from 'react';
import Header from "./ components/Header";
import Main from "./ components/Main";
import Footer from "./ components/Footer";
import "./styles/style.scss";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
        <Routes>
            <Route path="/" Component={Main}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
