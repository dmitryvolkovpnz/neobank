import React from 'react';
import Button from '../../ui/button/Button';
import './choosethecard.scss';

function ChooseTheCard() {
    return (
        <div className="choose-the-card">
            <div className="container">
                <div className="choose-the-card__content">
                    <div className="main-content">
                        <div className="main-content__title">Choose the design you like and apply for card right now
                        </div>
                        <Button>Choose the card</Button>
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

export default ChooseTheCard;