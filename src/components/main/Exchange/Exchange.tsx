import React, {useEffect} from 'react';
import {useState} from "react";
import './exchange.scss';
import { fetchCource } from '../../service/api'

function Exchange() {
    const [usd, setUsd] = useState ('');
    const [eur, setEur] = useState('');
    const [bgn, setBgn] = useState('');
    const [cad, setCad] = useState ('');
    const [egp, setEgp] = useState ('');
    const [chf, setChf] = useState ('');

    useEffect(() => {
        const apiExchange = async () => {
            const coin = await fetchCource();
            const newUSD = (1 / coin.USD).toFixed(2);
            setUsd(newUSD);
            const newCAD = (1 / coin.CAD).toFixed(2);
            setCad(newCAD);
            const newEUR = (1 / coin.EUR).toFixed(2);
            setEur(newEUR);
            const newBGN = (1 / coin.BGN).toFixed(2);
            setBgn(newBGN);
            const newEGP = (1 / coin.EGP).toFixed(2);
            setEgp(newEGP);
            const newCHF = (1 / coin.CHF).toFixed(2);
            setChf(newCHF);
        };
        apiExchange();
        const timeoutId = window.setInterval(()=>{
            apiExchange();
        }, 900000);

        return () => {
            window.clearInterval(timeoutId);
        };

        }, []);
    return (
            <div className="container">
                <div className="exchange">
                    <div className="exchange__container">
                        <h1 className="exchange__title">Exchange rate in internet bank</h1>
                        <div className="exchange__date">
                            Update every 15 minutes, TODAY
                        </div>
                    </div>
                    <div className="coin">
                        <div className="coin__item">
                            usd: <span className="money_usd">{usd}</span> rub
                        </div>
                        <div className="coin__item">
                            eur: <span className="money_eur money">{eur}</span> rub
                        </div>
                        <div className="coin__item">
                            bgn: <span className="money_bgn money">{bgn}</span> rub
                        </div>
                        <div className="coin__item">
                            cad: <span className="money_cad money">{cad}</span> rub
                        </div>
                        <div className="coin__item">
                            egp: <span className="money_egp money">{egp}</span> rub
                        </div>
                        <div className="coin__item">
                            chf: <span className="money_chf money">{chf}</span> rub
                        </div>
                    </div>
                </div>
            </div>
    );

}

export default Exchange;