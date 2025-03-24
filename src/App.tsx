import React from 'react';
import "./styles/main.scss";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './page/Home';
import HomeLayout from './layouts/home-layouts';
import Loanpage from './page/Loanpage';
import ErrorPage from "./page/404";
import Application from "./page/Application";
import PaymentSchedule from "./components/application/paymentSchedule/PaymentSchedule";
import DocumentSign from "./components/application/documentSign/documentSign";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout/>}>
                    <Route path="/" Component={Home}/>
                    <Route path="/loan" Component={Loanpage}/>
                    <Route path="/loan/:applicationId" Component={Application}/>
                    <Route path="/loan/:applicationId/document" Component={PaymentSchedule}/>
                    <Route path="/loan/:applicationId/document/sign" Component={DocumentSign}/>
                    <Route path="*" Component={ErrorPage}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
