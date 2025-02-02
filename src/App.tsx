import React from 'react';
import "./styles/main.scss";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './page/Home';
import HomeLayout from './layouts/home-layouts';
import Loanpage from './page/Loanpage';
import CrediOffers from "./components/loanpage/CreditOffers/CrediOffers";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout/>}>
              <Route path="/" Component={Home}/>
              <Route path="/loan-page" Component={Loanpage}/>
              <Route path="/new" element={<CrediOffers/>} />
            </Route>  
        </Routes>
    </BrowserRouter>
  );
}

export default App;
