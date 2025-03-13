import React from 'react'
import Button from '../../ui/button/Button';
import './digitalcart.scss'

function DigitalCart() {
    const isOfferEnabled = localStorage.getItem("isOfferEnabled");
    let btn;

    if (isOfferEnabled) {
        btn = <Button type="button" link="#creditOffers">Continue registration</Button>;
    } else {
        btn = <Button type="button" link="#applyForm">Apply for card</Button>;
    }

    return (
        <div className='digital-card'>
            <div className='container'>
                <div className='digital-card__cart horizontal-gradient shadow'>
                    <div className='digital-card__main'>
                        <div className='digital-card__title'>Platinum digital credit card</div>
                        <div className='digital-card__subtitle'>Our best credit card. Suitable for everyday spending and
                            shopping. Cash withdrawals and transfers without commission and interest.
                        </div>
                        <div className='digital-card__items'>
                            <div className='itemcard'>
                                <div className='itemcard__title'>Up to 160 days</div>
                                <div className='itemcard__subtitle'>No percent</div>
                            </div>
                            <div className='itemcard'>
                                <div className='itemcard__title'>Up to 600 000 ₽</div>
                                <div className='itemcard__subtitle'>Credit limit</div>
                            </div>
                            <div className='itemcard'>
                                <div className='itemcard__title'>0 ₽</div>
                                <div className='itemcard__subtitle'>Card service is free</div>
                            </div>
                        </div>

                        {btn}
                    </div>
                    <div className='digital-card__imgcontainer'>
                        <img className='digital-card__img' src="img/cardImage1.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalCart;