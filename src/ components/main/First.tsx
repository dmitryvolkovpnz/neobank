import React from 'react';

function First() {
    return (
        <div className="first">
            <div className="container">
                <div className="first__content">
                    <div className="main-content">
                        <div className="main-content__title">Choose the design you like and apply for card right now
                        </div>
                        <button className="button">Choose the card</button>
                    </div>
                    <div className="card">
                        <img className="card__item" src="img/card_1.png" alt=""/>
                        <img className="card__item" src="img/card_2.png" alt=""/>
                        <img className="card__item" src="img/card_3.png" alt=""/>
                        <img className="card__item" src="img/card_4.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default First;