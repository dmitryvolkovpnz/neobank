import React from 'react';
import "./styles/main.scss";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './page/Home';
import HomeLayout from './layouts/home-layouts';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout/>}>
              <Route path="/" Component={Home}/>
            </Route>  
        </Routes>
    </BrowserRouter>
  );
}

export default App;
