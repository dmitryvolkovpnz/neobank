import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";


function Cource() {
    const [usd, setUsd] = useState ('');
    const [eur, setEur] = useState('');
    const [bgn, setBgn] = useState('');
    const [cad, setCad] = useState ('');
    const [egp, setEgp] = useState ('');
    const [chf, setChf] = useState ('');

    useEffect(() => {
        const fetchCource = async () => {
            try {
                const response = await axios.get(`https://v6.exchangerate-api.com/v6/ebc06a5036843508fdb31eb4/latest/RUB`);
                const newUSD = (1 /  response.data.conversion_rates.USD).toFixed(2);
                setUsd(newUSD);
                const newCAD = (1 /  response.data.conversion_rates.CAD).toFixed(2);
                setCad(newCAD);
                const newEUR = (1 /  response.data.conversion_rates.EUR).toFixed(2);
                setEur(newEUR);
                const newBGN = (1 /  response.data.conversion_rates.BGN).toFixed(2);
                setBgn(newBGN);
                const newEGP = (1 /  response.data.conversion_rates.EGP).toFixed(2);
                setEgp(newEGP);
                const newCHF = (1 /  response.data.conversion_rates.CHF).toFixed(2);
                setChf(newCHF);
            } catch (error) {
                console.log('Ошибки в выгрузке', error);
            }
        };
        fetchCource();

        const timeoutId = window.setInterval(()=>{
            fetchCource();
        }, 15000);
        return () => {
            window.clearInterval(timeoutId);
        };
        }, []);
    return (
        <div>
            <div className="container">
                <div className="cource">
                    <div className="cource__container">
                        <h1 className="cource__container__title">Курсы валют на сегодня</h1>
                        <div className="cource__container__date">
                            Последнее обновление сегодня в <span className="date">18:00</span>
                        </div>
                    </div>
                    <div className="coin">
                        <div className="coin__item">
                            usd: <span className="money_usd">{usd}</span> руб
                        </div>
                        <div className="coin__item">
                            eur: <span className="money_eur money">{eur}</span> руб
                        </div>
                        <div className="coin__item">
                            bgn: <span className="money_bgn money">{bgn}</span> руб
                        </div>
                        <div className="coin__item">
                            cad: <span className="money_cad money">{cad}</span> руб
                        </div>
                        <div className="coin__item">
                            egp: <span className="money_egp money">{egp}</span> руб
                        </div>
                        <div className="coin__item">
                            chf: <span className="money_chf money">{chf}</span> руб
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Cource;