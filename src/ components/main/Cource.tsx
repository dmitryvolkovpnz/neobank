import React from 'react';

function Cource() {
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
                            usd: <span className="money_usd">16</span> руб
                        </div>
                        <div className="coin__item">
                            eur: <span className="money_eur money">16</span> руб
                        </div>
                        <div className="coin__item">
                            bgn: <span className="money_bgn money">16</span> руб
                        </div>
                        <div className="coin__item">
                            cad: <span className="money_cad money">16</span> руб
                        </div>
                        <div className="coin__item">
                            egp: <span className="money_egp money">16</span> руб
                        </div>
                        <div className="coin__item">
                            chf: <span className="money_chf money">16</span> руб
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cource;