import React from 'react';
import "./styles/main.scss";
import {Routes, Route} from "react-router-dom";
import Home from './page/Home';
import HomeLayout from './layouts/home-layouts';
import News from './components/main/News/News';

function App() {
  return (
    <div>
        <Routes>
            <Route element={<HomeLayout/>}>
              <Route path="/" Component={Home}/>
              <Route path="/news" Component={News}/>
            </Route>  
        </Routes>
    </div>
  );
}

export default App;
